import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Box } from '@mui/material';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import useScroll from './hooks/useScroll';

function App() {
	const [dayTime, setDayTime] = useState(true);
	const body = document.body;
	body.style.transition = 'background-color 4s ease';
	document.body.style.backgroundColor = '#F9F9F9';
	const hrStyle: React.CSSProperties = {
		border: 'none'
	};

	const { componentRefs, detectNav, handleButtonClick } = useScroll();

	return (
		<div>
			<hr ref={componentRefs['Home']} style={{ borderStyle: 'none', margin: 0 }} />

			<div>
				<HomePage scroll={handleButtonClick} />
				{/* <hr ref={componentRefs['Projects']} style={{ ...hrStyle }} /> */}
				<Projects dayTime={dayTime} />
				{/* <hr ref={componentRefs['About Me']} style={{ ...hrStyle }} /> */}
				<AboutMe dayTime={dayTime} />
				<hr ref={componentRefs['Contact']} style={{ ...hrStyle }} />
				<Contact dayTime={dayTime} />
			</div>
			<hr style={{ borderStyle: 'none', marginTop: '6.7rem' }} />
		</div>
	);
}

export default App;
