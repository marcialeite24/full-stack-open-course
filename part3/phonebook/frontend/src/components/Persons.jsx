
const Persons = ({filteredPersons, handleDelete}) => {
    return(
        <>
            {filteredPersons.map((person, index) => (
                <ul key={index}>
                    <li>
                        {person.name} {person.number} 
                        <button onClick={() => handleDelete(person.id, person.name)} className="btn-delete">Delete</button>
                    </li>
                </ul>                
            ))}
        </>
    )
}

export default Persons;