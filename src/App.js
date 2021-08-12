import { Box, Container } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Container mt="10" maxW="xl" centerContent>
        <Box bg="green.500" w="100%" p={4} color="white">
          ChakraUI is working!!
        </Box>
      </Container>
    </div>
  );
}

export default App;
