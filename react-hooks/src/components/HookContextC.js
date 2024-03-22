import React, {useContext} from "react"
import { UserContext, ChannelContext } from "../App"

export default function HookContextC() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} - {channel}
        </div>
    )

    //obsolete:
    // return (
    //     <div>
    //         <UserContext.Consumer>
    //             {
    //                 val => {
    //                     return <>value: {val}</>
    //                 }
    //             }
    //         </UserContext.Consumer>
    //     </div>
    // )
    
};