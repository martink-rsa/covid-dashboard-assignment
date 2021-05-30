import React from 'react';

function CountryDetails({ country }) {
  const { countryRegion, confirmed, active, recovered, deaths } = country;
  return (
    <div>
      <h2>{countryRegion}</h2>
      <div>Deaths: {deaths}</div>
      <div>Active: {active}</div>
      <div>Confirmed: {confirmed}</div>
      <div>Recovered: {recovered}</div>
    </div>
  );
}

export default CountryDetails;
