import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import DateRange from "../../components/DateRange";
import {
  useGetAnalyticsInfo,
  useGetOrdersCount,
} from "../../services/analyticsService";
import BlockedLocation from "./BlockedLocation";
import ReveNueLineChart from "./RevenueLineChart";
import TrafficBlockedPicChart from "./TrafficBlockedPicChart";
const calculatePercentage = (blocked, orderCount) => {
  const percentage = (blocked?.length / orderCount) * 100 || 0;

  return percentage.toFixed(2) + "%";
};

const Dashboard = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [filterOn, setFilterOn] = useState(false);

  const { data, isLoading, isError, isSuccess } =
    useGetAnalyticsInfo(selectionRange);

  const {
    orderCount,
    isOrderLoading,
    isOrderError,
    isOrderSuccess,
    orderError,
  } = useGetOrdersCount(selectionRange);

  return (
    <>
      <div className="row align-items-start headers-db-all">
        <div className="col-6">
          <div className="left-text-title">
            <h1>Navidium Fraud Protection Arena</h1>
            <h3>Dashboard</h3>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <div
            className="d-flex align-items-center"
            style={{ position: "relative" }}
          >
            {!filterOn && (
              <Button
                rightIcon={<ChevronDownIcon />}
                size={"sm"}
                colorScheme="teal"
                onClick={() => setFilterOn(true)}
              >
                Filter By Date
              </Button>
            )}
            {filterOn && (
              <DateRange
                setFilterOn={setFilterOn}
                selectionRange={selectionRange}
                setSelectionRange={setSelectionRange}
              />
            )}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5">
          <div className="single-orders-counts">
            <div className="d-flex">
              <p>Blocked </p>
            </div>
            <h2>{data?.data?.blocked?.length || 0}</h2>
          </div>
          <div className="single-orders-counts">
            <div className="d-flex">
              <p>Total Blocked Orders</p>
            </div>
            <h2>
              {isSuccess && isOrderSuccess
                ? calculatePercentage(
                    data?.data?.blocked,
                    parseInt(orderCount?.data?.total_orders)
                  )
                : "...%"}
            </h2>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="right-content-dashboard">
            <div className="report-sec-chrt fraud">
              <p></p>
              <div className="right-pie-charts">
                <TrafficBlockedPicChart
                  blocked={data?.data?.blocked?.length}
                  flagged={data?.data?.flagged?.length}
                  totalOrders={parseInt(orderCount?.data?.total_orders)}
                />
              </div>
              <p className="desc">
                <div>
                  <span
                    style={{
                      marginRight: "10px",
                      backgroundColor: "red",
                      width: "15px",
                      height: "15px",
                      display: "inline-block",
                    }}
                  ></span>
                  <span>Blocked Orders</span>
                </div>
                <div>
                  <span
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#003566",
                      width: "15px",
                      height: "15px",
                      display: "inline-block",
                    }}
                  ></span>
                  <span>Flagged Orders</span>
                </div>
                <div>
                  <span
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#2a9d8f",
                      width: "15px",
                      height: "15px",
                      display: "inline-block",
                    }}
                  ></span>
                  <span>Not Blocked Orders</span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="left-content-dashboard-row">
            <div className="row">
              <div className="col-12">
                <div className="report-sec-chrt ">
                  <p>Monthly </p>
                  <div className="d-flex">
                    <h3>Fraud Blocked</h3>
                    <a href="#" className="ms-auto">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4859 3.61416L14.2075 6.29675C14.1753 6.59123 13.8141 6.71776 13.607 6.51071L12.9491 5.85271L8.80554 9.99622C8.54556 10.2562 8.08773 10.2562 7.82776 9.99622L5.5455 7.71396L1.68957 11.5722C1.55613 11.7056 1.37898 11.7746 1.20183 11.7746C1.02467 11.7746 0.847531 11.7056 0.714088 11.5722C0.444913 11.303 0.444913 10.8659 0.714088 10.5944L5.05775 6.25073C5.31773 5.99076 5.77556 5.99076 6.03324 6.25073L8.3178 8.533L11.9736 4.87723L11.2028 4.10651C10.9935 3.89714 11.12 3.53594 11.4145 3.50603L14.0971 3.22765C14.3203 3.20234 14.5089 3.391 14.4859 3.61416Z"
                          fill="#FEB449"
                        />
                      </svg>
                      Revenue increase by 5%
                    </a>
                  </div>

                  <div style={{ height: "300px", width: "100%" }}>
                    <ReveNueLineChart data={data?.data?.blocked} />
                  </div>
                </div>
              </div>
              <BlockedLocation data={data?.data?.blocked} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
