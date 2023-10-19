import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passport and indentity", quantity: 2, packed: false },
  { id: 2, description: "Back pack and foods", quantity: 1, packed: true },
  { id: 3, description: "Phone and Charger", quantity: 2, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: true, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={!item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button>❌</button>
      </span>
    </li>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X times of your list</em>
    </footer>
  );
}
