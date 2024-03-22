import React, {useState} from 'react'

function Counter () {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);   
        }
    }


    return (
        <>
            count: {count}
            <button onClick={() => setCount(initialCount)}>reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>decrement</button>
            <button onClick={() => incrementFive()}>incrementFive</button>
        </>
    )


} 

export default React.memo(Counter)