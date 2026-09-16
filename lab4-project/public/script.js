// ---------------------------------------------------------------------------
// Front-end client logic: uses fetch() to talk to the REST API
// ---------------------------------------------------------------------------

const listEl = document.querySelector("#workshop-list");
const formEl = document.querySelector("#create-form");
const messageEl = document.querySelector("#form-message");

// Load all workshops from the API and render them dynamically
async function loadWorkshops() {
  const response = await fetch("/api/workshops");
  const workshops = await response.json();

  listEl.innerHTML = "";

  workshops.forEach(function (workshop) {
    const item = document.createElement("li");

    const label = document.createElement("span");
    label.textContent = `${workshop.title} (${workshop.category}) - ${workshop.date} - ${workshop.seatsRemaining}/${workshop.capacity} seats left`;

    const button = document.createElement("button");
    button.textContent = "Register";
    button.disabled = workshop.seatsRemaining <= 0;
    button.addEventListener("click", function () {
      registerForWorkshop(workshop.id);
    });

    item.appendChild(label);
    item.appendChild(button);
    listEl.appendChild(item);
  });
}

// Register (reserve a seat) for a workshop - dynamic update based on response
async function registerForWorkshop(id) {
  const response = await fetch(`/api/workshops/${id}/register`, {
    method: "PATCH"
  });
  const data = await response.json();

  if (!response.ok) {
    messageEl.textContent = data.error;
    messageEl.className = "error";
    return;
  }

  messageEl.textContent = `Registered! Seats remaining: ${data.seatsRemaining}`;
  messageEl.className = "success";
  loadWorkshops();
}

// Submit the "create workshop" form using POST, handle success/error cases
formEl.addEventListener("submit", async function (event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const category = document.querySelector("#category").value;
  const date = document.querySelector("#date").value;
  const capacity = Number(document.querySelector("#capacity").value);

  try {
    const response = await fetch("/api/workshops", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, category, date, capacity })
    });

    const data = await response.json();

    if (!response.ok) {
      // Visible validation/error message (e.g. missing fields)
      messageEl.textContent = data.error;
      messageEl.className = "error";
      return;
    }

    messageEl.textContent = `Workshop "${data.title}" created successfully.`;
    messageEl.className = "success";
    formEl.reset();
    loadWorkshops();
  } catch (err) {
    messageEl.textContent = "Could not reach the server. Please try again.";
    messageEl.className = "error";
  }
});

loadWorkshops();
