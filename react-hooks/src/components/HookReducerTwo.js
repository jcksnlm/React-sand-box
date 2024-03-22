import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {firstCounter: state.firstCounter + 1}
        case 'decrement':
            return {firstCounter: state.firstCounter - 1}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function Counter () {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            count: {count.firstCounter}
            <button onClick={() => dispatch({type: "increment"})}>increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
            <button onClick={() => dispatch({type: "reset"})}>reset</button>
        </>
    )


} 