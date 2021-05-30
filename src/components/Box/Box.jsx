import React from 'react';
import * as S from './Box.style';

function Box({ primary, secondary, children }) {
  return (
    <S.Box primary={primary} secondary={secondary}>
      {children}
    </S.Box>
  );
}

export default Box;
