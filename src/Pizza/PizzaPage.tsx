import React, { useReducer } from 'react';
import { PizzaCalculation } from './components/pizza-calculation/PizzaCalculation';
import { PizzaCalculator } from './components/pizza-calculator/PizzaCalculator';
import { PizzaAction, PizzaData, PizzaState } from './models/pizza.model';
import './PizzaPageStyles.css';



const calculatePizzasNeeded = ({
    numberOfPeople,
    slicesPerPerson,
    slicesPerPie
}: PizzaData): number => {
    return Math.ceil((numberOfPeople * slicesPerPerson) / (slicesPerPie !== 0? slicesPerPie : 1));
};

const addPizzasNeededToPizzaData = (data: PizzaData): PizzaState => {
    return { ...data, pizzasNeeded: calculatePizzasNeeded(data) };
};


const reducer = (state: PizzaState, action: PizzaAction) => {
    switch (action.type) {
        case 'UPDATE_NUMBER_OF_PEOPLE':
            return addPizzasNeededToPizzaData({
                ...state,
                numberOfPeople: action.payload
            })
        case 'UPDATE_SLICES_PER_PERSON':
            return addPizzasNeededToPizzaData({
                ...state,
                slicesPerPerson: action.payload
            })
        case 'UPDATE_SLICES_PER_PIE':
            return addPizzasNeededToPizzaData({
                ...state,
                slicesPerPie: action.payload
            })
        default:
            return state
    }
}

const initialState: PizzaState = {
    numberOfPeople: 0,
    slicesPerPerson: 0,
    slicesPerPie: 0,
    pizzasNeeded: 0
}

export const PizzaPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="pizza">
            <h1>Pizza Calculator</h1>
            <PizzaCalculation count={state.pizzasNeeded}/>
            <PizzaCalculator state={state} dispatch={dispatch}/>
        </div>
    )
}
