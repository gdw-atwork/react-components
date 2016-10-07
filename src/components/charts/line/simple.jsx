import React, {PropTypes} from 'react'
import FauxDOMComponent from '../FauxDOMComponent'
import * as d3 from 'd3'

import './simple.scss'

export class SimpleLineChart extends FauxDOMComponent {
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    constructor () {
        super()
        this.state = {}
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (this.props.title !== nextProps.title) {
            let self = this

            if (this.isAnimatingFauxDOM()) {
                this.stopAnimatingFauxDOM()
            }

            this.update(nextProps.title)

            setTimeout(() => self.animateFauxDOM(500))
            return false
        }
        return true
    }

    componentDidMount = () => {
        const node = this.connectFauxDOM('div', 'chart')

        this.update = (title) => {
            d3.select(node)
                .html(title)
        }

        this.update(this.props.title)

        this.animateFauxDOM(500)
    }

    render () {
        return (<rc-simple-line-chart>
          {this.state['chart']}
        </rc-simple-line-chart>)
    }
}
