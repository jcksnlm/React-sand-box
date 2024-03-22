import Pessoa from "./Pessoa.js"
import { useState } from 'react'

function Pessoas({onLocalClick}) {
    function submeter(e) {
        e.preventDefault();
        alert(`todo mundo foi submetido a tortura em ${local}`);
    }

    const [local, setLocal] = useState('curitiba');

    const pessoas = [
        {nome: 'lula', peso: 30, idade: 98},
        {nome: 'bolsonaro', peso: 30, idade: 12},
        {nome: 'dilma', peso: 120},

    ]

    return (
        <>
        <form  onSubmit={submeter}>
            <ul>
                {
                    pessoas.map((pessoa, index) => (
                            <li key={index}>
                                <Pessoa nome={pessoa.nome} idade={pessoa.idade} peso={pessoa.peso}/>
                            </li>
                        )
                    )
                }

            </ul>
            <div> 
                <label htmlFor="local">local: </label>
                <input id="local" name="local" type="text" onClick={onLocalClick} value={local} onChange={(e) => setLocal(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="submeter"/>
            </div>
            
        </form>
        
        </>
    )
}

export default Pessoas