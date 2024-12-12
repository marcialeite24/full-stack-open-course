const PersonForm = ({handleSubmit, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter name" value={newName} onChange={handleNameChange}></input>
            <label htmlFor="number">Number:</label>
            <input type="text" id="number" placeholder="Enter phone number" value={newNumber} onChange={handleNumberChange}></input>
            <button className="btn-add" type="submit">Add</button>
        </form>
    )
}

export default PersonForm;