import { useEffect, useState } from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import booksReducer from '../../Reducers/booksReducer';
import { filterBooks, getFromServer, sortBooks } from '../../Actions/books';

const selectOptions = [
    { id: 1, text: 'Default' },
    { id: 2, text: 'By Price 1-9' },
    { id: 3, text: 'By Price 9-1' },
    { id: 4, text: 'By Title A-Z' },
    { id: 5, text: 'By Title Z-A' }
]

function Books() {

    const [books, dispachBooks] = useReducer(booksReducer, null);
    const [types, setTypes] = useState(null);
    const [cart, setCart] = useState([]);
    const [select, setSelect] = useState(selectOptions[0].id);
    const [range, setRange] = useState(null);
    const [minMax, setMinMax] = useState({min: 0, max: 0});

    useEffect(() => {
        if (null === range) {
            return;
        }
        dispachBooks(filterBooks(range));
    }, [range]);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => {
                dispachBooks(getFromServer(res.data));
                const min = Math.floor(Math.min(...(res.data.map(o => o.price))));
                const max = Math.ceil(Math.max(...(res.data.map(o => o.price))));
                setMinMax({min, max});
                setRange(max);
            });
    }, []);

    useEffect(() => {
        const type = localStorage.getItem('booksTypes');
        if (type !== null) {
            setTypes(JSON.parse(type));
        } else {
            axios.get('https://in3.dev/knygos/types/')
            .then(res => {
                setTypes(res.data)
                localStorage.setItem('booksTypes', JSON.stringify(res.data));
            });
        }
    }, []);

    useEffect(() => {
        dispachBooks(sortBooks(select));
    }, [select]);

    const buy = id => {
        const product = cart.find(b => b.id === id);
        if (product) {
            setCart(cart.map(p => p.id === id ? { ...p, count: p.count + 1 } : { ...p }));
        } else {
            setCart(c => [...c, { id, price: books.find(b => b.id === id).price, count: 1 }]);
        }
    }

    if (null === books) {
        return (
            <div className="loader-bin">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        );
    }


    return (
        <>
            <div className="books">
                <div className="cart">
                    <span>{cart.length}</span>
                    <svg><use xlinkHref="#cart"></use></svg>
                    <strong>{(cart.reduce((pre, cur) => pre + cur.price * cur.count, 0).toFixed(2))}</strong>
                </div>
                <div className="left">
                    <div className='sort'>
                        <span>SORT:</span>
                        <select value={select} onChange={e => setSelect(e.target.value)}>
                            {
                                selectOptions.map(s => <option key={s.id} value={s.id}>{s.text}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="left1">
                <input type="range" min={minMax.min} max={minMax.max} value={range} onChange={e => setRange(e.target.value)}></input>
                <span>{range}</span>
                </div>
                {
                    books?.map(b => b.show ? <div className="book" key={b.id}>
                        <div className="types">{types?.find(t => b.id === t.id).title}</div>
                        <h2>{b.title}</h2>
                        <img src={b.img} alt={b.title}></img>
                        <h4>{b.author}</h4>
                        <div className="price">
                            <span>{b.price.toFixed(2)} eur</span>
                            <button onClick={() => buy(b.id)}>Pirkti</button>
                        </div>
                    </div> : null)
                }
            </div>

        </>
    );
}

export default Books;