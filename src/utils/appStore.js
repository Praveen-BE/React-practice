import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { randomApi } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const appStore = configureStore({
    reducer: {
        [randomApi.reducerPath]: randomApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(randomApi.middleware),
});

setupListeners(appStore.dispatch);
// export default appStore;