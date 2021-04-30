import { createSlice } from '@reduxjs/toolkit';
import Products from '../assets/items.json'
// import { createAsyncThunk } from '@reduxjs/toolkit';

// ** Usually data would come from some external API as I haven't been given any instructions
//  to do so therefore these are commented out left only for educational purposes and initialState starts with mocked data
// from the file **

// export const getProducts = createAsyncThunk(
// 	'products/getProducts',
// 	async () => {
// 		return fetch('url to some API')
// 		.then((res) => res.json())
// 	}
// )

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: Products,
	},

	// extraReducers:{
	// 	[getProducts.pending]: (state) => {
	// 		state.status = 'loading'
	// 	},
	// 	[getProducts.fulfilled]: (state, {payload}) => {
	// 		state.products = payload
	// 		state.status = 'success'
	// 	},
	// 	[getProducts.rejected]: (state) => {
	// 		state.status = 'failed'
	// 	},
	// }
});

export default productsSlice.reducer;
