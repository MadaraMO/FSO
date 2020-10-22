
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import List from './components/List'




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
    : !countries


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
