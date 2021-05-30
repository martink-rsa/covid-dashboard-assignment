import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCurrentStat,
  setCountry,
  selectCountry,
} from '../../store/covid';
import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from 'react-simple-maps';
import { globalColors } from '../../styles/globalStyle';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart = ({ data, secondary }) => {
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCountry);

  const currentStat = useSelector(selectCurrentStat);
  const valueThreshold = Math.max(
    ...Object.keys(data).map((key) => data[key][currentStat]),
  );
  const colorScale = scaleLinear()
    .domain([0, valueThreshold])
    .range([
      '#ffedea',
      secondary ? globalColors.secondary : globalColors.primary,
    ]);

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147,
      }}
      style={{ marginTop: '-50px' }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {Object.keys(data).length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data[geo.properties.ISO_A3];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d[currentStat]) : '#555'}
                  stroke={
                    currentCountry.iso3 === d?.iso3
                      ? secondary
                        ? globalColors.secondary
                        : globalColors.primary
                      : 'none'
                  }
                  strokeWidth="2"
                  onClick={(obj, e) => {
                    if (d !== undefined) {
                      dispatch(setCountry(d.iso3));
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default MapChart;
