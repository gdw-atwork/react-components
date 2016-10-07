import React, {Component} from 'react'

import rc from '../../../dist/react-components'

export class HtmlBarChartDemo extends Component {
    constructor () {
        super()
        this.state = {
            data: [1, 1, 2, 3, 5, 8, 13],
            dataEntry: '[1, 1, 2, 3, 5, 8, 13]',
            dataClass: '',
            width: 390
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
        if (width && width > 0) {
            this.setState({width})
        }
    }

    render () {
        return (<section>
          <div className='title'>
            <h4>HTML Bar Chart</h4>
          </div>
          <div className='display'>
            <div className='usage'>
              <code>{'<HtmlBarChart data={data} width={width} />'}</code>
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
                  <label>width:</label>
                  <input type='number'
                    value={this.state.width}
                    onChange={this.handleWidth} />
                </div>
              </div>
              <div className='component'>
                <rc.HtmlBarChart data={this.state.data} width={this.state.width} />
              </div>
            </div>
          </div>
        </section>)
    }
}
