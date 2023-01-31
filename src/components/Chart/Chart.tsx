// Chart.js
import React from 'react';
import * as d3 from 'd3';

class Chart extends React.Component {
  node: any;

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [1, 2, 3, 4, 5];
    const svg = d3.select(this.node).append('svg');

    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => i * 50 + 25)
      .attr('cy', 25)
      .attr('r', d => d * 5)
      .attr('fill', 'red');
  }

  render() {
    return (
      <div
        ref={node => {
          this.node = node;
        }}
      />
    );
  }
}

export default Chart;
