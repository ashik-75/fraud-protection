import { getCode } from "country-list";
import { useEffect, useState } from "react";
import Map from "./Map";

const BlockedLocation = ({ data }) => {
  const [allCity, setAllCity] = useState({});

  useEffect(() => {
    const output = {};
    if (data) {
      data?.forEach((dt) => {
        const code = getCode(dt?.location?.country?.toLowerCase());
        if (output[code]) {
          output[code] += 1;
        } else {
          output[code] = 1;
        }
      });

      setAllCity(output);
    }
  }, [data]);

  return (
    <div className="col-12">
      <div className="report-sec-chrt">
        <div className="row">
          <div className="col-6">
            <div className="left-title-blc ">
              <h4>Show</h4>
              <h3>Blocked Locations</h3>
            </div>
          </div>
          <div className="col-6"></div>
          <div className="w-100 mt-5"></div>
          <div className="col-lg-5">
            <div className="top-city-wraps-blc">
              <div className="table-wrap-blc">
                <div className="d-flex justify-content-between">
                  <div className="name">
                    <p>
                      <strong>Country Code</strong>
                    </p>
                  </div>
                  <div className="nmb">
                    <p>
                      <strong>Total Blocked</strong>
                    </p>
                  </div>
                </div>
                {Object.entries(allCity)
                  .slice(0, 10)
                  .map(([key, value]) => (
                    <div key={key} className="d-flex justify-content-between">
                      <div className="name">
                        <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                      </div>
                      <div className="nmb">
                        <p>{value}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="right-world-map">
              <div style={{ width: "100%", height: "300px" }}>
                <Map data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockedLocation;
