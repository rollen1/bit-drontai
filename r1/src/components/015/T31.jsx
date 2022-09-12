function T31({setShowCircle, showCircle}) {

    return (
        <div className="container">
        {showCircle ? <div className="ap" onClick={() => setShowCircle(c => !c)}></div> : null}
        </div>
    )
}

export default T31;