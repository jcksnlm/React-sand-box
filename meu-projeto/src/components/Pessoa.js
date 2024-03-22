import PropTypes from 'prop-types'

function Pessoa({nome, peso, idade}) {

    function alertar(nome) {
        alert(`${nome} foi alertado`);
    }

    return (
        <>
        <span>{nome} - {peso}kg({peso>100 ? "gordo" : "magro"}) - {idade} anos {idade===999 && <b>(idade presumida)</b>}</span> <button type="button" onClick={() => alertar(nome)}>alertar</button>
        </>
    )
}

Pessoa.propType = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number
}

Pessoa.defaultProps = {
    idade: 999
}

export default Pessoa