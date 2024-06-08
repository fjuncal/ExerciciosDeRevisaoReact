import {Component} from "react";

export default class Contador extends Component {

    state = {
        numero: this.props.valorIncial ?? 0,
        passo: this.props.passo ?? 1
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + (this.state.passo ?? 1)
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - (this.state.passo ?? 1)
        })
    }

    renderForm() {
        return (
            <div>
                <input type="number" min={1} max={1000} value={this.state.passo}
                       onChange={ev => this.setState({passo: +ev.target.value})}/>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Contador (usando Classe)</h1>
                <h3>{this.state.numero}</h3>
                {this.renderForm()}
            </div>
        )
    }
}