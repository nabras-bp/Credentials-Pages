import { Flex, Heading, Icon } from "@chakra-ui/react";

import { FaReact } from "react-icons/fa6";
const Header: React.FC = () => {
  return (
    <Flex
      alignItems={"center"}
      direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
      justify={{ base: "center", sm: "center", md: "center", lg: "flex-start" }}
      mt={4}
      ml={6}
    >
      <Icon as={FaReact} boxSize={14} mr={2} />
      <Heading fontWeight={300}>Diprella</Heading>
    </Flex>
  );
};

export default Header;
