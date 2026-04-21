import React, { useState } from 'react';

function AddItem({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItem;