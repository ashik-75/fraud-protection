import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import axiosInstance from "../config";

const fetchAnalytics = (date) => {
  const formattedDate = {
    start_date: format(date?.startDate, "yyyy-MM-dd"),
    end_date: format(date?.endDate, "yyyy-MM-dd"),
  };

  const searchParams = `start_date=${formattedDate?.start_date}&end_date=${formattedDate?.end_date}`;

  const shop = sessionStorage.getItem("navidiumFraudProtection")
    ? JSON.parse(sessionStorage.getItem("navidiumFraudProtection"))
    : null;

  return axiosInstance.get(`/api/analytics?shop=${shop?.shop}&${searchParams}`);
};

export const useGetAnalyticsInfo = (filter) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ["analytics", filter],
    () => fetchAnalytics(filter)
  );

  return { data, isLoading, isError, isSuccess };
};

const fetchAllAnalyticsInfo = () => {
  const shop = sessionStorage.getItem("navidiumFraudProtection")
    ? JSON.parse(sessionStorage.getItem("navidiumFraudProtection"))
    : null;

  return axiosInstance.get(`/api/analytics/all?shop=${shop?.shop}`);
};

export const useGetAllAnalyticsInfo = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ["analyticsAll"],
    () => fetchAllAnalyticsInfo()
  );

  return { data, isLoading, isError, isSuccess };
};

const fetchOrders = (date) => {
  const formattedDate = {
    start_date: format(date?.startDate, "yyyy-MM-dd"),
    end_date: format(date?.endDate, "yyyy-MM-dd"),
  };

  const searchParams = `start_date=${formattedDate?.start_date}&end_date=${formattedDate?.end_date}`;

  const shop = sessionStorage.getItem("navidiumFraudProtection")
    ? JSON.parse(sessionStorage.getItem("navidiumFraudProtection"))
    : null;
  const url = `https://app.navidiumapp.com/api/fraud-protection/check-orders.php?shop_url=${shop?.shop}&${searchParams}`;

  return axios.get(url);
};

export const useGetOrdersCount = (filter) => {
  const {
    data: orderCount,
    isLoading: isOrderLoading,
    isError: isOrderError,
    isSuccess: isOrderSuccess,
    error: orderError,
  } = useQuery(["order-count", filter], () => fetchOrders(filter));

  return {
    orderCount,
    isOrderLoading,
    isOrderError,
    isOrderSuccess,
    orderError,
  };
};
