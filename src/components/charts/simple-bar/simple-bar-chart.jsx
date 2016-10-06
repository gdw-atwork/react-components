import {Component, PropTypes} from 'react'
import ReactFauxDOM from 'react-faux-dom'
import * as d3 from 'd3'

import './simple-bar-chart.scss'

export class SimpleBarChart extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        width: PropTypes.number.isRequired
    }

<<<<<<< HEAD
=======
    // constructor () {
    //     super()
    //     this.state = {}

    //     this.componentWillMount = this.componentWillMount.bind(this)
    //     this.connectFauxDOM = this.connectFauxDOM.bind(this)
    //     this.drawFauxDOM = this.drawFauxDOM.bind(this)
    // }

    // componentDidMount = () => {
    //     const node = this.connectFauxDOM('div', 'chart')

    //     this.update = (data, width) => {
    //         const scale = d3.scaleLinear()
    //                             .domain([0, d3.max(data)])
    //                             .range([0, width])

    //         d3.select(node).selectAll('div')
    //             .data(data)
    //                 .enter().append('div')
    //                     .style('width', (d) => (scale(d) + 'px'))
    //                     .text(d => d)
    //     }

    //     this.update(this.props.data, this.props.width)
    // }

    // componentWillUpdate = (nextProps, nextState) => {
    //     this.update(nextProps.data, nextProps.width)
    //     console.log({nextProps, nextState})
    // }

    // render () {
    //     return (<rc-simple-bar-chart>
    //       {this.state['chart']}
    //     </rc-simple-bar-chart>)
    // }

>>>>>>> e61370a289f7d4380bdbad94b994c8091dcc3bbd
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
<<<<<<< HEAD
=======

// SimpleBarChart.prototype.componentWillMount = Faux.mixins.core.componentWillMount
// SimpleBarChart.prototype.connectFauxDOM = Faux.mixins.core.connectFauxDOM
// SimpleBarChart.prototype.drawFauxDOM = Faux.mixins.core.drawFauxDOM
>>>>>>> e61370a289f7d4380bdbad94b994c8091dcc3bbd
