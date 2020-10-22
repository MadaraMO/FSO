import React from 'react'

const Filter = ({ handleFilterCountry }) => (
    <>
        <p> Find countries </p>
        <input onChange={handleFilterCountry} />
    </>
)

export default Filter