import { Box, Image, Container, Heading } from '@chakra-ui/react';
import deviceLeft from '../assets/device-left.webp';
import meetupLogo from '../assets/meetup-logo.svg';
import deviceRight from '../assets/device-right.webp';

import androidAppstore from '../assets/android-app-download.svg';
import iosAppstore from '../assets/ios-app-download.svg';

function Connected() {
  return (
    <Box my="20">
      <Container maxWidth="container.xl">
        <Box
          display="flex"
          pos="relative"
          justify-content="space-between"
          alignItems="center"
        >
          <Box
            display={{
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'none',
            }}
          >
            <Image w="260px" src={deviceLeft}></Image>
          </Box>
          <Box pos="relative" mx="auto" align="center">
            <Image w="80px" left="0" src={meetupLogo}></Image>
            <Heading as="h6" size="md" my="7">
              Stay connected. <br /> Download the app.
            </Heading>
            <Box d="flex">
              <Image w="180px" p="5" src={androidAppstore}></Image>
              <Image w="180px" p="5" src={iosAppstore}></Image>
            </Box>
          </Box>
          <Box
            display={{
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'none',
            }}
          >
            <Image w="260px" right="0" src={deviceRight}></Image>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Connected;
