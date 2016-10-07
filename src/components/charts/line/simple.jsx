import React, {PropTypes} from 'react'
import FauxDOMComponent from '../FauxDOMComponent'
import * as d3 from 'd3'

console.log({d3})

import './simple.scss'

export class SimpleLineChart extends FauxDOMComponent {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
        scale: PropTypes.shape({
            height: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired
        }).isRequired
    }

    constructor () {
        super()
        this.state = {}
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (this.props.scale.height !== nextProps.scale.height ||
            this.props.scale.width !== nextProps.scale.width ||
            this.props.data.length !== nextProps.data.length ||
            this.props.data.some((d, i) => (d !== nextProps.data[i]))
        ) {
            let self = this

            if (this.isAnimatingFauxDOM()) {
                this.stopAnimatingFauxDOM()
            }

            this.update(nextProps)

            setTimeout(() => self.animateFauxDOM(500))
            return false
        }
        return true
    }

    componentDidMount = () => {
        const node = this.connectFauxDOM('svg', 'chart')

        this.update = (props) => {
            const {data, scale} = props
            const m = [20, 20, 20, 20]
            const w = scale.width - m[1] - m[3]
            const h = scale.height - m[0] - m[2]

            const xScale = d3.scaleLinear()
                                .domain([0, data.length - 1])
                                .range([0, w])

            const yScale = d3.scaleLinear()
                                .domain([d3.min(data), d3.max(data)])
                                .range([h, 0])

            const line = d3.line()
                            .x((d, i) => xScale(i))
                            .y((d) => yScale(d))

            d3.select(node).selectAll('g').remove()
            const graph = d3.select(node)
                                .attr('width', w + m[1] + m[3])
                                .attr('height', h + m[0] + m[2])
                            .append('g')
                                .attr('transform', 'translate(' + m[3] + ',' + m[0] + ')')

            const xAxis = d3.axisBottom().scale(xScale).tickSize(-h) // .tickSubdivide(true)
            graph.append('g')
                    .attr('class', 'x axis')
                    .attr('transform', 'translate(0,' + h + ')')
                    .call(xAxis)

            const yAxisLeft = d3.axisLeft().scale(yScale).ticks(4)
            graph.append('g')
                    .attr('class', 'y axis')
                    .attr('transform', 'translate(-25,0)')
                    .call(yAxisLeft)

            graph.append('path').attr('d', line(data))
        }

        this.update(this.props)

        this.animateFauxDOM(500)
    }

    render () {
        return (<rc-simple-line-chart>
          {this.state['chart']}
        </rc-simple-line-chart>)
    }
}
