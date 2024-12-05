import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import services from './services';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();    
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if(persons.find(person => person.name == newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name == newName);
        services
          .updatePerson(person.id, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(p => (p.id === person.id ? updatedPerson : p)));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => {
            alert('Failed to update person. Please try again.');
            console.error(error);
          });
      }    
    } else {
      services
        .addPerson(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          alert('Failed to add person. Please try again.');
          console.error(error);
        });
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleDelete = (id, name) => {
    console.log(name, id);
    if(window.confirm(`Delete ${name}?`)) {
      services.deletePerson(id);  
      setPersons(persons.filter(person => person.id !== id));
    } 
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    services
      .getAll()
      .then(response => { 
        setPersons(response);
      });    
  }, []);

 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>Add a new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} /> 

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />  
    </div>
  )
}

export default App;