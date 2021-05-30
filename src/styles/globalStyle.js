import { createGlobalStyle } from 'styled-components';

export const globalColors = {
  primary: '#8d99ae',
  secondary: '#ef233c',
  background: '#2b2d42',
};

const GlobalStyle = createGlobalStyle`
  html {
    --color-primary: ${globalColors.primary};
    --color-secondary: ${globalColors.secondary};
    --color-background: ${globalColors.background};
    --color-text-body: #fff;
  }
  #root {
    height: 100vh;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    color: var(--color-text-body);
    background: var(--color-background);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
