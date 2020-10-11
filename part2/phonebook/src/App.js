import React, { useState } from 'react'
import Persons from './components/Persons'


const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            id: 0
        }
    ])

    const [newName, setNewName] = useState('Aloha, mermaid...')
    const [newNumber, setNewNumber] = useState('')

    const addContact = (e) => {
        e.preventDefault()

        const nameObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }

        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')

        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is already added to phonebook`)
        }
    }


    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addContact}>
                <div>
                    name: <input
                        value={newName}
                        onChange={handleNameChange} />
                </div>
                <div>
                number: <input
                        value={newNumber}
                        onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>

            <h2>Numbers</h2>
            <Persons persons={persons} />
        </div>
    )
}


export default App