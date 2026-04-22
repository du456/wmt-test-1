import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

// Use environment variable or localhost for development
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5030/api/items';

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
    try {
      await axios.delete(`${API_URL}/${id}`);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item');
    }
  };

  return (
    <div className="container">
      <h1>📦 Item Manager</h1>
      <AddItem onAdd={addItem} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemList items={items} onDelete={deleteItem} />
      )}
    </div>
  );
}

export default App;