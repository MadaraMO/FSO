import React, { useState } from 'react'

const Persons = ({ persons }) => (
    <>
    <ul>
        {persons.map((person) =>
           <li key={person.id}>{person.name}</li>  
        )}
       
    </ul>
    </>
)  

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas',
        id: 0
    }
    ])
    const [newName, setNewName] = useState('Aloha, mermaid...')

    const addName = (e) => {
        e.preventDefault()
        const nameObject = {
            content: newName,
            id: persons.length + 1,
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
        console.log(persons.name)
    }

    const handleNameChange = (e) => {
        console.log(e.target.value)
        setNewName(e.target.value)
    }



    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input
                        value={newName}
                        onChange={handleNameChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        
            <h2>Numbers</h2>
            <Persons persons={persons}/>
      
            <div>debug: {newName}</div>
           
        </div>
    )
}


export default App