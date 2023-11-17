import { createContext, useContext, useState, useEffect } from 'react';

const ShoppingContext = createContext();

// eslint-disable-next-line react/prop-types
const ShoppingProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState(() => {
    const storedList = localStorage.getItem('shoppingList');
    return storedList ? JSON.parse(storedList) : [];
  });

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);

  return (
    <ShoppingContext.Provider value={{ shoppingList, setShoppingList }}>
      {children}
    </ShoppingContext.Provider>
  );
};

const useShopping = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShopping must be used within a ShoppingProvider');
  }
  return context;
};

export { ShoppingProvider, useShopping };
