import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Props {
  data: number[];
  width: number;
  height: number;
}

const AreaChart: React.FC<Props> = ({ data, width, height }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = d3.select(container.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data) ])
      .range([height, 0]);

    const area = d3.area()
      .x((d, i) => xScale(i))
      .y0(height)
      .y1((d) => yScale(d))
      .curve(d3.curveBasis);

    svg.append("path")
      .datum(data)
      .attr("fill", "#1890ff")
      .attr("d", area);
      
    const xAxis = d3.axisBottom(xScale);
    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

    const yAxis = d3.axisLeft(yScale);
    svg.append("g")
        .call(yAxis);

    svg.selectAll(".grid").attr("stroke", "yellow");
  }, [data, width, height]);

  return <div ref={container} />;
};

export default AreaChart;
