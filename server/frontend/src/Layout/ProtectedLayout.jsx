import { Box } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { useGetAuthInfo } from "../services/authService";
import PageLayout from "./PageLayout";

const ProtectedLayout = () => {
  const search = window.location.search;
  const searchParams = new URLSearchParams(search);
  const shopUrl = searchParams.get("shop_url");
  const token = searchParams.get("token");

  const isAlreadyExistsUser = sessionStorage.getItem("navidiumFraudProtection")
    ? JSON.parse(sessionStorage.getItem("navidiumFraudProtection"))
    : null;

  if (isAlreadyExistsUser?.isLoggedIn) {
    return <PageLayout />;
  }

  const { data, isLoading, isError, isSuccess, error } = useGetAuthInfo(
    shopUrl,
    token
  );

  if (isSuccess && data?.data?.success) {
    sessionStorage.setItem(
      "navidiumFraudProtection",
      JSON.stringify({
        shop: shopUrl,
        isLoggedIn: true,
      })
    );
  }

  // for testing purpose
  sessionStorage.setItem(
    "navidiumFraudProtection",
    JSON.stringify({
      shop: "southernwakevinyl.myshopify.com",
      isLoggedIn: true,
    })
  );

  return (
    <Box>
      {isLoading ? (
        <Box
          h={"400px"}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <PulseLoader />;
        </Box>
      ) : isError ? (
        <div>Something went wrong</div>
      ) : isSuccess && !data?.data?.success ? (
        <Navigate to="/auth-failed" />
      ) : (
        <PageLayout />
      )}
    </Box>
  );
};

export default ProtectedLayout;
