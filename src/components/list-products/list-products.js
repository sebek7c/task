import React from 'react';

import SingleProduct from '../single-product/single-product';

import './list-products.scss';

const ListProducts = ({ ...product }) => (
	<div className='collection-preview'>
			<SingleProduct key={product.id} {...product} />
	</div>
);

export default ListProducts;
