export const getBasketTotalPrice = (basketProducts) => {
	return basketProducts.length
		? basketProducts
				.map((product) => product.totalPrice)
				.reduce((productPrice, acc) => (acc += productPrice))
		: 0;
};

export const getBasketTotalProducts = (basketProducts) => {
	let result = basketProducts.reduce((r, d) => r + d.quantity, 0);
	return result;
};
