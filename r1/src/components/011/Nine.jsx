import randomColor from '../../Functions/randColor';
function Nine({nine, setNine}) {

    const changeColor = c => {
        setNine(n => n.map(kv => kv === c ? randomColor() : kv));
    }

    return (
        <div className="container9">
            {
                nine.map((c, i) => <div onClick={() => changeColor(c)} key={i} style={{backgroundColor: c}}></div>)
            }
        </div>
    );
}

export default Nine;