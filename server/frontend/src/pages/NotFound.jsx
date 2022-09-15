import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box h={"100vh"}>
      <Box w="40%" p={10} boxShadow="xl" m={"100px auto"} textAlign="center">
        <Text
          fontWeight={"bold"}
          fontSize="6xl"
          letterSpacing={"2px"}
          color="gray.500"
        >
          404
        </Text>
        <Text
          fontSize={"2xl"}
          fontWeight="bold"
          color={"tomato"}
          fontFamily="sans-serif"
          letterSpacing={"1px"}
        >
          Page Not Found
        </Text>

        <Text color={"gray.500"} fontSize="sm" mt={5}>
          Go to the{" "}
          <Link to={"/"}>
            <span style={{ textDecoration: "underline" }}>Homepage</span>
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default NotFound;
