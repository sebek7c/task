import React from 'react';
import { useSelector } from 'react-redux';
import SingleBasketProduct from '../single-basket-product/single-basket-product';
import './basket-dropdown-content.scss';

export default function BasketDropdownContent() {
	const { basketProducts } = useSelector((state) => state.basketProducts);

	return (
		<div className='basket-dropdown-content'>
			{basketProducts.map((product) => (
				<SingleBasketProduct {...product} />
			))}
		</div>
	);
}
