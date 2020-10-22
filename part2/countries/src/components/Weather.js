import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Weather = ({ country }) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios
            .get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${country.capital}`)
            .then(response => {
                setWeather(response.data.current.condition)
            })
    }, [country])

    return (
        <>

            <h3>Weather in {country.capital}</h3>
            <div>{weather.text}</div>
            <img alt="flag" src={weather.icon} />
        </>
    )
}

export default Weather