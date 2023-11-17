import { ShoppingProvider } from './ShoppingContext';
import ShoppingList from './ShoppingList';

const App = () => {
  return (
    <ShoppingProvider>
      <div>
        <h1>Shopping List App</h1>
        <ShoppingList />
      </div>
    </ShoppingProvider>
  );
};

export default App;
