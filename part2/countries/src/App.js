
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ handleFilterCountry }) => (
  <>
    <p> Find countries </p>
    <input onChange={handleFilterCountry} />

  </>
)

const Language = ({ language }) => (
  <li>{language}{language.key}</li>
)


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


    </>
  )
}

const List = ({ countriesList }) => {

// relationship between first two conditions - 
// they somewhat cooporate, but I don't really appreciate inconsistency
// both should react (appear and disappear) according to the state of input field 
// not to array length. If input is empty - "feel free", 
// otherwise "too many matches" || countries list of 10 || the single country

  if (countriesList.length > 20) {
    return (
      <p>Feel free to search for a country</p>
    )
  }

  else if (countriesList.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )

  } else if (countriesList.length === 1) {
    return (
      <>
        <ul>
          {countriesList.map((country) =>
            <Country key={country.name} country={country} />
          )}
        </ul>
      </>
    )
  }
  return (
    <>
      <ul>
        {countriesList.map(country =>
          <li key={country.name}>{country.name}</li>
        )}
      </ul>
    </>
  )
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
    ? countries
    : countries
      .filter(country =>
        country.name.toLowerCase()
          .includes(filterCountry.toLowerCase()))
  // ? filterCountry === ''
  // : <p>Feel free to search for a country</p>



  const handleFilterCountry = (e) => {
    setFilterCountry(e.target.value)
    setShowCountries(false)
  }
  return (
    <>
      <h1>Countries</h1>
      <Filter handleFilterCountry={handleFilterCountry} />
      <List countriesList={countriesToShow} />
    </>
  )
}

export default App;
