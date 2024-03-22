import Frase from "./Frase"
import { FaFacebook } from 'react-icons/fa'

function HelloWorld () {
    const frase = "essa é a frase";
    console.log(frase)
    return (
        
        <div>
            <h1>hello world</h1><FaFacebook/>
            <Frase content={frase}/>
            
        </div>
    )
}

export default HelloWorld