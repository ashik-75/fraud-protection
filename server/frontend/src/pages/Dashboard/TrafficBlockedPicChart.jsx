import { Box } from "@chakra-ui/react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#ed0b0b", "#003566", "#049f82"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    payload,
    value,
    name,
  } = props;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const EmptyState = () => {
  return (
    <Box
      width={"200px"}
      height="200px"
      borderRadius={"60%"}
      bg="gray.100"
    ></Box>
  );
};

const TrafficBlockedPicChart = ({ blocked, flagged, totalOrders }) => {
  const info = [
    { name: "Blocked", value: blocked || 0 },
    { name: "Flagged", value: flagged || 0 },
    { name: "Not Blocked", value: totalOrders || 0 },
  ];

  let totalValue = 0;

  info?.forEach((v) => {
    totalValue += v.value;
  });

  return totalValue === 0 ? (
    <EmptyState />
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={info}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          // label
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {info.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TrafficBlockedPicChart;
