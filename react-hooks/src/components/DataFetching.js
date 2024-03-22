import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function DataFetching () {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(
            res => {
                console.log('res')
                setPost(res.data)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }, [idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
            <div>{post.title}</div>
            <button onClick={handleClick}>fetch post</button>

        </div>
    )


} 