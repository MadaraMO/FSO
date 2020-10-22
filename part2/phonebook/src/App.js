import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'



const App = () => {
    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchName, setSearchName] = useState('')
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        personService
            .getAll()
            // https://javascript.info/promise-chaining
            .then(initialData => {
                setPersons(initialData)
            })
    }, [])


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

            personService
                .create(newObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
        }


    }

    const personsToShow = showAll
        ? persons
        : persons
            .filter(person =>
                person.name.toLowerCase()
                    .includes(searchName.toLowerCase()))


    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
    }

    const handleSearchName = (e) => {
        setSearchName(e.target.value)
        setShowAll(false)
    }


    // problēma - dzēšam ar visu id. pēc tam atkal pievienojot personu, rodas id konflikts
    const removePerson = (id) => {
        // pēc tam izmantot if (window.confirm(`Delete ${person.name}?`)) 

        const person = persons.find(p => p.id === id)
        const removedPerson = { ...person, id: person.id }
        console.log(`${id} is not going to last`)

        personService
            .update(id, removedPerson)
            .then(returnedPersons => {
                setPersons(persons.filter(person => person.id !== returnedPersons.id))
            }
            )
    }


    return (
        <>
            <h2>Phonebook</h2>
            <Filter
                handleSearchName={handleSearchName} />
            <h2>Add New Contact</h2>
            <PersonForm
                addContact={addContact}
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange} />
            <h2>Numbers</h2>
            <Persons
                persons={personsToShow}
                removePerson={removePerson} />
        </>
    )
}


export default App