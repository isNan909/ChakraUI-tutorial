import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#f77070',
    },
    grey: {
      100: '#eff3fa',
    },
    blue: {
      100: '#0098ae',
    },
    red: {
      100: '#ff3d3d',
    },
  },
  fonts: {
    body: 'Graphik Font',
    heading: 'Graphik Font',
  },
});

export default customTheme;
