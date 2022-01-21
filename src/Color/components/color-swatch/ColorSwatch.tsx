// import React, { useContext } from 'react';
import React from 'react';
// import { RGBContext } from '../../context';
import { useContext } from '../../context';

export const ColorSwatch = () => {
    const { red, green, blue } = useContext();
    return (
        <div
        className="color-swatch"
        style={{
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
        ></div>
    );
}
