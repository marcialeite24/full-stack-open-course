# Part 2 - Communicating with a Server

This part moves beyond static UIs. The apps here fetch real data from external sources, send data back, and react to changes — making them feel like actual products rather than demos.

## Projects

### [Course Info](courseinfo/)

Extended version of the Part 1 course info app, now rendering multiple courses from a data structure using `.map()`.

### [Phonebook](phonebook/)

A full CRUD phonebook connected to a local JSON server via axios. Supports adding, updating and deleting contacts, with user feedback for success and error states.

### [Countries](countries/)

A country search tool that fetches live data from a REST Countries API and shows weather details for a selected country using the OpenWeatherMap API.

## Key concepts

- Rendering lists with `.map()` and `key` props
- Controlled form inputs
- `useEffect` for side effects and data fetching
- axios for HTTP requests (GET, POST, PUT, DELETE)
- Handling async errors and showing user feedback
- Working with third-party REST APIs
