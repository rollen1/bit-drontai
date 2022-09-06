import { useEffect } from 'react';

function Dog({i}) {

    

    useEffect( () => {
        console.log('New dog');
        return () => {
            console.log('Dog gone');
        }
    }, []);

    return (
        <div>{i}</div>
    )
}

export default Dog;