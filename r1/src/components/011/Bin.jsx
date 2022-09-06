function Bin({select, data}) {

    return (
        <>
        <h2>{select}</h2>
        <div className="containerBin">
            {
                data.map((d, i) => d.select === select ? <div key={i}>{d.number}</div> : null)
            }
        </div>
        </>
    );
}

export default Bin;