function T43({setAddFig}) {

    return (
        <button onClick={() => setAddFig(f => [...f, 'ap'])}>Add</button>
    )
}

export default T43;