import React from 'react'
import Language from './Language'
import Weather from './Weather'


const Country = ({ country }) => {

    return (
        <>
            <h3>{country.name}</h3>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Language(s)</h3>

            <ul>
                {country.languages.map((language) =>
                    <Language key={language.name} language={language.name} />
                )}
            </ul>

            <img alt="flag" src={country.flag} />

            <Weather country={country} />
        </>
    )
}

export default Country