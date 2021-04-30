import React from 'react';
import './single-product.scss';
import AvailablityIndicator from '../availability-indicator/availablity-indicator';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

export default function SingleProduct({
	id,
	title,
	price,
	cover,
	availability,
	currency,
}) {
	const dispatch = useDispatch();
	return (
		<div className='card'>
			<div className='product-upper-bar-wrapper'>
			<img src={cover} alt='product' style={{ width: '100%' }} />
			<h4>{title}</h4>
			{price && (
				<p className='price'>
					{price.toFixed(2)} ({currency})
				</p>
			)}
			</div>
			<div className='product-bottom-bar-wrapper'>
				<AvailablityIndicator isProductAvailable={availability} />
				<button
					className={availability ? '' : 'disabled'}
					onClick={() =>
						availability ? dispatch(addToCart({ title, price, id, cover, currency })) : alert('produkt niedostępny')
					}
				>
					Dodaj do koszyka
				</button>
			</div>
		</div>
	);
}
