import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Apr",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "May",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jul",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Aug",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sept",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ReveNueLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}>
        <XAxis dataKey="name" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReveNueLineChart;
