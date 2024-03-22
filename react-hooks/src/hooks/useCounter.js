import {useState} from 'react'

function UseCounter(initialCount = 0, value = 1) {

    const [count, setCounter] = useState(initialCount)

    const increment = () => {
        setCounter(count + value)
    }
    const decrement = () => {
        setCounter(count - value)
    }
    const reset = () => {
        setCounter(initialCount)
    }

    return [count, increment, decrement, reset]

}

export default UseCounter
