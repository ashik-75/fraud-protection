import calenderImg from "../../img/calendar.png";
import Map from "./Map";
import ReveNueLineChart from "./RevenueLineChart";
import TrafficBlockedPicChart from "./TrafficBlockedPicChart";

const Dashboard = () => {
  return (
    <div className="cols-content">
      <div className="row align-items-start headers-db-all">
        <div className="col-6">
          <div className="left-text-title">
            <h1>Navidium Fraud Protection Arena</h1>
            <h3>Dashboard</h3>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <div className="select-box">
              <div id="reportrange" className="seclect-date-cont">
                <img src={calenderImg} alt="" />
                <span>Jul 6 - aug 7</span>
                <svg
                  width="14"
                  height="6"
                  viewBox="0 0 14 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 6L0.937822 0.75L13.0622 0.750001L7 6Z"
                    fill="#6D7175"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5">
          <div className="single-orders-counts">
            <div className="d-flex">
              <p>Blocked Today</p>
            </div>
            <h2>182</h2>
          </div>
          <div className="single-orders-counts">
            <div className="d-flex">
              <p>Total Blocked Orders</p>
            </div>
            <h2>25%</h2>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="right-content-dashboard">
            <div className="report-sec-chrt fraud">
              <p>
                Total Traffic Blocked <span>(40%)</span>{" "}
              </p>
              <div className="right-pie-charts">
                {/* <canvas id="pieCharts2" width="300" height="200"></canvas> */}
                <TrafficBlockedPicChart />
              </div>
              <p className="desc">
                *Ante urna semper amet, nisi quam risus non temopor. Proin
                portitor mattis.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="left-content-dashboard-row">
            <div className="row">
              <div className="col-12">
                <div className="report-sec-chrt ">
                  <p>Diamm eu fames lorem.</p>
                  <div className="d-flex">
                    <h3>Revenue Blocked</h3>
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
                  {/* <canvas id="chartLine"></canvas> */}

                  <div style={{ height: "300px", width: "100%" }}>
                    <ReveNueLineChart />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="report-sec-chrt">
                  <div className="row">
                    <div className="col-6">
                      <div className="left-title-blc ">
                        <h4>Diam eu fsmes lorem.</h4>
                        <h3>Blocked Locations</h3>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="right-filters-blc ">
                        <select className="form-select">
                          <option>Last 7 days</option>
                          <option>Last 14 days</option>
                          <option>Last 30 days</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-100 mt-5"></div>
                    <div className="col-lg-5">
                      <div className="top-city-wraps-blc">
                        <div className="table-wrap-blc">
                          <div className="d-flex justify-content-between">
                            <div className="name">
                              <p>
                                <strong>City Name</strong>
                              </p>
                            </div>
                            <div className="nmb">
                              <p>
                                <strong>Total Blocked</strong>
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="name">
                              <p>New York City</p>
                            </div>
                            <div className="nmb">
                              <p>34</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="name">
                              <p>Tokyo</p>
                            </div>
                            <div className="nmb">
                              <p>20</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="name">
                              <p>London</p>
                            </div>
                            <div className="nmb">
                              <p>18</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="name">
                              <p>Paris</p>
                            </div>
                            <div className="nmb">
                              <p>10</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="name">
                              <p>Sydney</p>
                            </div>
                            <div className="nmb">
                              <p>8</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="name">
                              <p>New York City</p>
                            </div>
                            <div className="nmb">
                              <p>34</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="name">
                              <p>Tokyo</p>
                            </div>
                            <div className="nmb">
                              <p>20</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                      <div className="right-world-map">
                        <div style={{ width: "100%", height: "300px" }}>
                          <Map />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
