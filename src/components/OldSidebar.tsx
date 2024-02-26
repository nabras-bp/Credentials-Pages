import { Button, Flex, Heading, Text } from "@chakra-ui/react";

import BGSidebar from "../assets/Images/BGSidebar.jpg";
const OldSidebar: React.FC = () => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      width={"30vw"}
      bgImage={`url(${BGSidebar})`}
      bgSize="cover"
      bgPosition="center"
      h="100vh"
    >
      <Flex
        direction={"column"}
        justify={"space-evenly"}
        alignItems={"center"}
        height={"40%"}
        // bgColor={"teal"}
      >
        <Heading color={"#fff"} size={"3xl"}>
          New Here?
        </Heading>
        <Text color={"#fff"} fontSize={"3xl"} textAlign={"justify"}>
          Sign up and discover a great amount of new opportunities!
        </Text>
        <Button bgColor={"#fff"} color={"#000"} width={"50%"} py={"25px"} >
          Sign Up
        </Button>
        {/* Make it Dynamic */}
      </Flex>
    </Flex>
  );
};

export default OldSidebar;
