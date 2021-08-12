import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme  from './extendTheme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
