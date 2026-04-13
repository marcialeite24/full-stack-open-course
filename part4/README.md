# Part 4 - Blog List API

A RESTful backend for managing a blog list, built with Node.js, Express and MongoDB. This part focuses on restructuring the backend into a maintainable architecture, adding a full test suite, and implementing user authentication.

## What I built

### Modular backend structure

Refactored the backend away from a single-file approach into a proper project structure:

- `controllers/` — route handlers using Express Router
- `models/` — Mongoose schemas for blogs and users
- `utils/` — configuration, logger and middleware separated into their own modules
- `app.js` — sets up the Express app
- `index.js` — starts the server

This separation makes the app independently testable without actually spinning up an HTTP server.

### Testing

Added a full test suite using Node's built-in `node:test` module and `supertest` for HTTP-level integration testing. Tests run against a dedicated test database (controlled via environment variables) so the development and production data is never touched.

Key testing patterns used:

- `beforeEach` hooks to reset database state between tests
- Helper functions to query the database directly and compare against API responses
- `describe` blocks to group related test cases
- Async/await throughout to keep test code readable

### User management

Added a user system with:

- A `User` model linked to blogs via MongoDB references
- Password hashing with `bcrypt` — plain-text passwords are never stored
- A `POST /api/users` endpoint for registration, with validation for unique usernames
- `populate()` to resolve user-blog references when returning data from the API

### Token authentication

Implemented login and protected routes using JWT:

- `POST /api/login` validates credentials and returns a signed JWT
- Tokens are signed with a secret and carry the user's id and username
- Blog creation requires a valid Bearer token in the `Authorization` header
- Token expiration is configured for security

## Stack

- Node.js + Express 5
- MongoDB + Mongoose
- bcrypt
- jsonwebtoken
- supertest + node:test
