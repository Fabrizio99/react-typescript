export const getBooks = async() => {
    await new Promise(r => setTimeout(r, 2000))
    return [
        {
            name: 'Atomic Habits'
        },
        {
            name: 'Travesuras de la niña mala'
        },
        {
            name: 'Clean code'
        }
    ]
}