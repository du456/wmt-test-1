import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

const API_URL = process.env.REACT_APP_API_URL || 'https://wmt-test-1-production.up.railway.app/api/items';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL);
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      setLoading(false);
    }
  };

  const addItem = async (itemData) => {
    try {
      const response = await axios.post(API_URL, itemData);
      setItems([response.data, ...items]);
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item');
    }
  };

  const deleteItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setItems(items.filter(item => item._id !== id));
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item');
      }
    }
  };

  return (
    <div className="container">
      <div className="app-header">
        <h1>📦 Inventory Manager</h1>
        <p>Manage your items efficiently</p>
      </div>
      
      <div className="main-content">
        <div className="form-section">
          <h2>➕ Add New Item</h2>
          <AddItem onAdd={addItem} />
        </div>
        
        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading items...</p>
          </div>
        ) : (
          <ItemList items={items} onDelete={deleteItem} />
        )}
      </div>
    </div>
  );
}

export default App;