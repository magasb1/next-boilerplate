import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Actions
        addToCart: (state, action) => {},
        removeFromCart: (state, action) => {},
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - this is how we pull information fom the Global store slice
export const selectItems = (state) => state.cart.items

export default cartSlice.reducer