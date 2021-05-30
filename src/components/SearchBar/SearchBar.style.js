import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 12px 8px;
  width: 100%;
`;

/* Demonstration of using nested styles */
export const SuggestionArea = styled.div`
  box-sizing: border-box;
  position: absolute;
  color: #000;
  background: #fff;
  bottom: 0;
  transform: translateY(calc(100% + 8px));
  width: 100%;
  max-height: 210px;
  overflow-y: auto;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      button {
        padding: 10px;
        width: 100%;
        height: 100%;
        text-align: left;
        border: 0;
        :hover {
          background-color: ${({ theme }) => theme.color.primary};
        }
      }
    }
  }
`;
