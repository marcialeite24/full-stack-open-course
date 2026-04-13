# Part 3 - Backend with Node.js and Express

The shift to server-side development. This part is about building the backend that the frontend apps in Part 2 were talking to — a REST API in Node.js with Express, backed by a MongoDB database.

## What's in here

### Phonebook API (`phonebook/`)

A REST API for the phonebook app built in Part 2. Exposes endpoints to list, add, update and delete contacts. Started with an in-memory data store, then migrated to MongoDB with Mongoose for persistence.

The frontend (`phonebook/frontend/`) is the Part 2 phonebook app served as static files directly from the Express server — a single deployment for both frontend and backend.

**Endpoints:**

- `GET /api/persons` — list all contacts
- `GET /api/persons/:id` — get a single contact
- `POST /api/persons` — add a contact
- `PUT /api/persons/:id` — update a contact's number
- `DELETE /api/persons/:id` — delete a contact
- `GET /info` — number of contacts and server time

## Key concepts

- Node.js HTTP module and then Express for routing
- REST API design and HTTP methods (GET, POST, PUT, DELETE)
- Request logging with morgan
- CORS middleware for cross-origin requests
- Environment variables with dotenv
- MongoDB + Mongoose for data persistence
- Input validation with Mongoose schema validators
- Centralised error handling middleware
- Serving a React build as static files from Express
- Deployment to a cloud platform

## Stack

- Node.js + Express
- MongoDB + Mongoose
- morgan, cors, dotenv
