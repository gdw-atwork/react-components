import React, {Component} from 'react'
import {render} from 'react-dom'

import 'normalize.css'
import '../../dist/react-components.css'
import './demo.scss'

import * as rc from '../../dist/react-components'

window.console && console.log && console.log('>>>>>> react-components <<<<<<<<<')
window.console && console.log && console.log({rc})
window.console && console.log && console.log('>>>>>> react-components <<<<<<<<<')

class Demo extends Component {
    constructor () {
        super()
        this.state = {
            styles: rc.styles,
            selectedStyle: rc.styles[0]
        }
    }

    styleToggle = (self) => () => {
        const next = (self.state.styles.indexOf(self.state.selectedStyle) + 1) % self.state.styles.length

        self.setState(Object.assign({}, self.state, {
            selectedStyle: self.state.styles[next]
        }))
    }

    render () {
        const classes = [this.state.selectedStyle]

        return (
          <main className={classes.join(' ')}>
            <h4>
              Style Selection:&nbsp;
              <rc.Button onItemClick={this.styleToggle(this)}>{this.state.selectedStyle}</rc.Button>
            </h4>
            <p>This page demonstrates the components available in this library.</p>
          </main>
        )
    }
}

render(<Demo />, document.getElementById('DemoContainer'))
