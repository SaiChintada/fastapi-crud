import { useState, useEffect } from "react";

function Form({ addItem, updateItem, editItem }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setDescription(editItem.description);
    }
  }, [editItem]);

  const handleSubmit = () => {
    if (!name || !description) return;

    if (editItem) {
      updateItem(editItem.id, { name, description });
    } else {
      addItem({ name, description });
    }

    setName("");
    setDescription("");
  };

  return (
    <div className="form">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editItem ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default Form;