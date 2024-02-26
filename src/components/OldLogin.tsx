import {
    AbsoluteCenter,
    Box,
    Divider,
    Flex,
    FormControl,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    Button,
  } from "@chakra-ui/react";
  import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa6";
  import { FiEye, FiEyeOff } from "react-icons/fi";
  import Header from "./Header";
  import { useState } from "react";
  // import Sidebar from "./Sidebar";
  
  const OldLogin: React.FC = () => {
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    return (
      <Box width={"70vw"}>
        <Header />
        <Flex direction="column">
          <Heading>Login to your Account</Heading>
          <Text>Login using social networks</Text>
          <Stack direction="row">
            <Icon
              as={FaFacebookF}
              boxSize={12}
              borderRadius={"50%"}
              p={3}
              bgColor={"#48556D"}
              color={"#fff"}
            />
  
            <Icon
              as={FaGooglePlusG}
              boxSize={12}
              borderRadius={"50%"}
              p={3}
              bgColor={"#DF4D3A"}
              color={"#fff"}
            />
            <Icon
              as={FaLinkedinIn}
              boxSize={12}
              borderRadius={"50%"}
              p={3}
              color={"#fff"}
              bgColor={"#48556D"}
            />
          </Stack>
          <Box position="relative" padding={10}>
            <Divider />
            <AbsoluteCenter bgColor="white" p={4} color={"#202121"}>
              OR
            </AbsoluteCenter>
          </Box>
          <FormControl>
            <Input
              type="email"
              placeholder="Email"
              border={"none"}
              bgColor={"#EFF5F3"}
              _placeholder={{ fontWeight: "bold" }}
            />
            <InputGroup>
              <Input
                bgColor={"#EFF5F3"}
                border={"none"}
                type={passwordVisibility ? "text" : "Password"}
                placeholder="Password"
                _placeholder={{ fontWeight: "bold" }}
              />
              <InputRightElement
                width={"3rem"}
                onClick={() => setPasswordVisibility(!passwordVisibility)}
              >
                <Icon as={passwordVisibility ? FiEye : FiEyeOff} />
              </InputRightElement>
            </InputGroup>
            <Button py={8} bgColor={"#27B397"} color={"#fff"}>
              Sign In
            </Button>
          </FormControl>
        </Flex>{" "}
        {/* <Sidebar /> */}
      </Box>
    );
  };
  
  export default OldLogin;
  // m={4}
  