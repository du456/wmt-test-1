import React from 'react';

function ItemList({ items, onDelete }) {
  if (items.length === 0) {
    return <p>No items yet. Add one above!</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item._id} className="item">
          <span className="item-name">{item.name}</span>
          <button
            className="delete-btn"
            onClick={() => onDelete(item._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;