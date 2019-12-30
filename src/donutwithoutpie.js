import * as d3 from 'd3';

export default class DonutWithOutPie {
    constructor(element) {

        console.log(element);

        const tau = Math.PI; // http://tauday.com/tau-manifesto

        const arc = d3.arc()
            .innerRadius(110)
            .outerRadius(120)
            .startAngle(-0.6 * Math.PI);


        const svg = d3.select(element).append("svg")
            .attr('width', 300)
            .attr('height', 300)
        // width = +svg.attr("width"),
        // height = +svg.attr("height"),
        const graph = svg.append("g").attr("transform", "translate(" + 300 / 2 + "," + 300 / 2 + ")");

        // Add the background arc, from 0 to 100% (tau).
        const background = graph.append("path")
            .datum({
                // startAngle: -0.4,
                endAngle: Math.PI * 0.6
            })
            .style("fill", "#ddd")
            .attr("d", arc);

        // Add the foreground arc in orange, currently showing 12.7%.
        const foreground = graph.append("path")
            .datum({
                endAngle: 0.03 * Math.PI
            })
            .style("fill", "orange")
            .attr("d", arc);
    }
}