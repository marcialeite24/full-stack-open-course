# Countries

A country search app that fetches live data from a REST Countries API. Type a country name to filter results — if only one match is found, its details are shown automatically. For multiple matches, a list is shown with a button to expand any individual country.

Each country detail view also fetches current weather data for the capital city from the OpenWeatherMap API.

## Features

- Real-time search filtering against all countries
- Auto-expand when search narrows down to a single result
- Show button to manually expand any country from the list
- Weather info for the capital (temperature, wind, weather icon)

## Stack

- React + Vite
- axios
- REST Countries API
- OpenWeatherMap API

## Running locally

Create a `.env` file with your OpenWeatherMap API key:

```
VITE_SOME_KEY=your_api_key_here
```

Then:

```bash
npm run dev
```
