import React from 'react'


const Filter = ({ handleSearchName }) => (
    
    <>
        <p> Name: </p>
        <input
            onChange={handleSearchName}
        />
    </>
)

export default Filter