# Phonebook

A phonebook app with full CRUD functionality — add contacts, update existing numbers, delete entries, and filter the list in real time.

Connected to a backend via axios, with all data operations going through a dedicated services module to keep the component logic clean. Success and error messages are shown to the user and dismissed automatically after a few seconds.

## Features

- Add a new contact with name and number
- If the name already exists, prompt the user to update the number
- Delete a contact with confirmation
- Filter contacts by name in real time
- Success and error notification banners

## Stack

- React + Vite
- axios
- JSON Server (dev backend)
