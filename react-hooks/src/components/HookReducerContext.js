import React, {useContext} from 'react'
import { CountContext } from '../App'



export default function Counter () {

    const countContext = useContext(CountContext)

    return (
        <>
            <button onClick={() => countContext.dispatch("increment")}>increment</button>
            <button onClick={() => countContext.dispatch("decrement")}>decrement</button>
            <button onClick={() => countContext.dispatch("reset")}>reset</button>
        </>
    )


} 