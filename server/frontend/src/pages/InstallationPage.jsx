import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  IconButton,
  Select,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAddTheme, useGetAllThemes } from "../services/InstallationService";

const InstallationPage = () => {
  const [installedTheme, setInstalledTheme] = useState(null);
  const { data, isLoading, isError, isSuccess, error } = useGetAllThemes();
  const {
    mutate,
    data: response,
    isError: isAddThemeError,
    isLoading: addLoading,
    error: addThemeError,
    isSuccess: addThemeSuccess,
  } = useAddTheme(installedTheme);
  console.log({ data, installedTheme });

  const [loading, setLoading] = useState(false);
  const [installed, setInstalled] = useState(false);

  function themeStatus() {
    return (
      isSuccess &&
      data?.data?.find((dt) => dt.theme_id == installedTheme)?.installed
    );
  }

  const handleInstall = () => {
    mutate(installedTheme);
  };

  console.log({ addThemeError, response, isAddThemeError });

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      fontFamily="roboto"
      justifyContent="center"
      minHeight={"75vh"}
    >
      <Box w={{ md: "75%" }} textAlign="center" p={10} boxShadow="lg">
        <Text
          color={"gray.600"}
          letterSpacing="2px"
          fontSize={"xl"}
          fontWeight="bold"
          mb={2}
        >
          One Click Installation
        </Text>

        <Stack spacing={2} direction={"row"}>
          <Box>
            {isLoading ? (
              <Spinner />
            ) : isError ? (
              <Alert>{error}</Alert>
            ) : (
              <Select
                placeholder="Select option"
                onChange={(e) => setInstalledTheme(Number(e.target.value))}
              >
                {data?.data?.map((dt) => (
                  <option value={dt.theme_id} key={dt?.theme_id}>
                    {dt?.name}
                  </option>
                ))}
              </Select>
            )}
          </Box>

          <Box>
            {isSuccess && themeStatus() ? (
              <IconButton icon={<CheckIcon />} />
            ) : (
              <IconButton icon={<SmallCloseIcon />} />
            )}
          </Box>
          <Box>
            <Button
              isLoading={addLoading}
              onClick={() => handleInstall()}
              pointerEvents={themeStatus() && "none"}
              opacity={themeStatus() && ".6"}
              letterSpacing={"2px"}
              colorScheme={"teal"}
              loadingText="Installing..."
            >
              {isSuccess && themeStatus() ? "Installed" : "Install"}
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box mt={5} w={{ md: "50%" }}>
        {addThemeSuccess && (
          <Alert status="success">
            {" "}
            <AlertIcon />
            <AlertTitle color={"gray.700"}>
              {response?.data?.message}
            </AlertTitle>
          </Alert>
        )}

        {isAddThemeError && (
          <Alert status="error">
            {" "}
            <AlertIcon />
            <AlertTitle color={"gray.700"}>
              {addThemeError?.response?.data?.message}
            </AlertTitle>
          </Alert>
        )}
      </Box>
    </Flex>
  );
};

export default InstallationPage;
