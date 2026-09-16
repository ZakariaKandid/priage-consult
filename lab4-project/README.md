# Lab 4 - Workshop and Event Registration System

CSI 3140 - WWW Structures, Techniques and Standards - Spring/Summer 2026

## Project Topic

A small client-server web application for managing workshop/event registrations.
Users can view available workshops, register for a seat, and add new workshops.

## Requirements

- Node.js (v16 or later recommended)

## Install

```bash
cd lab4-project
npm install
```

## Run

```bash
npm start
```

or

```bash
node server.js
```

The server starts on `http://localhost:3000`.

## Open the client

Open a browser and go to `http://localhost:3000`. The Express server serves
the front-end files from the `public/` folder automatically.

## Test the API

Any of the following can be used: Postman, Thunder Client, curl, or the
browser dev tools. Example curl commands:

```bash
curl http://localhost:3000/api/workshops
curl http://localhost:3000/api/workshops/1
curl -X POST http://localhost:3000/api/workshops -H "Content-Type: application/json" -d "{\"title\":\"Test\",\"category\":\"Workshop\",\"date\":\"2026-08-01\",\"capacity\":10}"
curl -X PATCH http://localhost:3000/api/workshops/1/register
curl http://localhost:3000/api/workshops/999
```

## Project Structure

```
lab4-project/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── data/
│   └── workshops.json
├── api-docs/
│   └── openapi.yaml
├── screenshots/
├── server.js
├── package.json
├── README.md
└── report.pdf
```

## API Endpoints

| Method | Endpoint                        | Purpose                          |
|--------|----------------------------------|-----------------------------------|
| GET    | /api/status                     | Health check                      |
| GET    | /api/workshops                  | Return all workshops              |
| GET    | /api/workshops/:id               | Return one workshop               |
| POST   | /api/workshops                  | Create a new workshop             |
| PUT    | /api/workshops/:id               | Update a workshop                 |
| PATCH  | /api/workshops/:id/register      | Register a seat for a workshop    |
| DELETE | /api/workshops/:id               | Delete a workshop                 |
