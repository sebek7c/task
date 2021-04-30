import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'basketProducts',
	initialState: {
		basketProducts: [],
		status: null,
	},
	reducers: {
		addToCart: (state, action) => {
			if (
				state.basketProducts.length &&
				state.basketProducts.find((item) => item.id === action.payload.id)
			) {
				state.basketProducts = state.basketProducts.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								quantity: item.quantity + 1,
								totalPrice: (item.quantity + 1) * item.price,
						  }
						: item
				);
				return;
			}
			state.basketProducts.push({
				...action.payload,
				quantity: 1,
				totalPrice: action.payload.price,
			});
		},
		removeFromCart: (state, action) => {
			const index = state.basketProducts.findIndex(
				(item) => item.id === action.payload.id
			);
			if (index !== -1 && state.basketProducts[index].quantity > 1) {
				state.basketProducts = state.basketProducts.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								quantity: item.quantity - 1,
								totalPrice: (item.quantity - 1) * item.price,
						  }
						: item
				);
				return;
			}
			state.basketProducts.splice(index, 1);
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
