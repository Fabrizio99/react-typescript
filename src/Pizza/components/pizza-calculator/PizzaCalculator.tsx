import React, { Dispatch } from 'react';
import { PizzaAction, PizzaState } from '../../models/pizza.model';
import './PizzaCalculatorStyles.css';

export const PizzaCalculator = ({dispatch, state}: {dispatch: Dispatch<PizzaAction>, state: PizzaState}) => {
    return (
        <form className="pizza-calculator">
            <label>Number of people</label>
            <input 
                type="number" 
                value={state.numberOfPeople}
                onChange={e => dispatch({
                    type: 'UPDATE_NUMBER_OF_PEOPLE',
                    payload: +e.target.value
                })}
            />
            <label>Slices per person</label>
            <input 
                type="number" 
                value={state.slicesPerPerson}
                onChange={
                    e => dispatch({
                        type: 'UPDATE_SLICES_PER_PERSON',
                        payload: +e.target.value
                    })
                }
            />
            <label>Slices per pie</label>
            <input 
                type="number" 
                value={state.slicesPerPie}
                onChange={
                    e => dispatch({
                        type: 'UPDATE_SLICES_PER_PIE',
                        payload: +e.target.value
                    })
                }
            />
        </form>
    )
}
