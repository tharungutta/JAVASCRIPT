const list = document.getElementById("item-list");
const form = document.getElementById("item-form");
const input = document.getElementById("item-input");

const API_URL = "http://localhost:3000/items";

async function fetchItems() {
  const res = await fetch(API_URL);
  const items = await res.json();
  list.innerHTML = "";
  items.forEach(addItemToDOM);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newItem = { text: input.value };
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  });
  const data = await res.json();
  addItemToDOM(data.item);
  input.value = "";
});

function addItemToDOM(item) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span contenteditable="true" onblur="updateItem(${item.id}, this.innerText)">${item.text}</span>
    <button onclick="deleteItem(${item.id}, this)">Delete</button>
  `;
  list.appendChild(li);
}

async function updateItem(id, newText) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: newText }),
  });
}

async function deleteItem(id, btn) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  btn.parentElement.remove();
}

fetchItems();
