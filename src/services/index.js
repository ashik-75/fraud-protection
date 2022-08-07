import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFraudList = (search, page, sortBy) => {
  return axios.get(
    "http://localhost:8000/api/userType/fraudlist" +
      `?search=${search}&page=${page}&sortBy=${sortBy}`
  );
};

export const useGetFraudList = (search, page, sortBy) => {
  const { data, isLoading, isError, isSuccess, error, isPreviousData } =
    useQuery(
      ["FraudList", search, page, sortBy],
      () => fetchFraudList(search, page, sortBy),
      {
        keepPreviousData: true,
      }
    );

  return { data, isLoading, isError, isSuccess, error, isPreviousData };
};

const fetchWhiteListUser = (search, page, sortBy) => {
  return axios.get(
    "http://localhost:8000/api/userType/whitelist" +
      `?search=${search}&page=${page}&sortBy=${sortBy}`
  );
};

export const useGetWhiteList = (search, page, sortBy) => {
  const { data, isLoading, isError, isSuccess, error, isPreviousData } =
    useQuery(
      ["WhiteList", search, page, sortBy],
      () => fetchWhiteListUser(search, page, sortBy),
      {
        keepPreviousData: true,
      }
    );

  return { data, isLoading, isError, isSuccess, error, isPreviousData };
};

const addFraud = (info) => {
  return axios.post("http://localhost:8000/api/userType", info, {
    Headers: {
      "Content-Type": "application/json",
    },
  });
};

export const useAddFraud = () => {
  const { mutate, isLoading, isError, isSuccess, error } = useMutation((info) =>
    addFraud(info)
  );

  return { mutate, isLoading, isError, isSuccess, error };
};
