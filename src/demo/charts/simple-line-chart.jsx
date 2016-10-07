import React, {Component} from 'react'

import rc from '../../../dist/react-components'

export class SimpleLineChartDemo extends Component {
    constructor () {
        super()
        this.state = {
            data: [1, 1, 2, 3, 5, 8, 13, 21, 34],
            dataEntry: '[1, 1, 2, 3, 5, 8, 13, 21, 34]',
            dataClass: '',
            height: 180,
            width: 510
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

    handleHeight = (event) => {
        let height = parseInt(event.target.value, 10)
        if (height && height > (2 * this.state.data.length)) {
            this.setState({height})
        }
    }
    handleWidth = (event) => {
        let width = parseInt(event.target.value, 10)
        if (width && width > 0) {
            this.setState({width})
        }
    }

    render () {
        return (<section>
          <div className='title'>
            <h4>Simple Line Chart</h4>
          </div>
          <div className='display'>
            <div className='usage'>
              <code>{'<SimpleLineChart data={data} scale={{height, width}} />'}</code>
            </div>
            <div className='demo'>
              <div className='properties'>
                <div>
                  <label>data:</label>
                  <input type='text'
                    value={this.state.dataEntry}
                    onChange={this.handleData}
                    className={this.state.dataClass} />
                </div>
                <div>
                  <label>height:</label>
                  <input type='number'
                    value={this.state.height}
                    onChange={this.handleHeight} />
                </div>
                <div>
                  <label>width:</label>
                  <input type='number'
                    value={this.state.width}
                    onChange={this.handleWidth} />
                </div>
              </div>
              <div className='component'>
                <rc.SimpleLineChart data={this.state.data}
                  scale={{height: this.state.height, width: this.state.width}} />
              </div>
            </div>
          </div>
        </section>)
    }
}
