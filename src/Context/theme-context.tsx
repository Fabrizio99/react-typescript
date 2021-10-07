import { createContext, CSSProperties, ReactNode } from "react";

type Themes = {
    [key: string]: CSSProperties
}

const defaultTheme: Themes = {
    light: {
        backgroundColor: 'white',
        color: 'black'
    },
    dark: {
        backgroundColor: '#555',
        color: 'white'
    }
}

export const ThemeContext = createContext<Themes>(defaultTheme)

export const ThemeProvider = ({children}: {children: ReactNode}) => (
    <ThemeContext.Provider value={defaultTheme}>
        {children}
    </ThemeContext.Provider>
)