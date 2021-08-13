import {
  Box,
  Button,
  Container,
  Heading,
  Divider,
  List,
  ListItem,
  Link,
  Image,
} from '@chakra-ui/react';
import androidAppstore from '../assets/android-app-download.svg';
import iosAppstore from '../assets/ios-app-download.svg';

function Footerbottom() {
  return (
    <Box mt={5} color="#ffffff" background="#212121" py="10">
      <Container maxWidth="container.xl">
        <Box display="flex" alignItems="center">
          <Heading size="md">Create your own Meetup group.</Heading>
          <Button ml="4" colorScheme="white" variant="outline">
            Get Started
          </Button>
        </Box>
        <Divider my="10" />
        <Box display="flex" alignItems="top">
          <Box flex="1">
            <Heading size="sm">Your Account</Heading>
            <List mt="4" spacing={2}>
              <ListItem>
                <Link color="#A2A2A2">Sign up</Link>
              </ListItem>
              <ListItem>
                <Link color="#A2A2A2">Log in</Link>
              </ListItem>
              <ListItem>
                <Link color="#A2A2A2">Help</Link>
              </ListItem>
            </List>
          </Box>

          <Box flex="1">
            <Heading size="sm">Discover</Heading>
            <List mt="4" spacing={2}>
              <ListItem>
                <Link color="#A2A2A2">Groups</Link>
              </ListItem>
              <ListItem>
                <Link color="#A2A2A2">Calendar</Link>
              </ListItem>
              <ListItem>
                <Link color="#A2A2A2">Topics</Link>
              </ListItem>
              <ListItem>
                <Link color="#A2A2A2">Cities</Link>
              </ListItem>
              <ListItem>
                <Link color="#A2A2A2">Online Events</Link>
              </ListItem>
              <ListItem>
                <Link color="#A2A2A2">Local Guides</Link>
              </ListItem>
            </List>
          </Box>

          <Box flex="1">
            <Heading size="sm">Your Account</Heading>
            <List mt="4" spacing={2}>
              <ListItem>
                <Link color="#A2A2A2">Sign up</Link>
              </ListItem>
              <ListItem>
                <Link color="#A2A2A2">Log in</Link>
              </ListItem>
              <ListItem>
                <Link color="#A2A2A2">Help</Link>
              </ListItem>
            </List>
          </Box>
        </Box>

        {/* follow and app icons */}
        <Box mt="15" d="flex" justifyContent="space-between">
          <Box d="flex" flexDirection="column">
            <Box mb="2">Follow us</Box>
            <Box d="flex">
              <Link mr="4">
                <svg
                  data-swarm-icon="true"
                  height="28"
                  fill="#ffffff"
                  mr="3"
                  width="28"
                  viewBox="0 0 28 28"
                >
                  <path d="M26.5 14c0-6.904-5.596-12.5-12.5-12.5S1.5 7.096 1.5 14c0 6.24 4.571 11.41 10.547 12.348v-8.735H8.873V14h3.174v-2.754c0-3.133 1.866-4.863 4.721-4.863 1.368 0 2.798.244 2.798.244v3.076H17.99c-1.553 0-2.037.964-2.037 1.952V14h3.467l-.554 3.613h-2.913v8.735C21.93 25.41 26.5 20.24 26.5 14"></path>
                </svg>
              </Link>
              <Link mr="4">
                <svg
                  data-swarm-icon="true"
                  fill="#ffffff"
                  height="28"
                  mr="3"
                  width="28"
                  viewBox="0 0 28 28"
                >
                  <path d="M9.167 24.641c9.811 0 15.18-8.136 15.18-15.18 0-.228 0-.457-.01-.686A10.869 10.869 0 0027 6.007c-.957.427-1.987.708-3.07.843a5.368 5.368 0 002.352-2.955 10.612 10.612 0 01-3.392 1.29A5.325 5.325 0 0019 3.5a5.342 5.342 0 00-5.338 5.337c0 .417.052.822.135 1.218C9.365 9.836 5.432 7.703 2.8 4.478a5.336 5.336 0 00-.718 2.684 5.35 5.35 0 002.372 4.443 5.396 5.396 0 01-2.414-.666v.073a5.346 5.346 0 004.277 5.233 5.201 5.201 0 01-1.405.187c-.343 0-.676-.03-.999-.093a5.335 5.335 0 004.984 3.704 10.7 10.7 0 01-6.628 2.289c-.426 0-.853-.021-1.269-.073a15.176 15.176 0 008.167 2.382"></path>
                </svg>
              </Link>
              <Link mr="4">
                <svg
                  data-swarm-icon="true"
                  fill="#ffffff"
                  height="28"
                  width="28"
                  viewBox="0 0 28 28"
                >
                  <path d="M14.34 5c1.56.008 8.039.066 9.818.543 1.119.299 2 1.18 2.299 2.298C27 9.87 27 14.1 27 14.1v.01c0 .23-.016 4.278-.543 6.248a3.256 3.256 0 01-2.299 2.298c-1.82.488-8.562.538-9.92.543h-.477c-1.357-.005-8.099-.055-9.92-.543a3.256 3.256 0 01-2.298-2.298c-.481-1.796-.536-5.32-.542-6.102v-.313c.006-.782.06-4.305.542-6.102.3-1.118 1.18-2 2.299-2.298C5.622 5.066 12.1 5.008 13.66 5zm-2.94 5.2V18l6.755-3.9-6.755-3.9z"></path>
                </svg>
              </Link>
              <Link mr="4">
                <svg
                  data-swarm-icon="true"
                  height="28"
                  width="28"
                  fill="#ffffff"
                  viewBox="0 0 28 28"
                >
                  <path d="M13.996 2c-3.258 0-3.666.014-4.946.072-1.277.058-2.149.261-2.912.558a5.88 5.88 0 00-2.125 1.383A5.88 5.88 0 002.63 6.138c-.297.763-.5 1.635-.558 2.912C2.014 10.33 2 10.738 2 13.996s.014 3.667.072 4.946c.058 1.277.261 2.15.558 2.912a5.88 5.88 0 001.383 2.125 5.88 5.88 0 002.125 1.384c.763.296 1.635.499 2.912.557 1.28.059 1.688.072 4.946.072s3.667-.013 4.946-.072c1.277-.058 2.15-.26 2.912-.557a5.88 5.88 0 002.125-1.384 5.88 5.88 0 001.384-2.125c.296-.763.499-1.635.557-2.912.059-1.28.072-1.688.072-4.946s-.013-3.666-.072-4.946c-.058-1.277-.26-2.149-.557-2.912a5.88 5.88 0 00-1.384-2.125 5.88 5.88 0 00-2.125-1.383c-.763-.297-1.635-.5-2.912-.558C17.662 2.014 17.254 2 13.996 2zm4.848 2.231c1.17.054 1.805.25 2.227.413.56.218.96.478 1.38.898.42.42.68.82.897 1.38.164.422.36 1.057.413 2.227.05 1.096.066 1.527.07 3.708v2.279c-.004 2.18-.02 2.611-.07 3.708-.053 1.17-.249 1.805-.413 2.227-.218.56-.478.96-.897 1.38-.42.42-.82.68-1.38.897-.422.164-1.058.36-2.227.413-1.096.05-1.528.066-3.708.07h-2.28c-2.18-.004-2.611-.02-3.707-.07-1.17-.053-1.805-.249-2.228-.413a3.716 3.716 0 01-1.38-.897 3.734 3.734 0 01-.897-1.38c-.164-.422-.36-1.058-.413-2.227-.052-1.139-.067-1.56-.07-3.968v-1.76c.003-2.408.018-2.829.07-3.967.054-1.17.25-1.805.413-2.228.218-.56.478-.96.898-1.38.42-.419.82-.679 1.38-.897.422-.164 1.057-.36 2.227-.413 1.138-.052 1.56-.067 3.967-.07h1.76c2.408.003 2.83.018 3.968.07zm-4.848 3.605a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 2.161a3.999 3.999 0 110 7.998 3.999 3.999 0 010-7.998zM20.4 6.153a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
                </svg>
              </Link>
            </Box>
          </Box>
          <Box d="flex">
            <Image w="128px" p="3" src={androidAppstore}></Image>
            <Image w="128px" p="3" src={iosAppstore}></Image>
          </Box>
        </Box>

        {/* bottom links */}
        <Box d="flex" mt="20">
          {' '}
          <Link mr="5" fontSize="sm">
            © 2021 Meetup
          </Link>
          <Link mr="5" fontSize="sm">
            Terms of Service
          </Link>
          <Link mr="5" fontSize="sm">
            Privacy Policy
          </Link>
          <Link mr="5" fontSize="sm">
            Cookie Policy
          </Link>
          <Link mr="5" fontSize="sm">
            Help
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footerbottom;
