import { useState, useEffect } from 'react';
import axios from 'axios';

function Api2() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data.sort((a, b) => b.title.length - a.title.length));
        })
    }, []);

    return (
        <ul>
            {
                posts.map(p => <li key={p.id} style={{
                    color: p.title.length < 20 ? 'crimson' : null
                }}>
                    {p.title}
                </li>)
            }
        </ul>
    )
}

export default Api2;