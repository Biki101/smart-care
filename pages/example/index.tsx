import React, { useState } from 'react';

function Example() {
    const [activeButton, setActiveButton] = useState('Button 1');

    return (
        <div>
            <button
                style={activeButton === 'Button 1' ? { backgroundColor: 'lightblue' } : {}}
                onClick={() => setActiveButton('Button 1')}
            >
                Button 1
            </button>
            <button
                style={activeButton === 'Button 2' ? { backgroundColor: 'lightblue' } : {}}
                onClick={() => setActiveButton('Button 2')}
            >
                Button 2
            </button>
        </div>
    );
}

export default Example;