import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import BGSidebar from "../assets/Images/BGSidebar.jpg";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <Flex
      display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      direction={"column"}
      justify={"center"}
      width={{ md: "35vw", lg: "35vw" }}
      bgImage={`url(${BGSidebar})`}
      bgSize="cover"
      bgPosition="center"
      h="100vh"
    >
      <Flex
        h={"50%"}
        direction={"column"}
        justify={"space-around"}
        alignItems={"center"}
        // bgColor={"red"}
      >
        <Heading color={"#fff"} size={"3xl"}>
          New Here?
        </Heading>
        <Text color={"#fff"} fontSize={"3xl"} px={8} textAlign={"center"}>
          Sign up and discover a great amount of new opportunities!
        </Text>
        {pathname === "/" ? (
          <Button
            as={Link}
            to={"/signup"}
            bgColor={"#fff"}
            width={"40%"}
            py={8}
            borderRadius={34}
            fontSize={"xl"}
            fontWeight={"bold"}
          >
            Sign up
          </Button>
        ) : (
          <Button
            as={Link}
            to={"/"}
            bgColor={"#fff"}
            width={"40%"}
            py={8}
            borderRadius={34}
            fontSize={"xl"}
            fontWeight={"bold"}
          >
            Login
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
