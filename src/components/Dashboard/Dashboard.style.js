import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.containers};
  margin: 0 auto;
  max-width: 900px;
`;

export const StatBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
