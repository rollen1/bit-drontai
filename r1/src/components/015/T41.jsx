function T41({setAddFig}) {

    return (
        <button onClick={() => setAddFig(f => [...f, 'kv'])}>Add</button>
    )
}

export default T41;