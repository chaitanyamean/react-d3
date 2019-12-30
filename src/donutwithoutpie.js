import * as d3 from 'd3';

export default class DonutWithOutPie {
    constructor(element) {

        console.log(element);

        const tau = Math.PI * 2; // http://tauday.com/tau-manifesto

        const arc = d3.arc()
            .innerRadius(110)
            .outerRadius(120)
            .startAngle(-0.6 * Math.PI);


        const svg = d3.select(element).append("svg")
            .attr('width', 400)
            .attr('height', 400)
        // width = +svg.attr("width"),
        // height = +svg.attr("height"),
        const graph = svg.append("g").attr("transform", "translate(" + 350 / 2 + "," + 350 / 2 + ")");

        graph.append("text")
        .attr("text-anchor", "middle")
          .attr('font-size', '4em')
          .attr('y', 20)
        .text('22');
        // Add the background arc, from 0 to 100% (tau).
        const background = graph.append("path")
            .datum({
                endAngle: 0.6 * Math.PI
            })
            .style("fill", "#ddd")
            .attr("d", arc);

        // Add the foreground arc in orange, currently showing 12.7%.
        const foreground = graph.append("path")
            .datum({
                endAngle: 0 * tau
            })
            .style("fill", "orange")
            .attr("d", arc);


    }
}