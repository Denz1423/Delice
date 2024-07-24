import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "../pages/menu/MenuSlice";
import { cartSlice } from "../components/cart/CartSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        cart: cartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch