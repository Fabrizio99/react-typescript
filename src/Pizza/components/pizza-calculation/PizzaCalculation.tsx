import React from 'react'
import './PizzaCalculationStyles.css'

export const PizzaCalculation = ({count}:{count: number}) => {
    return (
        <div className="pizza-calculation">
            <p className="number">{count}</p>
            <p className="caption">Pizzas needed</p>
        </div>
    )
}
