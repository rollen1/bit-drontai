function T42({addFig}) {

    return (
        <div className="container">
        { 
        addFig.map((c, i) => <div className={c} key={i}></div>) 
        }

        {/* { 
        addFig.map((c, i) => c === 'kv' ? <div className="kv" key={i}></div> : null) 
        }
        { 
        addFig.map((c, i) => c === 'ap' ? <div className="ap" key={i}></div> : null) 
        } */}

        </div>
    )
}

export default T42;