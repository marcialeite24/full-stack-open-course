import { useState, useEffect } from "react";
import axios from "axios";

function WeatherDetails({ city }) {
    const api_key = import.meta.env.VITE_SOME_KEY;
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const [weather, setWeather] = useState([]);
    
    useEffect(() => {
        const fetchWeather = async () => {
        try {
            const api_key = '157f5e8aae3ef0ad38260f998f7e1a38';
            const response = await axios.get(`${baseUrl}?q=${city}&appid=${api_key}`);
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
        };

        fetchWeather();
    }, [city, api_key]);

    console.log(weather);
    if (!weather || !weather.main || !weather.weather) {
        return null;
    }

    return (
        <div>
            <h3>Weather in {city}</h3>
            <p>Temperature {((weather.main.temp) - 273.15).toFixed(2)} Celcius</p>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
            />
            <p>Wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default WeatherDetails; 