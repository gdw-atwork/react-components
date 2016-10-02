import React, {Component} from 'react'
import {render} from 'react-dom'

class Demo extends Component {
    render () {
        return (
          <main>
            <h2>This is a React component</h2>
          </main>
        )
    }
}

render(<Demo />, document.getElementById('DemoContainer'))
