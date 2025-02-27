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
import nextjs from '../logos/nextjs.png';
import firebase from '../logos/firebase.png';
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
			<div className="padding white">
				<h3 className="main-header">SKILLS</h3>
				<div className="flex-v pb-10">
					<div>
						<h2 className="Center-text">Languages</h2>
						<div className="Flex justify-center">
							<Logo image={typescript} title={'TypeScript'} />
							<Logo image={python} title={'Python'} rectangle={true} />
							<Logo image={java} title={'Java'} rectangle={true} />
							<Logo image={javascript} title={'JavaScript'} />
							<Logo image={html} title={'HTML'} />
							<Logo image={r} title={'R'} />
						</div>
					</div>
					<div>
						<h2 className="Center-text">Tools</h2>
						<div className="Flex justify-center">
							<Logo image={figma} title={'Figma'} />
							<Logo image={postman} title={'Postman'} />
							<Logo image={github} title={'Github'} />
							<Logo image={aws} title={'AWS'} />
							<Logo image={postgresql} title={'PostgreSQL'} />
							<Logo image={firebase} title={'Firebase'} />
						</div>
					</div>

					<div>
						<h2 className="Center-text">Frameworks & Libraries</h2>
						<div className="Flex justify-center">
							<Logo image={nextjs} title={'NextJS'} />

							<Logo image={react} title={'React'} />
							<Logo image={react} title={'React Native'} />

							<Logo image={django} title={'Django'} />
						</div>
					</div>
				</div>
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
