import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("User registered successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxW="md" centerContent>
      <Box p={8} mt={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={6}>Register</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            {error && <Text color="red.500">{error}</Text>}
            {success && <Text color="green.500">{success}</Text>}
            <Button type="submit" colorScheme="blue" width="full">Register</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default Register;