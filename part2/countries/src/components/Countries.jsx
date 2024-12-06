import WeatherDetails from "./WeatherDetails";

function Countries({ filter, filteredCountries, handleShow }) {

    return (
        <div>
            {filter ? ( 
                <>
                {filteredCountries.length > 10 ? (
                    <p>Too many matches, specify another filter</p>
                ) : filteredCountries.length > 1 ? (
                    filteredCountries.map((c) => (
                        <div key={c.cca3} style={{marginTop: 0.5 + 'em'}}>
                            <span>{c.name.common}</span>
                            <button onClick={() => handleShow(c.cca3)} style={{marginLeft: 0.5 + 'em'}}>Show</button>
                        </div>
                    ))
                ) : filteredCountries.length === 1 ? (
                    <div>
                        <h2>{filteredCountries[0].name.common}</h2>
                        <p>Capital: {filteredCountries[0].capital}</p>
                        <p>Area: {filteredCountries[0].area}</p>
                        <p>Languages:</p>
                        <ul>
                        {Object.values(filteredCountries[0].languages).map((lang, index) => (
                            <li key={index}>{lang}</li>
                        ))}
                        </ul>
                        <img src={filteredCountries[0].flags.png} alt={filteredCountries[0].flags.alt}/>
                        <WeatherDetails city={filteredCountries[0].capital} />
                    </div>
                ) : (
                    <p>No matches found</p>
                )}
            </>
            ) : null}
        </div>
    )
}

export default Countries; 