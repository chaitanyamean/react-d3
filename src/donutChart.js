import * as d3 from 'd3';

export default class D3Charts {
    constructor(element) {
        // Data
        const value = 0.9
        const text = Math.round(value * 100) + '%'
        const data = [value, 1 - value]

        // Settings
        const width = 600
        const height = 300
        const anglesRange = 0.5 *  Math.PI
        console.log(anglesRange);
        const radis = Math.min(width, 2 * height) / 2
        const thickness = 100
        // Utility 
        //     const colors = d3.scale.category10();
        const colors = ["#5EBBF8", "#F5F5F5"];

        const pies = d3.pie()
            .value(d => d)
            .sort(null)
            .startAngle(anglesRange * -1)
            .endAngle(anglesRange)

            // console.log(pies())
        const arc = d3.arc()
            .outerRadius(radis)
            .innerRadius(radis - thickness)

        const translation = (x, y) => `translate(${x}, ${y})`

        const svg = d3.select(element)
            .append('svg')
            .attr('width', width + 150)
            .attr('height', height + 200)

        const graph = svg.append('g')
            .attr('transform', `translate(${width / 2}, ${height})`);

        // const svg = d3.select(element).append("svg")
        //     .attr("width", width)
        //     .attr("height", height)
        //     .attr("class", "half-donut")
        //     .append("g")
        //     .attr("transform", translation(width / 2, height))

        const paths = graph.selectAll('path')
        .data(pies(data))

        paths.enter()
            .append('path')
            .attr('class', 'arc')
            // .attr('d', arcPath)
            .attr('stroke', '#fff')
            .attr('stroke-width', 3)
            .attr("fill", (d, i) => colors[i])
            // .transition().duration(750)
            // .attrTween('d', arcTweenEnter)

            .attr("d", arc)

        // console.log(pies())


        svg.append("text")
            .text(d => text)
            .attr("dy", "-3rem")
            .attr("class", "label")
            .attr("text-anchor", "middle")

    }
}