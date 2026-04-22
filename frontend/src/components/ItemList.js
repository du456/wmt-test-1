import React from 'react';

function ItemList({ items, onDelete }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>📭</div>
        <p>No items yet. Add your first item above!</p>
      </div>
    );
  }

  return (
    <>
      <div className="stats-bar">
        <div className="stats-count">
          📊 Total Items: <span>{items.length}</span>
        </div>
        <div className="stats-count">
          📦 Categories: {
            new Set(items.map(i => i.category)).size
          }
        </div>
      </div>
      
      <div className="items-header">
        <h2>📋 Your Items</h2>
      </div>
      
      <div className="items-list">
        {items.map((item) => (
          <div key={item._id} className="item-card">
            <div className="item-header">
              <div className="item-title">
                <span className="item-name">{item.name}</span>
                <span className={`category-badge category-${item.category}`}>
                  {item.category}
                </span>
                <span className="quantity-badge">
                  📦 Qty: {item.quantity}
                </span>
              </div>
              <button 
                className="delete-btn"
                onClick={() => onDelete(item._id)}
              >
                🗑️ Delete
              </button>
            </div>
            
            <div className="item-description">
              {item.description}
            </div>
            
            <div className="item-footer">
              <div className="item-date">
                🕒 Added: {new Date(item.createdAt).toLocaleDateString('en-GB')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemList;