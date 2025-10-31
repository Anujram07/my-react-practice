import React, { useContext, useState } from "react";
import Context from "./context";
import "./App.css";

const Home = () => {
  const { state, dispatch } = useContext(Context);
  const [showCart, setShowCart] = useState(false);

  const itemsToDisplay = showCart ? state.cart : state.apiData;

  // Delete recipe (only from display)
  const del = (id) => {
    const filtered = state.apiData.filter((a) => a.id !== id);
    dispatch({ type: "UPDATE_API", payload: filtered });
  };

  // Sort ascending by rating
  const ascending = () => {
    const sorted = [...itemsToDisplay].sort((a, b) => a.rating - b.rating);
    dispatch({ type: "UPDATE_API", payload: sorted });
  };

  // Sort descending by rating
  const descending = () => {
    const sorted = [...itemsToDisplay].sort((a, b) => b.rating - a.rating);
    dispatch({ type: "UPDATE_API", payload: sorted });
  };

  // Filter by meal type
  const filterMeal = (type) => {
    const filtered = state.allData.filter((a) => a.mealType.includes(type));
    dispatch({ type: "UPDATE_API", payload: filtered });
  };

  // Reset
  const reset = () => {
    dispatch({ type: "UPDATE_API", payload: state.allData });
    setShowCart(false);
  };

  // Add to cart
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    alert(`${item.name} added to cart!`);
  };

  // Remove from cart
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <h1>🍽️ Anuj da Dhaba</h1>
        <nav>
          <button onClick={reset}>All</button>
          <button onClick={() => filterMeal("Breakfast")}>Breakfast</button>
          <button onClick={() => filterMeal("Lunch")}>Lunch</button>
          <button onClick={() => filterMeal("Dinner")}>Dinner</button>
          <button onClick={ascending}>Sort ↑</button>
          <button onClick={descending}>Sort ↓</button>
          <button onClick={() => setShowCart(true)}>My Cart ({state.cart.length})</button>
        </nav>
      </header>

      {/* Recipe Cards */}
      <div className="grid">
        {itemsToDisplay.length > 0 ? (
          itemsToDisplay.map((a) => (
            <div key={a.id} className="card">
              <img src={a.image} alt={a.name} />
              <h3>{a.name}</h3>
              <p>⭐ Rating: {a.rating}</p>
              <p className="type">{a.mealType.join(", ")}</p>

              <div className="card-buttons">
                {showCart ? (
                  <button onClick={() => removeFromCart(a.id)}>Remove</button>
                ) : (
                  <>
                    <button onClick={() => del(a.id)}>Delete</button>
                    <button onClick={() => addToCart(a)}>Add to Cart</button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
