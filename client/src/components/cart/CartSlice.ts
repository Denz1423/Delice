import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../models/Cart";

interface CartState {
    cart: Cart | null;
    status: string
}

const getInitialCartState = (): CartState => {
    let initialCart = null;
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage != null) {
        initialCart = JSON.parse(cartFromStorage);
    }
    return {
        cart: initialCart,
        status: 'idle'
    };
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: getInitialCartState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload.product;
        },
        clearCart: (state) => {
            state.cart = null;
        },
        addProductToCart: (state, action) => {
            const { product } = action.payload;
            if (!state.cart) {
                state.cart = { products: [{ ...product, quantity: 1 }] };
            } else {
                const existingProduct = state.cart.products.find((item) => item.id === product.id);
                existingProduct ? existingProduct.quantity++ : state.cart.products.push({ ...product, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    }
});

export const { setCart, clearCart, addProductToCart } = cartSlice.actions;