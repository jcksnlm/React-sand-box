import React, {useState, useCallback} from 'react'
import HookCallbackButton from './HookCallbackButton'

function HookCallback (props) {

    const [callbackCount, setCallbackCount] = useState(0)
    
    const increaseCallbackCount = useCallback(() => {
        setCallbackCount(callbackCount + 1)
    }, [callbackCount])

    return (
        <>
            callback counter: {callbackCount}
            <HookCallbackButton handleClick={increaseCallbackCount}/>
        </>
    )


} 

export default React.memo(HookCallback)