function StateLiftInput ({ setValue }) {
    return (
        <>
        <input type="text" onChange={e => setValue(e.target.value)}/>
        </>
    )
}

export default StateLiftInput