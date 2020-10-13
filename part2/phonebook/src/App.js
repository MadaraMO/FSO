import React, { useState } from 'react'
import Persons from './components/Persons'


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 0 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 1 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 2 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 3 }
    ])

    const [newName, setNewName] = useState('Aloha, mermaid...')
    const [newNumber, setNewNumber] = useState('')

    const addContact = (e) => {
        e.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {

            const newObject = {
                name: newName,
                number: newNumber,
                id: persons.length + 1,
            }

            setPersons(persons.concat(newObject))
            setNewName('')
            setNewNumber('')
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
            {/* <div>
            search: <input
                        value={search}
                        onChange={handleSearch} />
            </div> */}
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