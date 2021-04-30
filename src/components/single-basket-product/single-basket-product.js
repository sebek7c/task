import React from 'react';
import './single-basket-product.scss';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { ReactComponent as Minus } from '../../assets/svg/minus.svg';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartReducer';

export default function SingleBasketProduct({
	cover,
	title,
	price,
	quantity,
	totalPrice,
	id,
	currency,
}) {
	const dispatch = useDispatch();
	return (
		<div className='single-basket-product'>
			<div className='single-basket-product-image'>
				<img
					src={cover}
					alt='product'
					style={{ width: '100%', maxWidth: '100px' }}
				/>
			</div>
			<div className='single-basket-product-detail'>
				<div className='product-info-wrapper'>
					<div className='product-title'>
						<span className='product-title-span'>{title}</span>
					</div>
					<div className='product-price'>
						<span>
							{price.toFixed(2)} ({currency})
						</span>
					</div>
				</div>
				<div className='plus-minus-container'>
					<Minus onClick={() => dispatch(removeFromCart({ id }))} />
					<span style={{ margin: '0 12px' }}>{quantity}</span>
					<Plus
						onClick={() => dispatch(addToCart({ title, price, id, cover }))}
					/>
				</div>
				<div className='product-total-price'>
					<span>Suma:</span>
					<span>
						{totalPrice.toFixed(2)} ({currency})
					</span>
				</div>
			</div>
		</div>
	);
}
