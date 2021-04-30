import React, { useState } from 'react';
import ListProducts from '../components/list-products/list-products';
// import { useEffect } from 'react';
// import {  useDispatch } from 'react-redux';
// import { getProducts } from '../redux/productsReducer';
import {  useSelector } from 'react-redux';
import { ReactComponent as Basket } from '../assets/svg/Basket.svg';
import { ReactComponent as EmptyBasket } from '../assets/svg/EmptyBasket.svg';
import { ReactComponent as CloseIcon } from '../assets/svg/CloseIcon.svg';
import BasketDropdownContent from '../components/basket-dropdown-content/basket-dropdown-content';
import { getBasketTotalProducts } from '../utils/utils'
import { getBasketTotalPrice } from '../utils/utils'
import './shop-page.scss';

export default function ShopPage() {
	
	const { products } = useSelector((state) => state.products);
	const { basketProducts } = useSelector((state) => state.basketProducts);
	const [basketOpen, setBasketOpen] = useState(false);

	// ** Usually data would come from some external API as I haven't been given any instructions
	//  to do so therefore these are commented out left only for educational purposes and initialState starts with mocked data
	// from the file **

	// useEffect(() => {
	// 	dispatch(getProducts());
	// }, [dispatch]);

	return (
		<section className="shop-page-container">
			<section className='basket-section'>
				<div className='basket'>
					<Basket onClick={() => setBasketOpen(!basketOpen)} />
					<span className='badge'>{getBasketTotalProducts(basketProducts)}</span>
					<div className={`basket-dropdown ${basketOpen ? 'visible' : ''}`}>
						<div className='close-icon'>
							<CloseIcon onClick={() => setBasketOpen(!basketOpen)} />
						</div>
						{basketProducts.length ? (
							<div className='basket-total'>
								<span>Suma w koszyku:</span>
								<span>
									{getBasketTotalPrice(basketProducts).toFixed(2)} (
									{basketProducts[0].currency})
								</span>
							</div>
						) : (
							<div className='empty-basket'>
								<span>Twój koszyk jest pusty</span>
								<EmptyBasket />
							</div>
						)}
						<BasketDropdownContent />
					</div>
				</div>
			</section>
			<section className='products-section'>
				{products.map((product) => (
					<ListProducts key={product.id} {...product} />
				))}
			</section>
		</section>
	);
}

