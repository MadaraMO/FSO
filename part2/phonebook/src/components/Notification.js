import React from 'react'

const Notification = ({ message }) => {
    const notificationStyle = {
        color: 'rgb(41, 163, 17)',
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
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification