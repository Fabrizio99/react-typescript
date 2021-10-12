import React, { useContext } from 'react';
import { ThemeContext } from '../Context/theme-context';
import './ColorPageStyles.css';
import { ColorAdjustment } from './components/color-adjustment/ColorAdjustment';
import { ColorInput } from './components/color-input/ColorInput';
import { ColorSlider } from './components/color-slider/ColorSlider';
import { ColorSwatch } from './components/color-swatch/ColorSwatch';

export const ColorPage = () => {
    const themeContext = useContext(ThemeContext)
    return (
        <div
            style={{
                ...themeContext.dark
            }}
        >
            <ColorSwatch />
            {/* <ColorSliders /> */}
            <ColorAdjustment Adjustment={ColorInput} />
            <ColorAdjustment Adjustment={ColorSlider}/>
        </div>
    )
}
