import { useState, useEffect } from 'react';
import axios from "axios";
import Countries from './components/Countries';

function App() {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries';

  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/all`);
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setFilter(searchValue);
    
    if (searchValue) {
      const result = countries.filter((c) =>
        c.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCountries(result);
    } else {
      setFilteredCountries([]);
    }
  };

  const handleShow = (id) => {
    const result = countries.filter((c) =>
    c.cca3.includes(id)
    );
    setFilteredCountries(result)
  };

  return (
    <>
      <div style={{marginBottom: 2 + 'em'}}>
        <label>Find Countries: </label>
        <input value={filter} onChange={handleSearch}/>
      </div>      
      <Countries filter={filter} filteredCountries={filteredCountries} handleShow={handleShow} />
    </>
  )
}

export default App;
