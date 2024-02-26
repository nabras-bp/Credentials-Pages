import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa6";
import Header from "./Header";
const OldSignup: React.FC = () => {
  return (
    <Box>
      <Header />
      <Flex direction="column">
        <Heading>Login to your Account</Heading>
        <Text>Login using social networks</Text>
        <Stack direction="row">
          <Icon as={FaFacebookF} />
          <Icon as={FaGooglePlusG} />
          <Icon as={FaLinkedinIn} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default OldSignup;
