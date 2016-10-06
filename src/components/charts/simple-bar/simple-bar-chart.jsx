import {Component, PropTypes} from 'react'
import ReactFauxDOM from 'react-faux-dom'
import * as d3 from 'd3'

import './simple-bar-chart.scss'

export class SimpleBarChart extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        width: PropTypes.number.isRequired
    }

    render () {
        const {data, width} = this.props
        const node = ReactFauxDOM.createElement('rc-simple-bar-chart')

        const scale = d3.scaleLinear()
                            .domain([0, d3.max(data)])
                            .range([0, width])

        d3.select(node).selectAll('div')
            .data(data)
                .enter().append('div')
                    .style('width', (d) => (scale(d) + 'px'))
                    .text(d => d)

        return node.toReact()
    }
}
