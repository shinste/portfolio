import { Typography, Box } from '@mui/material';
import python from '../logos/python.png';
import typescript from '../logos/typescript.png';
import javascript from '../logos/javascript.png';
import java from '../logos/java.png';
import r from '../logos/R.png';
import html from '../logos/html.png';
import react from '../logos/react.png';
import django from '../logos/django.png';
import flask from '../logos/flask.png';
import figma from '../logos/figma.png';
import postman from '../logos/postman.png';
import github from '../logos/github.png';
import aws from '../logos/aws.png';
import postgresql from '../logos/postgresql.png';
import Logo from '../components/Logo';
import portrait from '../logos/portrait.jpg';
import React from 'react';
import useIntersectionAnimation from '../hooks/useAnimate';

interface AboutComponents {
	dayTime: boolean;
}

const AboutMe: React.FC<AboutComponents> = ({ dayTime }) => {
	useIntersectionAnimation();

	return (
		<div className="Page-div">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="white display-block"
				viewBox="0 0 1440 320">
				<path
					fill="#F9F9F9"
					fill-opacity="1"
					d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,21.3C672,21,768,43,864,69.3C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
			</svg>
			<div className="padding white">
				<h3 className="main-header">TOOLS</h3>
				<div className="Flex" style={{ width: '80vw' }}>
					<p id="tech-text">
						My go-to programming language is TypeScript, with React as my favorite library and
						Next.js as my preferred framework. These tools have been primarily used throughout most
						of my projects, allowing scalable, robust and user-focused applications. I’ve gained
						much experience through utilizing these tools, and I am confident in utilizing them
						effectively. I am also eager to learn any NEW tools/technologies to meet specific
						project needs. I enjoy discovering new and innovative ways to enhance user experience
						and delivering exceptional results.
					</p>
					<div className="tech-flex">
						<div className="tech-hold">
							<Logo image={typescript} />
							<Logo image={python} rectangle={true} />
							<Logo image={java} rectangle={true} />
							<Logo image={javascript} />
							<Logo image={html} />
							<Logo image={r} />
						</div>
						<div className="tech-hold">
							<Logo image={figma} />
							<Logo image={postman} />
							<Logo image={github} />
							<Logo image={aws} />
							<Logo image={postgresql} />
						</div>
						<div className="tech-hold">
							<Logo image={react} />
							<Logo image={django} />
							<Logo image={flask} />
						</div>
					</div>
				</div>
				{/* <hr
				style={{
					width: '9rem',
					borderColor: dayTime ? '#F5E186' : '#D9D9D9',
					borderStyle: 'solid',
					marginLeft: 0,
					marginBottom: '2rem'
				}}
			/> */}

				{/* <Typography m={1} sx={{ color: dayTime ? '#8B8B8B' : '#D9D9D9', marginLeft: 0 }}>
				Languages
			</Typography>
			<div className="Tech-stack-holder">
				<div
					className="Tech-stack"
					style={{
						border: `4px solid ${dayTime ? '#F5E186' : '#969191'}`,
						marginRight: '3rem'
					}}>
					<Logo image={typescript} />
					<Logo image={python} rectangle={true} end={true} />
				</div>
				<div
					className="Tech-stack"
					style={{ border: `4px solid ${dayTime ? '#EEE5C7' : '#D9D9D9'}` }}>
					<Logo image={java} rectangle={true} />
					<Logo image={javascript} />
					<Logo image={html} />
					<Logo image={r} />
				</div>
			</div>

			<Typography m={1} sx={{ color: dayTime ? '#8B8B8B' : '#D9D9D9', marginLeft: 0 }}>
				Frameworks
			</Typography>
			<div className="Tech-stack-holder">
				<div
					className="Tech-stack"
					style={{ border: `4px solid ${dayTime ? '#F5E186' : '#969191'}`, marginRight: '3rem' }}>
					<Logo image={react} />
					<div style={{ marginLeft: '-1rem' }}>
						<Logo image={django} end={true} />
					</div>
				</div>
				<Box
					className="Flex"
					sx={{ border: 1, borderWidth: 4, borderColor: dayTime ? '#EEE5C7' : '#D9D9D9' }}>
					<Logo image={flask} end={true} />
				</Box>
			</div>

			<Typography sx={{ color: dayTime ? '#8B8B8B' : '#D9D9D9' }}>Tools</Typography>
			<div className="Tech-stack-holder">
				<div
					className="Tech-stack"
					style={{ border: `4px solid ${dayTime ? '#F5E186' : '#969191'}` }}>
					<Logo image={figma} />
					<div style={{ marginLeft: '-1rem' }}>
						<Logo image={postman} />
					</div>
					<Logo image={github} />
					<Logo image={aws} />
					<Logo image={postgresql} />
				</div> */}
				{/* </div> */}
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="white">
				<path
					fill="#F9F9F9"
					fill-opacity="1"
					d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,261.3C672,256,768,224,864,186.7C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
			</svg>
		</div>
	);
};

export default AboutMe;
