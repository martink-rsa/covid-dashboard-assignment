/**
 * Sorts data from the API into a more useable format
 * @param {*} data
 * @returns An object with countries accessed by ISO3 key
 *
 */
export function sortCovidData(data) {
  return data.reduce((result, entry) => {
    const { iso3, countryRegion, active, confirmed, recovered, deaths } = entry;
    // Check if the key exists, add to values if it does,
    if (result.hasOwnProperty(iso3)) {
      result[iso3].active += active;
      result[iso3].confirmed += confirmed;
      result[iso3].recovered += recovered;
      result[iso3].deaths += deaths;
      result[iso3].provinces.push(entry);
    } else {
      // Key doesn't exist, create the right shape and init with current values
      result[iso3] = {
        name: countryRegion,
        iso3,
        active,
        confirmed,
        recovered,
        deaths: deaths,
        provinces: [entry],
      };
    }
    return result;
  }, {});
}

/**
 * Gets a list of countries from the Covid data
 * @param {*} data
 * @returns
 */
export function getCountries(data) {
  return Object.keys(data)
    .map((key) => ({
      iso3: data[key].iso3,
      name: data[key].name,
    }))
    .sort((a, b) => (a.name > b.name ? 1 : -1));
}
/**
 * Basic API call using 'fetch'
 * @param {string} url
 * @returns Data in JSON format
 */
export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
