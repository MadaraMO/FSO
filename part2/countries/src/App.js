
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

const List = ({ countriesList, handleButton }) => {

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
      {countriesList.map(country =>
        <li key={country.name}>{country.name} <button onClick={handleButton}>Show</button></li>
      )}
    </>
  )

}


const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('')
  const [showList, setShowList] = useState(true)


  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const countriesToShow = showList
    ? countries
    : countries
      .filter(country =>
        country.name.toLowerCase()
          .includes(filterCountry.toLowerCase()))

  console.log(showList)
  console.log(filterCountry)


  const handleFilterCountry = (e) => {
    setFilterCountry(e.target.value)
    setShowList(false)
  }

  const handleButton = (e) => {
    // es nesaprotu, kas, ko, kāpēc === parentElement.firstChild.data)
    // atradu, nokopēju, poga strādā pareizi. bet es neatceros, ka FSO par šo būtu mācīts
    setFilterCountry(e.target.parentElement.firstChild.data)
   
  }

  return (
    <>
      <h1>Countries</h1>
      <Filter handleFilterCountry={handleFilterCountry} />
      <List countriesList={countriesToShow} handleButton={handleButton} filter={filterCountry} />
    </>
  )
}

export default App;
