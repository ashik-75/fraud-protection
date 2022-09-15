import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchThemes = () => {
  const shop = "sqa-test-shop.myshopify.com";
  const token = "10awq52s!5##5";
  return axios.get(
    `https://app.navidiumapp.com/api/fraud-protection/theme/select.php?shop_url=${shop}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

//payload = {shop: "elavatione.shop.com"} => read all themes payload
// payload = {shop: 'elavatione.shop.com',themeName: "theme_name",themeId: 1023} => install theme payload

export const useGetAllThemes = () => {
  const { data, isLoading, isError, isSuccess, error } = useQuery(
    ["themes"],
    fetchThemes
  );

  return { data, isLoading, isError, isSuccess, error };
};

const addTheme = (themeId) => {
  const shop = "sqa-test-shop.myshopify.com";
  const token = "10awq52s!5##5";
  return axios.get(
    `https://app.navidiumapp.com/api/fraud-protection/theme/insertion.php?shop_url=${shop}&theme_id=${themeId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

export const useAddTheme = (themeId) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, isSuccess, data, error } = useMutation(
    () => addTheme(themeId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("themes");
      },
    }
  );

  return { mutate, isLoading, isError, isSuccess, data, error };
};
