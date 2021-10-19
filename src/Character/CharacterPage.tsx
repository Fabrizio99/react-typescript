import React from 'react';
import { CharacterType } from './characters';
import { CharacterInformation } from './components/character-information/CharacterInformation';

type WithCharacterProps = {
    character: CharacterType
}

function withCharacter<T extends WithCharacterProps>(Component: React.ComponentType<T>){
    
    return (props: Omit<T, keyof WithCharacterProps>) => {
        const [character, setCharacter] = React.useState<CharacterType | null>(null);
        const [loading, setLoading] = React.useState(true);

        React.useEffect(() => {
            const characterData: CharacterType = {
                name: '',
                alignment: '',
                intelligence: 0,
                strength: 0,
                speed: 0,
                durability: 0,
                power: 0,
                combat: 0,
                total: 0,
            }
            setTimeout(() => {
                setCharacter(characterData);
                setLoading(false);
            }, 1000);
        }, []);

        if(loading) return (<h1>Loading...</h1>)
        return character && <Component {...props as T} character={character}/>
    }
}

export const CharacterPage = () => {
    const CharacterInformationWithCharacter = withCharacter(CharacterInformation)
    const a = {
        color: 'red'
    }
    return (
        <div>
            <h1>CharacterPage</h1>
            {/* <CharacterInformationWithCharacter character={characterData}/> */}
            <CharacterInformationWithCharacter {...a}/>
        </div>
    )
}
