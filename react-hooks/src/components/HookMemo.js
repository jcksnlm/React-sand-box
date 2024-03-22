import React, {useState, useMemo} from 'react'

export default function HookMemo () {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i<1000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])


    return (
        <>
            <button onClick={incrementOne}>counter one - {counterOne}</button>
            <span>{isEven ? 'even' : 'odd'}</span>
            <br/>
            <button onClick={incrementTwo}>counter two - {counterTwo}</button>
        </>
    )


} 
