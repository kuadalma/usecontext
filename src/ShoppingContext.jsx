import { createContext, useContext, useState, useEffect } from 'react';

const ShoppingContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingProvider = ({ children }) => {
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

export const useShopping = () => {
  return useContext(ShoppingContext);
};