import React, { useContext } from 'react';
import Context from './context';

const HomeChild = () => {
  const { state } = useContext(Context);

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h2>🍔 Total Recipes: {state.apiData.length}</h2>
      <h3>🛒 Items in Cart: {state.cart.length}</h3>

      <ul>
        {state.cart.length > 0
          ? state.cart.map((item) => <li key={item.id}>{item.name}</li>)
          : <li>No items in cart</li>
        }
      </ul>
    </div>
  );
};

export default HomeChild;
