function Cat({cat, i}) {

    return (
        <div style={{
            backgroundColor: cat.id % 2 ? 'crimson' : 'skyblue',
            borderRadius: cat.weight > 4 ? '50%' : null
        }}>{cat.name} {cat.weight}</div>
    )
}

export default Cat;