import React from 'react'
import useInput from '../hooks/useInput'

function HookCustomFour() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`${firstName} - ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
       <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>first name</label> 
                <input type='text' 
                    {...bindFirstName}
                />
                <label>last name</label> 
                <input type='text' 
                    {...bindLastName}
                />
            </div>
            <button>Submit</button>
        </form>
       </div> 
    )
}

export default HookCustomFour
