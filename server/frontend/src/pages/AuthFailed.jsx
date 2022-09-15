import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react";

const AuthFailed = () => {
  return (
    <Box
      h={"500px"}
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      flexDirection={"column"}
    >
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        w={"40%"}
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle fontFamily={"mono"} mt={4} mb={1} fontSize="lg">
          Something Went Wrong
        </AlertTitle>
        <AlertDescription fontFamily={"mono"} maxWidth="sm">
          Please Try with your Valid Crdentials
        </AlertDescription>
      </Alert>
    </Box>
  );
};

export default AuthFailed;
