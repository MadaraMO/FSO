
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ handleFilterCountry }) => (
  <>
    <p> Find countries </p>
    <input onChange={handleFilterCountry} />
  </>
)

const Language = ({ language }) => (
  <li>{language}</li>
)


const Country = ({ country }) => {
  const [weather, setWeather] = useState([])
  // const api_key = process.env.REACT_APP_API_KEY


  useEffect(() => {
    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${country.capital}`)
      .then(response => {
        setWeather(response.data.current.condition)
      })
  }, [country])
  console.log(weather.current)
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

      <h3>Weather in {country.capital}</h3>
      <div>{weather.text}</div>
      <img alt="flag" src={weather.icon} />
    </>
  )
}

const List = ({ countriesList, setToCountry }) => {
  // joprojām šis if neiet cauri
  if (countriesList.length > 10 && !countriesList.length === 1) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countriesList.length === 1) {
    return (
      <ul>
        {countriesList.map((country) =>
          <Country key={country.name} country={country} />
        )}
      </ul>
    )
  } else if (countriesList.length <= 10) {
    return (
      <ul>
        {countriesList.map(country =>
          <li key={country.name}>{country.name} <button onClick={() => setToCountry(country.name)}>Show</button></li>
        )}
      </ul>
    )
  }
  return (
    <p>Feel free to search for a country</p>
  )
}



const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('')



  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const countriesToShow = filterCountry
    ? countries
      .filter(country =>
        country.name.toLowerCase()
          .includes(filterCountry.toLowerCase()))
    : countries


  const handleFilterCountry = (e) => {
    setFilterCountry(e.target.value)
  }

  const seeCountry = (filter) => {
    setFilterCountry(filter)
  }

  return (
    <>
      <h1>Countries</h1>
      <Filter handleFilterCountry={handleFilterCountry} />
      <List countriesList={countriesToShow} setToCountry={seeCountry} />
    </>
  )
}

export default App;
