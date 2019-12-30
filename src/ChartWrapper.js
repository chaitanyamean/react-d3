import AnimatedPieHooks from './AnimatedPieHooks'

import React, { Component } from "react";
import * as d3 from "d3";

import D3Charts from './D3Chart';
import DonutWithOutPie from './donutwithoutpie';

export default class ChartWrapper extends Component {

  componentDidMount() {
    // new D3Charts(this.refs.chart)
    new DonutWithOutPie(this.refs.chart);
  }

  render() {
    return <div ref='chart'></div>
  }
} 
