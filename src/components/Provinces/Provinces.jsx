import React from 'react';
import * as S from './Provinces.style';

import { useSelector } from 'react-redux';
import { selectCountry } from '../../store/covid';

function Provinces() {
  const currentCountry = useSelector(selectCountry);
  return (
    <div>
      <h2>Provinces</h2>
      <div>
        <S.Table>
          <thead>
            <tr>
              <th>Province</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Active</th>
              <th>Deaths</th>
            </tr>
          </thead>
          {currentCountry.provinces.map((province) => (
            <tr>
              <td>
                {province.provinceState ? province.provinceState : 'Unknown'}
              </td>
              <td>{province.confirmed}</td>
              <td>{province.recovered} </td>
              <td>{province.active}</td>
              <td>{province.deaths}</td>
            </tr>
          ))}
        </S.Table>
      </div>
    </div>
  );
}

export default Provinces;
