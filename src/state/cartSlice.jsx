import { createSlice } from "@reduxjs/toolkit";

//-------------------function to Save cart state to local storage---------------
const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error("Failed to save cart to local storage", err);
  }
};

//-------------------function to load cart state from local storage---------------
const loadCartFromLoacalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) return { items: {} };
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Failed to load cart from local storage", err);
    return { items: [] };
  }
};

//-------------------------------function to clear what is in the cart----------------
const clearCartFromLocalStorage = () => {
  try {
    localStorage.removeItem("cart");
  } catch (err) {
    console.error("Failed to clear cart from local storage", err);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLoacalStorage(),
  reducers: {
    //-------------------------------reducer that add items from product list to the cart----------------

    addItem: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { ...action.payload, quantity: 1 };
      }
      saveCartToLocalStorage(state);
    },
    //-------------------------------reducer that clear the whole items from the cart----------------
    removeItem: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1;
        } else {
          delete state.items[id];
        }
        saveCartToLocalStorage(state);
      }
    },
    //-------------------------------reducer that Remove items from the cart----------------
    clearCart: (state) => {
      state.items = {};
      clearCartFromLocalStorage();
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
