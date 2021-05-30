import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCountry } from '../../store/covid';

const StyledHeading = styled.h2`
  text-align: center;
`;

function CountryHeading() {
  const country = useSelector(selectCountry);
  return <StyledHeading>{country?.name}</StyledHeading>;
}

export default CountryHeading;
