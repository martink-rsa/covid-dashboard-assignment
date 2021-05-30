import styled from 'styled-components';

export const Box = styled.div`
  background-color: ${({ primary, secondary, theme }) => {
    if (primary) {
      return theme.color.primary;
    }
    if (secondary) {
      return theme.color.secondary;
    }
    return 'none';
  }};
  padding: ${({ theme }) => theme.padding.containers};
  /* margin-bottom: ${({ theme }) => theme.padding.containers}; */
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;
