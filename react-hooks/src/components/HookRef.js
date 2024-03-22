import React, {useEffect, useRef, useState} from 'react'

function HookRef() {

    const inputRef = useRef(null)
    
    useEffect( () => {
        inputRef.current.focus()
    }, [])






    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }

    }, [])

    return (
        <div>
            <input ref={inputRef} type="text"/><br/>
            <span>hook timer - {timer}</span>
            <button onClick={() => clearInterval(intervalRef.current)}>clear hook timer</button>
        </div>
        

    )
}


export default HookRef
