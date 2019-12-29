import * as d3 from 'd3';

export default class D3Charts {

    constructor(element) {
        const dims = {
            height: 300,
            width: 300,
            radius: 150
        };
        const cent = {
            x: (dims.width / 2 + 5),
            y: (dims.height / 2 + 5)
        };

        const data = [{
                name: 'rent',
                cost: 500
            },
            {
                name: 'bills',
                cost: 300
            },
            {
                name: 'gaming',
                cost: 200
            },
            {
                name: 'petrol',
                cost: 500
            },
            {
                name: 'diesel',
                cost: 700
            }
        ]

        const url = 'https://udemy-react-d3.firebaseio.com/tallest_men.json';
        console.log('Hello');
        // const d3 = Object.assign(d3Base, { legendColor, lineChunked })
        const svg = d3.select(element)
            .append('svg')
            .attr('width', dims.width + 150)
            .attr('height', dims.height + 150)

        const graph = svg.append('g')
            .attr('transform', `translate(${cent.x}, ${cent.y})`);

        const pie = d3.pie().sort(null).value(d => d.cost);

        const angles = pie([{
                name: 'rent',
                cost: 500
            },
            {
                name: 'bills',
                cost: 300
            },
            {
                name: 'gaming',
                cost: 200
            },
            {
                name: 'petrol',
                cost: 500
            }
        ])

        const color = d3.scaleOrdinal(d3['schemeSet3']);

        // Legend
        const legendBrand = svg.append('g')
            .attr('transform', `translate(10, ${dims.height + 30})`);

        legendBrand.selectAll("mydots")
            .data(data.map(d => d.name))
            .enter()
            .append("circle")
            .attr("cx", 100)
            .attr("cy", function (d, i) {
                return 10 + i * 25
            }) // 100 is where the first dot appears. 25 is the distance between dots
            .attr("r", 7)
            .style("fill", function (d) {
                return color(d)
            })

        legendBrand.selectAll("mylabels")
            .data(data.map(d => d.name))
            .enter()
            .append("text")
            .attr("x", 120)
            .attr("y", function (d, i) {
                return 10 + i * 25
            }) // 100 is where the first dot appears. 25 is the distance between dots
            .style("fill", function (d) {
                return color(d)
            })
            .text(function (d) {
                return d
            })
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")


            const middleText = svg.append('g')
            .attr('transform', `translate(${dims.width/2 - 125}, ${dims.height /2 - 125})`);
        // Middle text
        middleText.append("text")
            .attr("text-anchor", "middle")
            .attr("x", 120)
            .attr("y", 120)
            .text("$ 2222");

        // const legend = d3.legendColor()
        //         .shape('circle')
        //         .scale(color)
        const arcPath = d3.arc()
            .innerRadius(140)
            .outerRadius(dims.radius)


        const arcTweenEnter = (d) => {
            console.log(d)
            var i = d3.interpolate(d.endAngle, d.startAngle);
            return function (t) {
                d.startAngle = i(t);
                return arcPath(d);
            }
        }


        const paths = graph.selectAll('path')
            .data(pie(data))

        // Path to delete
        // paths.exit().remove()

        // handle the current dom updates
        // paths.attr('d', arcPath)

        console.log(paths.enter())

        color.domain(data.map(d => d.name));


        paths.enter()
            .append('path')
            .attr('class', 'arc')
            // .attr('d', arcPath)
            .attr('stroke', '#fff')
            .attr('stroke-width', 3)
            .attr('fill', d => color(d.data.name))
            .transition().duration(750)
            .attrTween('d', arcTweenEnter)



    }
}