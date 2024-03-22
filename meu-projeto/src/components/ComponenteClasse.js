import React from "react"

class ComponenteClasse extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            valorDom: "oioioioioioi",
            numeroDom: 0
        }

        this.aumentarComBind = this.aumentar.bind(this);
    }

    trocar() {
        this.setState({
            valorDom: "papapappa"
        });
    }

    aumentar() {
        
        this.setState(
            (state,props) => (
                {numeroDom: state.numeroDom + 1}
            )
        );
    }

    render() {
        return (
            <>
                <h4>esse é um componente de classe, parametro foi: {this.props.param}</h4>
                <h4>valor dom é: {this.state.valorDom}</h4>
                <button onClick={() => this.trocar()}>trocar</button>
                <h4>numero dom é: {this.state.numeroDom}</h4>
                <button onClick={() => this.aumentar()}>amentar</button>
                <button onClick={this.aumentarComBind}>amentar com bind</button>
            </>
        )
    }

    componentDidMount() {
        console.log('montou o componente');
    }

    componentDidUpdate() {
        console.log('atualizou o componente');
    }

    componentWillUnmount() {
        console.log('desmontou o componente');
    }
}

export default ComponenteClasse