import React, { useEffect, useRef } from "react";
import AreaChart from "./chart-components/areachart";
import * as d3 from "d3";

const Chart = ({ data = []}) => {
  // const data = [50, 30, 12, 45, 25, 60];
  const width = 600;
  const height = 400;

  return <AreaChart data={data} width={width} height={height} />;
};

Chart.defaultProps = {
  data: [50, 30, 12, 45, 25, 60]
};

export default Chart;
