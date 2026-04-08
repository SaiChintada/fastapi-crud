import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const API = "https://fastapi-crud-3deh.onrender.com/items/";

function App() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // FETCH ITEMS
  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ADD ITEM
  const addItem = async (item) => {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    fetchItems();
  };

  // UPDATE ITEM
  const updateItem = async (id, item) => {
    await fetch(API + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    setEditItem(null);
    fetchItems();
  };

  // DELETE ITEM
  const deleteItem = async (id) => {
    await fetch(API + id, {
      method: "DELETE",
    });
    fetchItems();
  };

  // SEARCH FILTER
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>FastAPI React CRUD</h1>
    

      {/* SEARCH */}
      <input
        className="search"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* COUNT */}
      <p className="count">Total Items: {filteredItems.length}</p>

      {/* FORM */}
      <Form
        addItem={addItem}
        updateItem={updateItem}
        editItem={editItem}
      />

      {/* LIST OR LOADING */}
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <List
          items={filteredItems}
          deleteItem={deleteItem}
          setEditItem={setEditItem}
        />
      )}
    </div>
  );
}

export default App;