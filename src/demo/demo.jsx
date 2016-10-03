import React, {Component} from 'react'
import {render} from 'react-dom'

import 'normalize.css'
import '../../dist/react-components.css'
import './demo.scss'

class Demo extends Component {
    render () {
        return (
          <main className='vanilla'>
            <h2>This is a React component</h2>
          </main>
        )
    }
}

render(<Demo />, document.getElementById('DemoContainer'))
