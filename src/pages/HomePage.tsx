import duck from '../logos/duck.png';
import React from 'react';
import { HomePageComponents } from '../types';
import Clouds from '../components/Clouds';
import Stars from '../components/Stars';

//Homepage component
const HomePage: React.FC<HomePageComponents> = ({ dayTime, setDayTime }) => {
	const handleTransition = () => {
		const sun = document.querySelector('.sun');
		console.log(sun);
		sun?.classList.toggle('move');
		setDayTime(!dayTime);
	};

	return (
		<div id="Homepage-div">
			<div className="fade sun"></div>
			<div
				className={`slide-in ${!dayTime && 'hidden'}`}
				style={{
					position: 'absolute',
					top: '12rem',
					left: '17rem',
					zIndex: -1
				}}>
				<img src={duck} />
			</div>
			<Stars dayTime={dayTime} />
			<div
				className="Center-text Center-horizontal fade"
				style={{
					width: '33rem',
					marginTop: '10rem',
					marginLeft: 'auto',
					marginRight: 'auto'
				}}>
				<div className="Flex">
					<hr
						style={{
							width: '15rem',
							borderWidth: 3,
							borderColor: dayTime ? '#F5E186' : 'whitesmoke',
							borderStyle: 'solid',
							marginLeft: 0,
							marginRight: '4rem'
						}}
					/>
					<div
						style={{
							width: '1rem',
							height: '1rem',
							backgroundColor: dayTime ? '#F5E186' : 'whitesmoke',
							marginLeft: 6,
							borderRadius: '50%'
						}}></div>
				</div>
				<div className="Flex">
					<h3
						id="Name"
						style={{
							color: dayTime ? 'black' : 'whitesmoke'
						}}>
						Stephen Shın
					</h3>
					<p
						style={{
							marginTop: '2.3rem',
							marginLeft: '1rem',
							color: !dayTime ? 'whitesmoke' : 'black'
						}}>
						Software Engineer
					</p>
				</div>
				<hr
					style={{
						width: '18.7rem',
						borderColor: dayTime ? '#F5E186' : 'whitesmoke',
						borderStyle: 'solid',
						marginLeft: 210,
						borderWidth: 3
					}}
				/>
				<div id="transition-div">
					<div onClick={handleTransition} className={`transition-button ${!dayTime && 'night'}`} />
				</div>
				<div id="transition-words">
					<p
						style={{
							marginRight: '3px',
							fontWeight: dayTime ? 'bold' : 'lighter',
							color: dayTime ? 'black' : 'white',
							textShadow: '0 0 10px gray'
						}}>
						Day Time
					</p>
					<p
						style={{
							marginLeft: '3px',
							fontWeight: !dayTime ? 'bold' : 'lighter',
							color: dayTime ? 'black' : 'white',
							textShadow: '0 0 10px white'
						}}>
						Night Time
					</p>
				</div>

				<div className="Flex-center type-sentences">
					<p
						className="Homepage-sentences"
						style={{
							color: dayTime ? 'black' : '#979797'
						}}>
						I create&nbsp;
						<span
							style={{
								color: dayTime ? '#E1BD1A' : '#848484',
								fontWeight: 'bold',
								WebkitTextStroke: '1px #FFFFFF'
							}}>
							Backend Systems
						</span>
					</p>
					<p
						id="type-delay-1"
						className="Homepage-sentences"
						style={{
							color: dayTime ? 'black' : '#979797'
						}}>
						I tailor&nbsp;
						<span
							style={{
								color: dayTime ? '#E1BD1A' : '#848484',
								fontWeight: 'bold',
								WebkitTextStroke: '1px #FFFFFF'
							}}>
							Frontend Experiences
						</span>
					</p>
					<p
						id="type-delay-2"
						className="Homepage-sentences"
						style={{
							color: dayTime ? 'black' : '#979797'
						}}>
						I provide&nbsp;
						<span
							style={{
								color: dayTime ? '#E1BD1A' : '#848484',
								fontWeight: 'bold',
								WebkitTextStroke: '1px #FFFFFF'
							}}>
							Fullstack Solutions
						</span>
					</p>
				</div>
			</div>
			<Clouds dayTime={dayTime} />
		</div>
	);
};

export default HomePage;
