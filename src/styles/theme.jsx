import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
  },
  colorText: {
    body: 'var(--color-text-body)',
  },
  padding: {
    containers: '20px',
  },
  borderRadius: {
    primary: '6px',
  },
  breakpoints: {
    xs: 370,
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
