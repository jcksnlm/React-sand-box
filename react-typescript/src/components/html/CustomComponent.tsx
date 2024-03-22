import React from 'react'
import { Greet } from '../props/Greet'



function CustomComponent(props: React.ComponentProps<typeof Greet>) {
    const {} = props

    return (
        <>{props.isLoggedIn}</>
    )
}

export default CustomComponent
