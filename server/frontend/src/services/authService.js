import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAuth = (shop, token) => {
  return axios.get(
    `https://app.navidiumapp.com/api/fraud-protection/check-credentials.php?shop_url=${shop}&token=${token}`
  );
};

export const useGetAuthInfo = (shop, token) => {
  const { data, isLoading, isError, isSuccess, error } = useQuery(
    ["auth-info"],
    () => fetchAuth(shop, token)
  );

  return { data, isLoading, isError, isSuccess, error };
};
