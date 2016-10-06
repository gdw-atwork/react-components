import React, {Component} from 'react'

import rc from '../../../dist/react-components'

export class SimpleBarChartDemo extends Component {
    constructor () {
        super()
        this.state = {
            data: [1, 1, 2, 3, 5, 8, 13],
            dataEntry: '[1, 1, 2, 3, 5, 8, 13]',
            dataClass: '',
            width: 630
        }
    }

    handleData = (event) => {
        let dataEntry = event.target.value
        try {
            let data = JSON.parse(dataEntry)
            this.setState({data, dataEntry, dataClass: ''})
        } catch (err) {
            this.setState({dataEntry, dataClass: 'error'})
        }
    }

    handleWidth = (event) => {
        let width = parseInt(event.target.value, 10)
        this.setState({width})
    }

    render () {
        return (<section>
          <input type='text' value={this.state.dataEntry}
            onChange={this.handleData} className={this.state.dataClass} />

          <input type='number' value={this.state.width} onChange={this.handleWidth} />

          <rc.SimpleBarChart data={this.state.data} width={this.state.width} />
        </section>)
    }
}
