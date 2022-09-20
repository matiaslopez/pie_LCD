import {Component} from "react";

class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = { contador: 0 }
    }

    sumar() {
        this.cambiarContador(this.state.contador + 1)
    }

    restar() {
        this.cambiarContador(this.state.contador - 1)
    }

    cambiarValor(sacar, agregar) {
       this.cambiarContador(this.state.contador - sacar + agregar)

    }

    cambiarContador(n) {
        this.setState({contador: n})
    }

     render() {
       return (<b>
         {/*<a href="#" onClick={(event) => { this.restar() }}>-</a>*/}
         {this.state.contador}
         {/*<a href="#" onClick={(event) => { this.sumar() }}>+</a>*/}
       </b>)
     }
}

export default Contador