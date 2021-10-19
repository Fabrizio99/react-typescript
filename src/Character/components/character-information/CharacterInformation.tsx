import React from 'react'
import { CharacterType } from '../../characters';

export const CharacterInformation = (props: {character: CharacterType, color: string}) => {
    return (
        <div style={{color: props.color}}>
            Here it's supossed to show a table with data :v
        </div>
    )
}
