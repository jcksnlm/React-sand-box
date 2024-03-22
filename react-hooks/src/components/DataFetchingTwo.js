import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'success':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'error':
            return {
                loading: false,
                error: action.err,
                post: {}
            }
        default:
            return initialState
    }
}

export default function DataFetchingTwo () {

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`).then(
            res => {
                dispatch({type:'success', payload: res.data})
            }
        ).catch(
            err => {
                dispatch({type:'error', err: err})
            }
        )
    }, [])

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error && <>error</>}
        </div>
    )


} 