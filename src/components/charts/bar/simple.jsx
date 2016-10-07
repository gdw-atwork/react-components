import {Component, PropTypes} from 'react'
import ReactFauxDOM from 'react-faux-dom'
import * as d3 from 'd3'

import './simple.scss'

export class SimpleBarChart extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
        scale: PropTypes.shape({
            height: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired
        }).isRequired
    }

    render () {
        const {data, scale} = this.props
        const node = ReactFauxDOM.createElement('rc-simple-bar-chart')

        const barHeight = Math.floor(scale.height / data.length)

        const xScale = d3.scaleLinear()
                            .domain([0, d3.max(data)])
                            .range([0, scale.width])

        const chart = d3.select(node)
                            .append('svg')
                                .attr('height', scale.height)
                                .attr('width', scale.width)

        const bar = chart.selectAll('g')
                            .data(data)
                            .enter().append('g')
                                .attr('transform', (d, i) => ('translate(0,' + i * barHeight + ')'))

        bar.append('rect')
                .attr('width', xScale)
                .attr('height', barHeight - 1)

        bar.append('text')
                .attr('x', d => (xScale(d) - 3))
                .attr('y', barHeight / 2)
                .attr('dy', '.35em')
                .text(d => d)

        return node.toReact()
    }
}
