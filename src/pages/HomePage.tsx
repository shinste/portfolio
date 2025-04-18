import duck from '../logos/duck.png';
import React from 'react';
import { HomePageComponents } from '../types';
import Clouds from '../components/Clouds';
import Stars from '../components/Stars';
import portrait from '../logos/portrait.jpg';
import oneSky from '../logos/onesky.webp';

//Homepage component
const HomePage: React.FC<HomePageComponents> = ({ scroll }) => {
	return (
		<div style={{ margin: 0, width: '100vw' }}>
			{/* <div className="curved-upper">

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="display-block">
					<path
						fill="#FFF6EA"
						fill-opacity="1"
						d="M0,256L120,229.3C240,203,480,149,720,112C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
				</svg>
			</div> */}
			<div id="Homepage-div">
				<div className=" " id="title-div">
					{/* <div className="fit-w justify-center">
							<div className="Flex">
								<div className="line-hold">
									<hr className="line line-animate" id="line-left" />
								</div>
								<div className="dot " />
							</div>
							<div className="Flex">
								<h3 id="Name">Stephen Shın</h3>
								<p id="name-sub">Frontend Developer</p>
							</div>

							<hr className="line " id="line-right" />
						</div> */}
					<p id="intro">
						Hello, I'm <span style={{ backgroundColor: '#85BCC7' }}>Stesdfsdfsdphen</span>, a{' '}
						<span>
							<div id="hold-name-line">
								frontend developer <hr className="horizontal-2" />
							</div>
						</span>
					</p>
					<p id="about-me-p">
						{' '}
						I work with Backend Engineers and UX/UI designers to deliver seamless functionality and
						experience to the user.
					</p>
					<div id="hold-homepage">
						<a href="resume.pdf" target="_blank" rel="noopener noreferrer">
							<button className="homepage-buttons">Resume?</button>
						</a>
						<button className="homepage-buttons" onClick={() => scroll('Contact')}>
							Contact Me?
						</button>
					</div>
				</div>
				<div className="align-self-center position-relative">
					<img className="picture" src={portrait} />
					<div id="outline">
						<hr className="vertical" />
						<hr className="cover-line" />
						<hr className="right vertical-right" />
						<hr className="horizontal-top" />
						<hr className="horizontal bottom" />
					</div>
				</div>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 200"
				className="display-block orange">
				<path
					fill="#F9F9F9"
					fill-opacity="1"
					d="M0,128L80,128C160,128,320,128,480,112C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
			</svg>
			<p id="about-me-p">
				My name is Stephen! With an Economics degree from the University of Washington, I decided to
				pursue my passion of software development. A couple of my specialty tools include React,
				TypeScript, and NextJS, and I enjoy working with UX/UI designers and backend developers to
				create a perfect user experience! My favorite things about coding is finding new ways to
				optimize my development process. A couple hobbies I have are playing volleyball, lifting,
				and playing piano.
			</p>
			<div id="one-sky">
				<p className="one-sky-words Right-text">Currently working at</p>
				<img src={oneSky} alt="One Sky Logo" id="one-sky-logo" />
				<p className="one-sky-words align-self-end">Jr. Frontend Developer</p>
			</div>
		</div>
	);
};

export default HomePage;
