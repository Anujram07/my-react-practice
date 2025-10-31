import { createContext, useEffect, useReducer } from "react";

const Context = createContext();
export default Context;

const ContextP = ({ children }) => {
  const initialState = { apiData: [], cart: [] };

  function reducer(state, action) {
    switch (action.type) {
      case "FETCH_DATA":
        return { ...state, apiData: action.payload };

      case "ADD_TO_CART":
        if (state.cart.some((item) => item.id === action.payload.id)) {
          alert(`${action.payload.name} is already in cart`);
          return state;
        }
        return { ...state, cart: [...state.cart, action.payload] };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_DATA", payload: data.recipes }));
  }, []);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export { ContextP };
