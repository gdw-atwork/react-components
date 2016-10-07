import React, {Component} from 'react'

import rc from '../../../dist/react-components'

export class SimpleLineChartDemo extends Component {
    constructor () {
        super()
        this.state = {
            title: 'Simple Line Chart in Progress'
        }
    }

    handleTitle = (event) => {
        this.setState({title: event.target.value})
    }

    render () {
        return (<section>
          <div className='title'>
            <h4>Simple Line Chart</h4>
          </div>
          <div className='display'>
            <div className='usage'>
              <code>{'<SimpleLineChart title={title} />'}</code>
            </div>
            <div className='demo'>
              <div className='properties'>
                <div>
                  <label>title:</label>
                  <input type='text'
                    value={this.state.title}
                    onChange={this.handleTitle} />
                </div>
              </div>
              <div className='component'>
                <rc.SimpleLineChart title={this.state.title} />
              </div>
            </div>
          </div>
        </section>)
    }
}
