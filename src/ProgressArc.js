import React, {
    Component, createRef
} from 'react';
import * as d3 from "d3";
class ProgressArc extends Component {
constructor(props){
    super(props)
    this.ref = createRef();

}
    displayName = 'ProgressArc';
    // propTypes = {
    //     id: PropTypes.string,
    //     height: PropTypes.number,
    //     width: PropTypes.number,
    //     innerRadius: PropTypes.number,
    //     outerRadius: PropTypes.number,
    //     backgroundColor: PropTypes.string,
    //     foregroundColor: PropTypes.string,
    //     percentComplete: PropTypes.number
    // }


    componentDidMount() {
        this.drawArc();


    }

    componentDidUpdate() {
        this.redrawArc();
      }

      redrawArc() {
        const context = d3.select(`#${this.props.id}`);
        context.remove();
        this.drawArc();
      }

    setContext() {
        return d3.select(this.ref.current).append('svg')
            .attr('height', '300px')
            .attr('width', '300px')
            .attr('background-color', 'black')
            .attr('id', 'd3-arc')
            .append('g')
            .attr('transform', `translate(150, 150)`);
    }

    // setContext() {
    //     const { height, width, id} = this.props;
    //     return d3.select(this.refs.arc).append('svg')
    //       .attr('height', height)
    //       .attr('width', width)
    //       .attr('id', id)
    //       .append('g')
    //       .attr('transform', `translate(${height / 2}, ${width / 2})`);
    //   }

    setBackground(context) {
        return context.append('path')
        // .datum({startAngle:0})
            .datum({
                endAngle: this.tau 
            })
            .style('fill', '#e6e6e6')
            .attr('d', this.arc());
    }

    // setBackground(context) {
    //     return context.append('path')
    //     .datum({ endAngle: this.tau })
    //     .style('fill', this.props.backgroundColor)
    //     .attr('d', this.arc());
    //   }

      setForeground(context) {
          console.log(this.props)
          console.log(this.tau)

        return context.append('path')
        .datum({ endAngle: this.tau * 0.1 })
        // .attr('transform', 'translate(60 60) rotate(45)')
        .style('fill', '#00ff00')
        .attr('d', this.arc());
      }

    tau = Math.PI * 2;

    arc() {
        return d3.arc()
            .innerRadius(100)
            .outerRadius(110)
            .startAngle(0)
    }

    drawArc() {
        const context = this.setContext();
        this.setBackground(context);
        this.setForeground(context);
      }

    // setForeground(context) {
    //     return context.append('path')
    //         .datum({
    //             endAngle: this.tau * 0.1 - 4
    //         })
    //         .style('fill', '#00ff00')
    //         .attr("transform", "translate()")
    //         .attr('d', this.arc());
    // }

    render() {
            return <svg ref={this.ref} />;

    }
}
export default ProgressArc;