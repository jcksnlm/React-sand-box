import React from 'react'

function HookCallbackButton ({handleClick}) {

    return (
        <>
            <button onClick={handleClick}>increment</button>
        </>
    )


} 

export default React.memo(HookCallbackButton)