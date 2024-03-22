import React from 'react'
import UseCounter from '../hooks/useCounter'

export default function HookCustomThree () {

    const [count, increment, decrement, reset] = UseCounter(10, 2)

    return (
        <>
            hook count three: {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </>
    )


} 