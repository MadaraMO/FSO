
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ handleFilterCountry }) => (
  <>
    <p> Find countries </p>
    <input onChange={handleFilterCountry} />

  </>
)

const Country = ({ countries }) => {

  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )

  } else if (countries.length < 10) {
    return (
      <ul>
        {
          countries.map((country) =>
            <li key={country.name}>{country.name}</li>
          )}
      </ul>
    )
    
  } else {
    return (
      <p>Feel free to search for a country</p>
    )
  }
}



  const App = () => {
    const [countries, setCountries] = useState([])
    const [filterCountry, setFilterCountry] = useState('')
    const [showCountries, setShowCountries] = useState(true)


    useEffect(() => {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          setCountries(response.data)
        })
    }, [])


    const countriesToShow = showCountries
      ? true
      : countries
        .filter(country =>
          country.name.toLowerCase()
            .includes(filterCountry.toLowerCase()))


    const handleFilterCountry = (e) => {
      setFilterCountry(e.target.value)
      setShowCountries(false)
    }
    return (
      <>
        <h1>Countries</h1>
        <Filter handleFilterCountry={handleFilterCountry} />
        <Country countries={countriesToShow} />
      </>
    )
  }

  export default App;
