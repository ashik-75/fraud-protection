import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { useGetAllAnalyticsInfo } from "../../services/analyticsService";

const chartData = [
  {
    name: "Jan",
    blocked: 0,
  },
  {
    name: "Feb",
    blocked: 0,
  },
  {
    name: "Mar",
    blocked: 0,
  },
  {
    name: "Apr",
    blocked: 0,
  },
  {
    name: "May",
    blocked: 0,
  },
  {
    name: "Jun",
    blocked: 0,
  },
  {
    name: "Jul",
    blocked: 0,
  },
  {
    name: "Aug",
    blocked: 0,
  },
  {
    name: "Sept",
    blocked: 0,
  },
  {
    name: "Oct",
    blocked: 0,
  },
  {
    name: "Nov",
    blocked: 0,
  },
  {
    name: "Dec",
    blocked: 0,
  },
];

const ReveNueLineChart = () => {
  const { data, isLoading, isSuccess, isError } = useGetAllAnalyticsInfo();
  const [chartInfo, setChartInfo] = useState(chartData);

  useEffect(() => {
    const chart = [
      {
        name: "Jan",
        blocked: 0,
      },
      {
        name: "Feb",
        blocked: 0,
      },
      {
        name: "Mar",
        blocked: 0,
      },
      {
        name: "Apr",
        blocked: 0,
      },
      {
        name: "May",
        blocked: 0,
      },
      {
        name: "Jun",
        blocked: 0,
      },
      {
        name: "Jul",
        blocked: 0,
      },
      {
        name: "Aug",
        blocked: 0,
      },
      {
        name: "Sept",
        blocked: 0,
      },
      {
        name: "Oct",
        blocked: 0,
      },
      {
        name: "Nov",
        blocked: 0,
      },
      {
        name: "Dec",
        blocked: 0,
      },
    ];
    if (data?.data) {
      data?.data?.forEach((dt) => {
        const month = new Date(dt?.createdAt?.split("T")?.[0])?.getMonth();

        if (month) {
          chart[month].blocked += 1;
        }
      });

      setChartInfo(chart);
    }
  }, [data?.data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={chartInfo}>
        <XAxis dataKey="name" />
        <Line
          type="monotone"
          dataKey="blocked"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReveNueLineChart;
