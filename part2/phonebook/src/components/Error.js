import React from 'react'

const Error = ({ message }) => {
    const errorStyle= {
        color: 'rgb(175, 7, 147)',
        background: 'rgb(240, 238, 238)',
        fontSize: 15,
        borderStyle: 'solid',
        borderRadius: 3,
        padding: 10,
        margin: 20
    }

    if (message === null) {
        return null
    }

    return (
        <div style={errorStyle}>
            {message}
        </div>
    )
}

export default Error