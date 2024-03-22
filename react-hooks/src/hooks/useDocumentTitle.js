import {useEffect} from 'react'

function UseDocumentTitle(count) {
    useEffect(() => {
        document.title = `count ${count}`
    }, [count])
}

export default UseDocumentTitle
