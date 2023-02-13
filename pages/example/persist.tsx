import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Persist = () => {
    const [color, setColor] = useState(
        typeof window !== 'undefined' ? localStorage.getItem('footerColor') || 'blue' : 'blue'
    );



    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('footerColor', color);
        }
    }, [color]);

    const handleClick = () => {
        setColor(color === 'blue' ? 'red' : 'blue');
    };

    return (
        <footer style={{ backgroundColor: color }}>
            <Link href="/fakeroute1">
                Home
            </Link>
            <Link href="/fakeroute2">
                About
            </Link>
            <button onClick={handleClick}>Change Footer Color</button>
        </footer>
    );
};

export default Persist;