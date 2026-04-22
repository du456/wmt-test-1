import React from 'react';

function ItemList({ items, onDelete }) {
  if (items.length === 0) {
    return <p>No items yet. Add one above!</p>;
  }

  // Helper function to get category badge color
  const getCategoryColor = (category) => {
    const colors = {
      Electronics: '#4CAF50',
      Furniture: '#FF9800',
      Clothing: '#2196F3',
      Other: '#9E9E9E'
    };
    return colors[category] || '#9E9E9E';
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item._id} className="item" style={{
          background: '#f8f9fa',
          padding: '15px',
          marginBottom: '10px',
          borderRadius: '8px',
          borderLeft: `4px solid ${getCategoryColor(item.category)}`
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <strong style={{ fontSize: '18px' }}>{item.name}</strong>
                <span style={{
                  background: getCategoryColor(item.category),
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}>
                  {item.category}
                </span>
                <span style={{
                  background: '#e9ecef',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}>
                  Qty: {item.quantity}
                </span>
              </div>
              <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>
                {item.description}
              </p>
              <small style={{ color: '#999', fontSize: '11px' }}>
                Added: {new Date(item.createdAt).toLocaleDateString()}
              </small>
            </div>
            <button
              className="delete-btn"
              onClick={() => onDelete(item._id)}
              style={{
                background: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '5px 15px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;