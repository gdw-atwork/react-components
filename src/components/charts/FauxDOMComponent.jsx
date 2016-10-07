import {Component} from 'react'
import ReactFauxDOM from 'react-faux-dom'

export class FauxDOMComponent extends Component {
    constructor () {
        super()

        this.componentWillMount = this.componentWillMount.bind(this)
        this.connectFauxDOM = this.connectFauxDOM.bind(this)
        this.drawFauxDOM = this.drawFauxDOM.bind(this)

        this.animateFauxDOM = this.animateFauxDOM.bind(this)
        this.stopAnimatingFauxDOM = this.stopAnimatingFauxDOM.bind(this)
        this.isAnimatingFauxDOM = this.isAnimatingFauxDOM.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
    }
}

FauxDOMComponent.prototype.componentWillMount = ReactFauxDOM.mixins.core.componentWillMount
FauxDOMComponent.prototype.connectFauxDOM = ReactFauxDOM.mixins.core.connectFauxDOM
FauxDOMComponent.prototype.drawFauxDOM = ReactFauxDOM.mixins.core.drawFauxDOM

FauxDOMComponent.prototype.animateFauxDOM = ReactFauxDOM.mixins.anim.animateFauxDOM
FauxDOMComponent.prototype.stopAnimatingFauxDOM = ReactFauxDOM.mixins.anim.stopAnimatingFauxDOM
FauxDOMComponent.prototype.isAnimatingFauxDOM = ReactFauxDOM.mixins.anim.isAnimatingFauxDOM
FauxDOMComponent.prototype.componentWillUnmount = ReactFauxDOM.mixins.anim.componentWillUnmount
