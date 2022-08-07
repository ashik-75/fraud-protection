import { useState } from "react";
import WorldMap from "react-world-map";
import "./map.css";
const Map = () => {
  const [selected, onSelect] = useState(null);
  return (
    <div>
      <WorldMap selected={selected} onSelect={onSelect} />
    </div>
  );
};

export default Map;
