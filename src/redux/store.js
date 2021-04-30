import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsReducer'
import cartReducer from './cartReducer'

export default configureStore({
    reducer: {
        products: productsReducer,
        basketProducts: cartReducer,
    }
});

