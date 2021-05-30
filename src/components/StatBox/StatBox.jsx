import React from 'react';
import * as S from './StatBox.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelector } from 'react-redux';
import { selectCountry } from '../../store/covid';

import Box from '../Box/Box';

function StatBox({
  title,
  stat = 'deaths',
  primary = false,
  secondary = false,
  icon,
}) {
  const country = useSelector(selectCountry);
  return (
    <Box primary={primary} secondary={secondary}>
      <S.Title>
        {icon && <FontAwesomeIcon icon={icon} />} {title}
      </S.Title>
      <S.Body>{country[stat].toLocaleString()}</S.Body>
    </Box>
  );
}

export default StatBox;
