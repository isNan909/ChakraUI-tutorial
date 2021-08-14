import {
  Box,
  Image,
  Container,
  Heading,
  Grid,
  Link,
  Divider,
} from '@chakra-ui/react';
import Popularimage from '../assets/popular-image.jpg';

function Popular() {
  return (
    <Box mt={20}>
      <Container maxWidth="container.xl">
        <Box
          mb="7"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Heading fontWeight="black" alignItems="center" as="h3" size="lg">
              Popular groups
            </Heading>
          </Box>
          <Box>
            <Link fontWeight="semibold" color="teal.500">
              Explore more groups
            </Link>
          </Box>
        </Box>
        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap={6}
        >
          <Box
            border="1px"
            borderColor="gray.200"
            p="15px"
            width="100%"
            align="left"
          >
            <Box d="flex" alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={Popularimage}
                alt="brand"
                mr="15px"
              />
              <Heading
                alignItems="center"
                as="h6"
                fontweights="black"
                size="md"
              >
                Aurora Southlands Parker Woman's Social Group
              </Heading>
            </Box>
            <Divider my="3" mb="2" />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Mon, Aug 16 @ 10:45 PM NPT
            </Box>
            <Box fontWeight="bold" color="#212121">
              VOLUNTEER COMMITTEE NEEDED FROM OUR GROUP FOR 911 EVENT TBA on
              SEPT. 11th 2021
            </Box>
          </Box>

          <Box
            border="1px"
            borderColor="gray.200"
            p="15px"
            width="100%"
            align="left"
          >
            <Box d="flex" alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={Popularimage}
                alt="brand"
                mr="15px"
              />
              <Heading
                alignItems="center"
                as="h6"
                fontweights="black"
                size="md"
              >
                Vintage 1960 Minneapolis
              </Heading>
            </Box>
            <Divider my="3" mb="2" />
            <Box
              py="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Sat, Aug 14 @ 7:15 AM NPT
            </Box>
            <Box fontWeight="bold" color="#212121">
              Belfast Cowboys @ Irish Fair (St. Paul Harriet Island) - Friday
            </Box>
          </Box>

          <Box
            border="1px"
            borderColor="gray.200"
            p="15px"
            width="100%"
            align="left"
          >
            <Box d="flex" alignItems="center">
              <Image
                position="relative"
                w="50px"
                src={Popularimage}
                alt="brand"
                mr="15px"
              />
              <Heading
                alignItems="center"
                as="h6"
                fontweights="black"
                size="md"
              >
                Reno/Sparks Singles and/or Diners and Activities Group
              </Heading>
            </Box>
            <Divider my="3" />
            <Box
              pb="2"
              color="#877457"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Sat, Aug 14 @ 5:15 AM NPT
            </Box>
            <Box fontWeight="bold" color="#212121">
              Afterwork fun at Terrace Lounge
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Popular;
