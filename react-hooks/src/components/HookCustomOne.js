import React, {useState} from 'react'
import UseDocumentTitle from '../hooks/useDocumentTitle'

function HookCustomOne() {
    const [count, setCount] = useState(0)

    UseDocumentTitle(count)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Custom hook counter - {count}</button>
        </div>
    )
}

export default HookCustomOne
