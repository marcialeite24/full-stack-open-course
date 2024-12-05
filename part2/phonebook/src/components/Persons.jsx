
const Persons = ({filteredPersons, handleDelete}) => {
    return(
        <>
            {filteredPersons.map((person, index) => (
                <div key={index}>
                <p>{person.name} {person.number}</p>
                <button onClick={() => handleDelete(person.id, person.name)}>Delete</button>
                </div>                
            ))}
        </>
    )
}

export default Persons;