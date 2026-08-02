import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    addToCart: (state, action) => {

      const item = state.items.find(
        (plant) => plant.id === action.payload.id
      );

      if (item) {

        item.quantity += 1;

      } else {

        state.items.push({
          ...action.payload,
          quantity: 1
        });

      }

    },

    increaseQuantity: (state, action) => {

      const item = state.items.find(
        (plant) => plant.id === action.payload
      );

      if (item) {
        item.quantity++;
      }

    },

    decreaseQuantity: (state, action) => {

      const item = state.items.find(
        (plant) => plant.id === action.payload
      );

      if (item) {

        if (item.quantity > 1) {

          item.quantity--;

        } else {

          state.items = state.items.filter(
            (plant) => plant.id !== action.payload
          );

        }

      }

    },

    removeItem: (state, action) => {

      state.items = state.items.filter(
        (plant) => plant.id !== action.payload
      );

    },

    clearCart: (state) => {

      state.items = [];

    }

  }

});

export const {

  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart

} = cartSlice.actions;

export default cartSlice.reducer;