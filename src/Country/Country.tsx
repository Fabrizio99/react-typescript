import React, { useState } from 'react';
import { CountryForm } from './components/country-form/CountryForm';
import { CountryItem } from './components/country-item/CountryItem';
import './CountryStyles.css';
import { CountryModel } from './models/country.model';

export const Country = () => {
    const [countryList, setCountryList] = useState<CountryModel[]>([])
    const handleSubmit = async (countryName: string) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.trim()}`)
        const data = await response.json();
        setCountryList(Array.isArray(data)?data:[])
    }
    return (
        <div>
            <CountryForm onSubmit={handleSubmit}/>
            <hr />
            {
                countryList.map( (country, index) => (
                    <CountryItem key={index} country={country}/>
                ))
            }
        </div>
    )
}
