// import * as d3 from 'd3';

// export default class D3Charts {

//     constructor(element) {
//         const url = 'https://udemy-react-d3.firebaseio.com/tallest_men.json';
//         console.log('Hello');
//         const svg = d3.select(element)
//             .append('svg')
//             .attr('width', 500)
//             .attr('height', 500)


//             d3.json(url).then(ageData => {
//                 console.log(ageData)
//             const rect = svg.selectAll('rect')
//                             .data(ageData)
//                 rect.enter()
//                     .append('rect')
//                     .attr('x', (d,i)=> i *100)
//                     .attr('y', 50)
//                     .attr('width', 50)
//                     .attr('height', d => d.height *10)
//                     .attr('fill', d => {
//                         if(d.age>10){
//                             return 'red'
//                         } 
//                             return 'green'
                        
//                     })
//             })
//     }
// }

