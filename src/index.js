import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthProvider } from './Hooks/useAuth'

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme} >
    	<AuthProvider>
    		<App />
    	</AuthProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);