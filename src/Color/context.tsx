import * as React from "react";
import { createContext } from "../create-context";
import { RGBColorType } from "../types";
import { AdjustmentAction, reducer } from './reducer';

interface RGBContextType extends RGBColorType{
    dispatch: React.Dispatch<AdjustmentAction>
}

const initialState: RGBColorType = {
    red: 0,
    green: 0,
    blue: 0
};

// export const RGBContext = React.createContext<RGBContextType>(initialState as RGBContextType)
export const [useContext, Provider] = createContext<RGBContextType>()

export const RGBContextProvider = ({children}: {children: React.ReactNode}) => {
    const [rgb, dispatch] = React.useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0
    })

    return (
        <Provider value={{...rgb, dispatch}}>
            {children}
        </Provider>
    )
    // return (
    //     <RGBContext.Provider value={{...rgb, dispatch}}>
    //         {children}
    //     </RGBContext.Provider>
    // )
}