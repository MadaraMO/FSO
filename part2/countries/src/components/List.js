
import React from 'react'
import Country from './Country'

const List = ({ countriesList, setToCountry }) => {

    if (countriesList.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    if (countriesList.length > 1) {
        return (
            <ul>
                {countriesList.map(country =>
                    <li key={country.name}>{country.name} <button onClick={() => setToCountry(country.name)}>Show</button></li>
                )}
            </ul>
        )
    }

    if (countriesList.length === 1) {
        
        return (
            <>
                {
                    countriesList.map((country) =>
                        <Country key={country.name} country={country} />
                    )
                }
            </>
        )
    }

    return (
        <p>Feel free to search for a country</p>
    )
}

export default List