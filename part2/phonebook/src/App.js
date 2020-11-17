import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Error from './components/Error'
import personService from './services/persons'




const App = () => {
    const bodyStyle = {
        fontFamily: `"Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sansSerif`
    }

    const h1Style = {
        color: `#0c1616`,
        textTransform: 'uppercase',
        textAlign: 'center'
    }

    const h2Style = {
        color: `#021818`,
        textTransform: 'uppercase'
    }

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
            .then(initialData => {
                setPersons(initialData)
            })
        // .catch(error => {
        //     setErrorMessage(`${error.response.data.error}`)
        //     setTimeout(() => {
        //         setErrorMessage(null)
        //     }, 5000)
        // })
    }, [])



    const addContact = (e) => {
        e.preventDefault()

        const newObject = {
            name: newName,
            number: newNumber
        }

        const registeredPerson = persons.some(person => person.name === newName)
        // persons.find(p => p.name === newName)
        // persons.some(person => person.name === newName)
        if (registeredPerson) {
            const updateNumber = window.confirm(`${newName} is already in phonebook. Replace numbers?`)

            if (updateNumber) {
                // const person = persons.find(p => p.name === newName)
                const newPerson = { ...registeredPerson, number: newNumber }
                personService
                    .update(registeredPerson.id, newPerson)
                    .then((updatedPerson) => {
                        setPersons(persons.map(p => p.id !== registeredPerson.id ? p : updatedPerson))
                        setNewName('')
                        setNewNumber('')
                        setMessage(`${newName}'s number is replaced`)
                        setTimeout(() => {
                            setMessage(null)
                        }, 5000)
                    }).catch((error) => {
                        setNewName('')
                        setNewNumber('')
                        // setErrorMessage(`${error.response.data.error}`)
                        setErrorMessage(`${newName} has allready been removed`)
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                        setPersons(persons.filter(p => p.name !== newName))
                        console.log(error.response.data)
                    })
            }
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
                .catch((error) => {
                    setNewName('')
                    setNewNumber('')
                    // setErrorMessage(`${newName} has allready been removed`)
                    setErrorMessage(`${error.response.data.error}`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                    setPersons(persons.filter(p => p.name !== newName))
                    // console.log(error.response.data)
                })
        }
    }


    const removePerson = (id) => {

        const person = persons.find(p => p.id === id)
        const deleteConfiramtion = window.confirm(`Delete ${person.name}?`)
        setSearchName('')
        if (deleteConfiramtion) {
            personService
                .remove(id)
                .then(() => {
                    setPersons(persons.filter(p => p.id !== id))
                    setMessage(`${person.name} is gone now`)
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
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



    return (
        <div style={bodyStyle}>
            <h1 style={h1Style}>Phonebook</h1>
            <Filter
                handleSearchName={handleSearchName} />
            <h2 style={h2Style}>Add New Contact</h2>
            <PersonForm
                addContact={addContact}
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange} />
            <Notification message={message} />
            <Error message={error} />
            {/* bet tad šādi man jāraksta katrā h2  */}
            <h2 style={h2Style}>Numbers</h2>
            <Persons
                persons={personsToShow}
                removePerson={removePerson} />
        </div>
    )
}


export default App