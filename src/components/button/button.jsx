import React, {Component, PropTypes} from 'react'

import './button.scss'

export class Button extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired,
        onItemClick: PropTypes.func.isRequired,
        level: PropTypes.string,
        disabled: PropTypes.bool,
        name: PropTypes.string
    }

    static levels = ['primary', 'secondary', 'tertiary']

    render () {
        const {children, onItemClick, level, disabled, name} = this.props

        const rcProps = {
            name,
            level: (Button.levels.indexOf(level) >= 0 ? level : Button.levels[0]),
            onClick: onItemClick,
            disabled: (disabled ? 'disabled' : undefined)
        }

        return (<rc-button {...rcProps}>
          {children}
        </rc-button>)
    }
}
