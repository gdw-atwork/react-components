import {Component, PropTypes} from 'react'
import ReactFauxDOM from 'react-faux-dom'
import * as d3 from 'd3'

import './html.scss'

export class HtmlBarChart extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        width: PropTypes.number.isRequired
    }

    render () {
        const {data, width} = this.props
        const node = ReactFauxDOM.createElement('rc-html-bar-chart')

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
