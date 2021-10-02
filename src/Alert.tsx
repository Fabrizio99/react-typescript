import React, { useState } from 'react';
import './Alert.css';

export const Alert = () => {
    const [isHidden, setIsHidden] = useState(true)

    return (
        <div>
            <p className={`${isHidden?'toggle':'visible'}`}>Now you can see the text</p>
            <button onClick={() => setIsHidden(!isHidden)}>Toggle Text</button>
        </div>
    )
}
