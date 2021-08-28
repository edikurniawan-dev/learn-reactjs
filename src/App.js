import React, { useState } from 'react';
// import Router from './router';

export default function App() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };
    return (
        <div>
            {counter}
            <div>
                <button onClick={increment}>Tambah</button>
            </div>
        </div>
    );
}
