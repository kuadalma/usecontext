import { useState } from 'react';
import { useShopping } from './ShoppingContext';

const ShoppingList = () => {
  const { shoppingList, setShoppingList } = useShopping();
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setShoppingList((prevList) => [...prevList, { id: Date.now(), name: newItem }]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (itemId) => {
    setShoppingList((prevList) => prevList.filter((item) => item.id !== itemId));
  };

  const handleEditItem = (itemId, newName) => {
    if (newName.trim() !== '') {
      setShoppingList((prevList) =>
        prevList.map((item) =>
          item.id === itemId ? { ...item, name: newName } : item
        )
      );
    }
  };

  return (
    <div>
      <ul>
        {shoppingList.map((item) => (
          <li key={item.id}>
            <span onClick={() => handleEditItem(item.id, prompt('Edit item', item.name))}>
              {item.name}
            </span>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default ShoppingList;
