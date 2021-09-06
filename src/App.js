import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import TaskPage from './features/task/TaskPage';
import '@fontsource/poppins';

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TaskPage />
    </ChakraProvider>
  );
}

export default App;
