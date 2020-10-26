import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Error from './components/Error'
import personService from './services/persons'
import './index.css'



const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchName, setSearchName] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [message, setMessage] = useState(null)
    const [error, setErrorMessage] = useState(null)


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

        const newObject = {
            name: newName,
            number: newNumber
        }

        const person = persons.find(p => p.name === newName)
        const updatedPerson = { ...person, number: newNumber }

        if (persons.some(person => person.name === newName)) {

            window.confirm(`${newName} is already added to phonebook. Replace numbers?`)
            personService
                .update(updatedPerson.id, updatedPerson)
                .then(
                    setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson)),
                    setNewName(''),
                    setNewNumber(''),
                    setMessage(`${newName}'s number is replaced`),
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000))

                .catch(() => {
                    setMessage(null)
                    setErrorMessage(`${newName} has allready been removed`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                    setPersons(persons.filter(p => p.name !== newName))
                }
                )

        } else {

            personService
                .create(newObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                    setMessage(`${newName} is now in phonebook`)
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                })
        }
    }

    const removePerson = (id) => {

        const person = persons.find(p => p.id === id)
        window.confirm(`Delete ${person.name}?`)

        personService
            .remove(id)
            .then(
                setPersons(persons.filter(p => p.id !== id)),
                setMessage(`${person.name} is gone now`),
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
                // laukums filtra inputā nenotīrās
            )
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
        // laukums filtra inputā nenotīrās
    }



    return (
        <>
            <h1>Phonebook</h1>
            <Filter
                handleSearchName={handleSearchName} />
            <h2>Add New Contact</h2>
            <PersonForm
                addContact={addContact}
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange} />
            <Notification message={message} />
            <Error message={error} />
            <h2>Numbers</h2>
            <Persons
                persons={personsToShow}
                removePerson={removePerson} />
        </>
    )
}


export default App