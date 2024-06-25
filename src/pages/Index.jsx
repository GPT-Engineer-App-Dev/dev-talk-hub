import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaLaptopCode, FaDatabase, FaCloud, FaMobileAlt } from "react-icons/fa";

const NavBar = () => (
  <Flex as="nav" bg="brand.800" color="white" padding={4} justifyContent="space-between" alignItems="center">
    <Heading size="md">Tech Forum</Heading>
    <HStack spacing={4}>
      <Link as={RouterLink} to="/" display="flex" alignItems="center">
        <FaHome />
        <Text ml={2}>Home</Text>
      </Link>
      <Link as={RouterLink} to="/create-post" display="flex" alignItems="center">
        <FaLaptopCode />
        <Text ml={2}>Create Post</Text>
      </Link>
      <Link href="#web-dev" display="flex" alignItems="center">
        <FaLaptopCode />
        <Text ml={2}>Web Development</Text>
      </Link>
      <Link href="#databases" display="flex" alignItems="center">
        <FaDatabase />
        <Text ml={2}>Databases</Text>
      </Link>
      <Link href="#cloud" display="flex" alignItems="center">
        <FaCloud />
        <Text ml={2}>Cloud Computing</Text>
      </Link>
      <Link href="#mobile-dev" display="flex" alignItems="center">
        <FaMobileAlt />
        <Text ml={2}>Mobile Development</Text>
      </Link>
    </HStack>
  </Flex>
);

const Footer = () => (
  <Box as="footer" bg="brand.900" color="white" padding={4} textAlign="center">
    <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
  </Box>
);

const Section = ({ id, title, children }) => (
  <Box as="section" id={id} paddingY={8}>
    <Heading size="lg" mb={4}>{title}</Heading>
    {children}
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl">
      <NavBar />
      <VStack spacing={8} align="stretch" paddingY={8}>
        <Section id="home" title="Welcome to Tech Forum">
          <Text>Engage in discussions about the latest in technology.</Text>
        </Section>
        <Divider />
        <Section id="web-dev" title="Web Development">
          <Text>Discuss the latest trends and technologies in web development.</Text>
        </Section>
        <Divider />
        <Section id="databases" title="Databases">
          <Text>Share knowledge and best practices about databases.</Text>
        </Section>
        <Divider />
        <Section id="cloud" title="Cloud Computing">
          <Text>Explore the world of cloud computing and its applications.</Text>
        </Section>
        <Divider />
        <Section id="mobile-dev" title="Mobile Development">
          <Text>Talk about mobile app development for various platforms.</Text>
        </Section>
      </VStack>
      <Footer />
    </Container>
  );
};

export default Index;