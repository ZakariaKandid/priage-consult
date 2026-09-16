// ---------------------------------------------------------------------------
// CSI 3140 - Lab 4: Workshop and Event Registration System
// Node.js / Express REST API server
// ---------------------------------------------------------------------------

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ---------------------------------------------------------------------------
// In-memory data store, seeded from data/workshops.json at startup
// (A full database is not required for this laboratory.)
// ---------------------------------------------------------------------------
const dataPath = path.join(__dirname, "data", "workshops.json");
let workshops = JSON.parse(fs.readFileSync(dataPath, "utf8"));
let nextId = workshops.length + 1;

// ---------------------------------------------------------------------------
// Helper: find a workshop by id, or undefined if not found
// ---------------------------------------------------------------------------
function findWorkshop(id) {
  return workshops.find(function (w) {
    return w.id === id;
  });
}

// ---------------------------------------------------------------------------
// GET /api/status - simple health check endpoint
// ---------------------------------------------------------------------------
app.get("/api/status", function (req, res) {
  res.json({ message: "Lab 4 API is running" });
});

// ---------------------------------------------------------------------------
// GET /api/workshops - return the full list of workshops
// ---------------------------------------------------------------------------
app.get("/api/workshops", function (req, res) {
  res.json(workshops);
});

// ---------------------------------------------------------------------------
// GET /api/workshops/:id - return a single workshop, or 404 if not found
// ---------------------------------------------------------------------------
app.get("/api/workshops/:id", function (req, res) {
  const id = Number(req.params.id);
  const workshop = findWorkshop(id);

  if (!workshop) {
    return res.status(404).json({ error: "Workshop not found." });
  }

  res.json(workshop);
});

// ---------------------------------------------------------------------------
// POST /api/workshops - create a new workshop (validates required fields)
// ---------------------------------------------------------------------------
app.post("/api/workshops", function (req, res) {
  const { title, category, date, capacity } = req.body;

  if (!title || !category || !date || !capacity) {
    return res.status(400).json({
      error: "Title, category, date, and capacity are required."
    });
  }

  if (typeof capacity !== "number" || capacity <= 0) {
    return res.status(400).json({
      error: "Capacity must be a positive number."
    });
  }

  const newWorkshop = {
    id: nextId++,
    title,
    category,
    date,
    capacity,
    seatsRemaining: capacity
  };

  workshops.push(newWorkshop);
  res.status(201).json(newWorkshop);
});

// ---------------------------------------------------------------------------
// PUT /api/workshops/:id - update an existing workshop
// ---------------------------------------------------------------------------
app.put("/api/workshops/:id", function (req, res) {
  const id = Number(req.params.id);
  const workshop = findWorkshop(id);

  if (!workshop) {
    return res.status(404).json({ error: "Workshop not found." });
  }

  const { title, category, date, capacity } = req.body;

  if (!title || !category || !date || !capacity) {
    return res.status(400).json({
      error: "Title, category, date, and capacity are required."
    });
  }

  workshop.title = title;
  workshop.category = category;
  workshop.date = date;
  workshop.capacity = capacity;

  res.json(workshop);
});

// ---------------------------------------------------------------------------
// PATCH /api/workshops/:id/register - register one seat (decrements seats)
// ---------------------------------------------------------------------------
app.patch("/api/workshops/:id/register", function (req, res) {
  const id = Number(req.params.id);
  const workshop = findWorkshop(id);

  if (!workshop) {
    return res.status(404).json({ error: "Workshop not found." });
  }

  if (workshop.seatsRemaining <= 0) {
    return res.status(400).json({ error: "This workshop is full." });
  }

  workshop.seatsRemaining -= 1;
  res.json(workshop);
});

// ---------------------------------------------------------------------------
// DELETE /api/workshops/:id - remove a workshop
// ---------------------------------------------------------------------------
app.delete("/api/workshops/:id", function (req, res) {
  const id = Number(req.params.id);
  const index = workshops.findIndex(function (w) {
    return w.id === id;
  });

  if (index === -1) {
    return res.status(404).json({ error: "Workshop not found." });
  }

  const deleted = workshops.splice(index, 1)[0];
  res.json({ message: "Workshop deleted.", workshop: deleted });
});

// ---------------------------------------------------------------------------
// Fallback error handler - never leak raw internal errors to the client
// ---------------------------------------------------------------------------
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong on the server." });
});

app.listen(PORT, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});
