import React from 'react';
import { CountryModel } from '../../models/country.model';
import './CountryItemStyles.css';

type CountryItemProps = {
    country: CountryModel
}
export const CountryItem = ({country}:CountryItemProps) => {
    return (
        <div className="country-item">
            {country.name.common}
        </div>
    )
}
