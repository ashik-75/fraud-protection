import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../config";

const fetchUsers = (search, page, sortBy, type) => {
  const merchantInfo = sessionStorage.getItem("navidiumFraudProtection")
    ? JSON.parse(sessionStorage.getItem("navidiumFraudProtection"))
    : null;

  const shop = merchantInfo?.shop;

  return axiosInstance.get(
    "/api/dashboard/users" +
      `?search=${search}&page=${page}&sortBy=${sortBy}&shop=${shop}&type=${type}`
  );
};

export const useGetDashboardUsers = (search, page, sortBy, type) => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    isFetching,
    isPreviousData,
  } = useQuery(
    ["FraudList", search, page, sortBy, type],
    () => fetchUsers(search, page, sortBy, type),
    {
      keepPreviousData: true,
    }
  );

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    isFetching,
    isPreviousData,
  };
};

const addDashboardUser = (info) => {
  return axiosInstance.post("/api/dashboard/users", info, {
    Headers: {
      "Content-Type": "application/json",
    },
  });
};

export const useAddDashboardUser = () => {
  const { mutate, isLoading, isError, isSuccess, error } = useMutation((info) =>
    addDashboardUser(info)
  );

  return { mutate, isLoading, isError, isSuccess, error };
};

const addSettingsInfo = (info) => {
  return axiosInstance.post("/api/settings", info, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const useAddSettingsInfo = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    (info) => addSettingsInfo(info),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("settingsInfo");
      },
    }
  );

  return { mutate, isLoading, isError, error, isSuccess };
};

const getSettingsInfo = () => {
  const merchantInfo = sessionStorage.getItem("navidiumFraudProtection")
    ? JSON.parse(sessionStorage.getItem("navidiumFraudProtection"))
    : null;

  const shop = merchantInfo?.shop;

  return axiosInstance.get(`/api/settings?shop=${shop}`);
};

export const useGetSettingsInfo = () => {
  const {
    data,
    isLoading: loading,
    isError: isSettingsError,
    isSuccess: isSettingsSuccess,
    error: settingsError,
  } = useQuery(["settingsInfo"], getSettingsInfo);

  return { data, loading, isSettingsError, isSettingsSuccess, settingsError };
};
