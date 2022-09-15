// import { useState } from "react";
import { getCode } from "country-list";
import { useEffect, useState } from "react";
import { VectorMap } from "react-jvectormap";

const Map = ({ data }) => {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    const mapData = {};
    if (data?.length > 0) {
      data?.forEach((dt) => {
        const code = getCode(dt?.location?.country?.toLowerCase());
        if (mapData[code]) {
          mapData[code] += 1;
        } else {
          mapData[code] = 1;
        }
      });
    }

    setMapData(mapData);
  }, [data]);

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent"
        containerStyle={{
          width: "100%",
          height: "400px",
        }}
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
          selected: {
            fill: "#2938bc", //color for the clicked country
          },
          selectedHover: {},
        }}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#146804", "#ff0000"], //your color game's here
              normalizeFunction: "polynomial",
            },
          ],
        }}
        containerClassName="map"
      />
    </div>
  );
};

export default Map;
