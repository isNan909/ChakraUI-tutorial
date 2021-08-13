import Banner from './components/Banner';
import ItWorks from './components/ItWorks';
import Upcomming from './components/Upcomming';
import Popular from './components/Popular';
import Connected from './components/Connected';
import Stories from './components/Stories';
import Footerbottom from './components/Footerbottom';
import { Box, Image } from '@chakra-ui/react';
import imageBg from './assets/bg.svg';

function App() {
  return (
    <div className="App">
      <Box position="absolute" left="0" top="0" right="0">
        <Banner />
        <ItWorks />
        <Upcomming />
        <Popular />
        <Connected />
        <Stories />
        <Footerbottom />
      </Box>
      <Box
        position="relative"
        top="0"
        bottom="0"
        right="0"
        left="0"
        height="100vh"
        zIndex={-1}
      >
        <Image w="80%" m="auto" objectFit="cover" sizes="300" src={imageBg} />
      </Box>
    </div>
  );
}

export default App;
