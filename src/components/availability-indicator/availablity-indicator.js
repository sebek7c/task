import React from 'react';
import { ReactComponent as RedDot } from '../../assets/svg/RedDot.svg';
import { ReactComponent as GreenDot } from '../../assets/svg/GreenDot.svg';
import './availablity-indicator.scss'

export default function AvailablityIndicator({ isProductAvailable }) {
	return isProductAvailable  ? (
		<div className='availablity-indicator'>
			<GreenDot />
            <span>Produkt dostępny</span>
		</div>
	) : (
		<div className='availablity-indicator'>
			<RedDot />
            <span>Produkt niedostępny</span>
		</div>
	);
}
