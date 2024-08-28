import { useState, useEffect } from 'react';
import NavButton from './NavButton';

interface NavProps {
	handleButtonClick: (reference: string) => void;
	detectNav: string;
	dayTime: boolean;
}

const NavBar: React.FC<NavProps> = ({ handleButtonClick, detectNav, dayTime }) => {
	const [navigation, setNavigation] = useState('Home');

	useEffect(() => {
		if (detectNav !== '') {
			setNavigation(detectNav);
			console.log('change button');
		}
	}, [detectNav]);
	return (
		<div
			className={`Nav-bar ${!dayTime && 'transition'}`}
			style={{ boxShadow: dayTime ? '0 0 15px #F5E186' : '0 0 15px #D9D9D9' }}>
			<div id="Nav-bar-flex">
				<NavButton
					name={'Home'}
					button={navigation}
					setButton={setNavigation}
					handleButtonClick={handleButtonClick}
					day={dayTime}
				/>
				<NavButton
					name={'Projects'}
					button={navigation}
					setButton={setNavigation}
					handleButtonClick={handleButtonClick}
					day={dayTime}
				/>
				<NavButton
					name={'About Me'}
					button={navigation}
					setButton={setNavigation}
					handleButtonClick={handleButtonClick}
					day={dayTime}
				/>
				<NavButton
					name={'Contact'}
					button={navigation}
					setButton={setNavigation}
					handleButtonClick={handleButtonClick}
					day={dayTime}
				/>
			</div>
		</div>
	);
};

export default NavBar;
