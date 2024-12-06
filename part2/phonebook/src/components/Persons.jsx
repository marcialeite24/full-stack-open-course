
const Persons = ({filteredPersons, handleDelete}) => {
    return(
        <>
            {filteredPersons.map((person, index) => (
                <div key={index}>
                <span>{person.name} {person.number} </span>
                <button onClick={() => handleDelete(person.id, person.name)}>Delete</button>
                </div>                
            ))}
        </>
    )
}

export default Persons;