import HelloWorld from './HelloWorld';
import DestructProps from './DestructProps';
import Pessoas from './Pessoas';
import StateLiftInput from './StateLiftInput';
import { useState } from 'react'
import ComponenteClasse from './ComponenteClasse';
import Globais from './Globais';

function Home () {

    function evento () {
        console.log('clicou no local')
    }

    const [value, setValue] = useState();

    const [valueGlobal, setValueGlobal] = useState(Globais.variavelGlobal);

    function changeGlobal (value) {
        Globais.variavelGlobal = value;
        setValueGlobal(value);
    }
    
    return (
        <>
            <HelloWorld/>
            <br/>
            <DestructProps prop1 = "propriedade 1" prop2="propriedade 2"/>
            <br/>
            <Pessoas onLocalClick={evento}/>
            <br/>
            <StateLiftInput setValue={setValue}/>
            valor inserido: {value}
            <br/>
            <ComponenteClasse param="amarelo"/>
            <br/><br/>
            {Globais.variavelGlobal}
            <br/><br/>
            <input type="text" value={valueGlobal} onChange={(e) => changeGlobal(e.target.value)}></input>
        </>
    )
}

export default Home