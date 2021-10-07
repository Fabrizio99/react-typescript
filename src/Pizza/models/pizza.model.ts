export type PizzaData = {
    numberOfPeople: number;
    slicesPerPerson: number;
    slicesPerPie: number
}
export type PizzaState = PizzaData & {pizzasNeeded: number}
export type PizzaAction = {
    type: 'UPDATE_NUMBER_OF_PEOPLE' | 'UPDATE_SLICES_PER_PERSON' | 'UPDATE_SLICES_PER_PIE',
    payload: number
}