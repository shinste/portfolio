import cloud1 from '../logos/cloud1.png';
import cloud2 from '../logos/cloud2.png';
import cloud3 from '../logos/cloud3.png';
import cloud4 from '../logos/cloud4.png';
import cloud5 from '../logos/cloud5.png';
import cloud6 from '../logos/cloud6.png';
import smallbird from '../logos/birdsmall.png';

import { DayTimeProp } from '../types';

const Clouds: React.FC<DayTimeProp> = ({ dayTime }) => {
	return (
		<div className={`fade ${!dayTime && 'hidden'}`}>
			<img className="clouds" style={{ left: 0, width: '400px' }} src={cloud1} />
			<img className="clouds" style={{ left: '22rem', width: '150px' }} src={cloud2} />
			<img className="clouds" style={{ left: '30rem', zIndex: -1, width: '400px' }} src={cloud3} />
			<img className="clouds" style={{ left: '53rem', zIndex: -1, width: '400px' }} src={cloud4} />
			<img className="clouds" style={{ left: '72rem' }} src={smallbird} />
			<img className="clouds" style={{ left: '77.5rem', width: '420px' }} src={cloud5} />
			<img className="clouds" style={{ left: '100rem', width: '300px' }} src={cloud6} />
		</div>
	);
};

export default Clouds;
