import React, { useState } from 'react';

function AddItem({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: 0,
    category: 'Other'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'quantity' ? parseInt(value) || 0 : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.description.trim()) {
      alert('Please fill in name and description');
      return;
    }
    onAdd(formData);
    setFormData({
      name: '',
      description: '',
      quantity: 0,
      category: 'Other'
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        type="text"
        name="name"
        placeholder="Item name..."
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <textarea
        name="description"
        placeholder="Description..."
        value={formData.description}
        onChange={handleChange}
        rows="3"
        style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ddd' }}
        required
      />
      
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        min="0"
        style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ddd' }}
        required
      />
      
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ddd' }}
      >
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Clothing">Clothing</option>
        <option value="Other">Other</option>
      </select>
      
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItem;