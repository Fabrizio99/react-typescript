import React, { useContext } from 'react';
import { ThemeContext } from '../Context/theme-context';
import './ColorPageStyles.css';

export const ColorPage = () => {
    const themeContext = useContext(ThemeContext)
    return (
        <div
            style={{
                ...themeContext.dark
            }}
        >
            color page
        </div>
    )
}
