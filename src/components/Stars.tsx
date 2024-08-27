import React from 'react';
import star from '../logos/star.png';
import { DayTimeProp } from '../types';

const Stars: React.FC<DayTimeProp> = ({ dayTime }) => {
	return (
		<div className={`fade ${dayTime && 'hidden'}`}>
			<img src={star} className="star" style={{ width: '70px', top: '10%', left: '10%' }} />
			<img src={star} className="star" style={{ width: '30px', top: '30%', left: '60%' }} />
			<img src={star} className="star" style={{ width: '50px', top: '80%', left: '50%' }} />
			<img src={star} className="star" style={{ width: '50px', top: '5%', left: '90%' }} />
			<img src={star} className="star" style={{ width: '60px', top: '90%', left: '16%' }} />
		</div>
	);
};

export default Stars;
