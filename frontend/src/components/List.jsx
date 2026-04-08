function List({ items, deleteItem, setEditItem }) {
  return (
    <div className="list">
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        items.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>

            <button onClick={() => setEditItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default List;