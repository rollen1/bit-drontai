import rand from '../../Functions/rand';

function Dog() {

    if (rand(0, 1)) {
        return null;
    }

    return (
        <>
            <h2 className="h2" style={{
                color: ['crimson', 'skyblue', 'orange'][rand(0, 2)],
                fontSize: rand(0, 1) ? '40px' : null
            }}>Dog {false ? 'Jo' : 'Ne Jo'}</h2>
            <h3 className={rand(0, 1) ? 'dog' : 'cat'}>Big {rand(100, 999)}</h3>
        </>
    );

}

export default Dog;