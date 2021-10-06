import React, { useState } from 'react'
import './CountryFormStyles.css'

type CountryFormProps = {
    onSubmit: (c: string) => void
}

export const CountryForm = ({onSubmit}: CountryFormProps) => {
    const [value, setValue] = useState<string>('')

    return (
        <form
            onSubmit={ (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                onSubmit(value)
                setValue('')
            }}
        >
            <h1>Country App</h1>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        </form>
    )
}
