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
      alert('Please fill in all required fields');
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
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label>📝 Item Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter item name..."
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>🔢 Quantity *</label>
          <input
            type="number"
            name="quantity"
            placeholder="0"
            value={formData.quantity}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        
        <div className="form-group full-width">
          <label>📄 Description *</label>
          <textarea
            name="description"
            placeholder="Enter item description..."
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>🏷️ Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Electronics">📱 Electronics</option>
            <option value="Furniture">🪑 Furniture</option>
            <option value="Clothing">👕 Clothing</option>
            <option value="Other">📦 Other</option>
          </select>
        </div>
      </div>
      
      <button type="submit" className="submit-btn">
        ✨ Add Item
      </button>
    </form>
  );
}

export default AddItem;