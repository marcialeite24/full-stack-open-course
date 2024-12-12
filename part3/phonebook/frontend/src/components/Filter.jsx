
const Filter = ({filter, handleFilter}) => {
    return (
        <div className="card">
            <label htmlFor="filter">Filter shown with:</label>
            <input type="text" id="filter" placeholder="Type to filter..." value={filter} onChange={handleFilter}></input>
        </div>
    )
}

export default Filter;