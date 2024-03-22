import React, {useState, useEffect} from 'react'

export default function HookEffect () {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    //execute when the component mount
    useEffect(()=>{
        document.title = `you clicked 0 times`

        //function executed when the component is will unmount
        return () => {
            console.log('good bye');
        } 
    }, [])

    //execute everytime the component updates
    useEffect(()=>{
        document.title = `you clicked ${count} times`
    })

    //execute only when the count changes
    useEffect(()=>{
        document.title = `you clicked ${count} times`
    }, [count])



    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>count: {count}</button>
        </div>
    )


} 