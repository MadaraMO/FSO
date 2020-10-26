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
        const person = persons.find((p) => p.name === newName)
        const confirmation = window.confirm(`${newName} is already added to phonebook. Replace numbers?`)

        const newObject = {
            name: newName,
            number: newNumber
        }

        personService
            .create(newObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })


        if (confirmation) {
            const updatedPerson = { ...person, number: newNumber }
            
//         if (persons.some(person => person.name === newName)) {
    //             window.confirm(`${persons.name} is already added to phonebook. Replace numbers?`)
            personService
                .update(person.id, updatedPerson)
                .then(returnedPerson => {
                    setPersons(persons.map((p) => (p.id !== persons.id ? p : returnedPerson)))
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


    const removePerson = (id) => {

        const person = persons.find(p => p.id === id)
        window.confirm(`Delete ${person.name}?`)

        personService
            .remove(id)
            .then(
                setPersons(persons.filter((p) => p.id !== id))
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