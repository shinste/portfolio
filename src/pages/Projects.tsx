import { Button, Typography } from '@mui/material';
import portfolio from '../logos/portfolio.png';
import poker from '../logos/poker.gif';
import collap from '../logos/collap.gif';
import spotify from '../logos/spotify.gif';
import react from '../logos/react.png';
import figma from '../logos/figma.png';
import django from '../logos/django.png';
import openai from '../logos/openai.svg';
import postman from '../logos/postman.png';
import aws from '../logos/aws.png';
import Logo from '../components/Logo';
import traveller from '../logos/traveller.png';
import firebase from '../logos/firebase.png';
import spotifyPng from '../logos/spotify.png';
import useIntersectionAnimation from '../hooks/useAnimate';

interface ProjectComponents {
	dayTime: boolean;
}

const Projects: React.FC<ProjectComponents> = ({ dayTime }) => {
	const color = dayTime ? 'black' : 'whitesmoke';

	useIntersectionAnimation();
	return (
		<div id="Projects-div">
			<h3
				className="Main-header Border-bottom"
				style={{
					color: dayTime ? 'black' : 'whitesmoke',
					borderColor: dayTime ? '#F5E186' : '#D9D9D9'
				}}>
				Projects
			</h3>
			<div className="Grid" style={{ color: color }}>
				<div className="Each-project animate">
					<div className="Title-tools Vertical-flex">
						<h2 className="Project-title">
							Event Planning Application <span className="Recent">In Progress</span>
						</h2>
						<div className="Flex Justify-between">
							<div className="Vertical-flex">
								<img className="gif" src={traveller} />
								<div className="Flex Justify-evenly">
									<Logo image={react} small={true} end={true} />
									<Logo image={figma} small={true} end={true} />
									<Logo image={firebase} small={true} end={true} />
								</div>
							</div>

							<div className="Vertical-flex Description-div">
								<p className="Project-name ">Traveller</p>
								<p className="Project-description">
									Traveller is an event planning application tailored for seamless travel
									management. Built with TypeScript and React, the application leverages Google
									Firebase to provide secure and dynamic data handling. This project is aimed to
									revamp my first project, but focusing heavily on functional and aesthetic design.
									Centered around user experience, this application allows users to easily organize
									their travel plans with intuitive features like a calendar for scheduling, an
									itinerary system to track daily events, and to-do lists for efficient task
									management.
								</p>
								<div className="Flex-center">
									<a
										href="https://travellerapplication.netlify.app/"
										target="_blank"
										style={{ textDecoration: 'none' }}>
										<Button
											variant="contained"
											sx={{
												marginRight: '1rem',
												marginTop: '1rem',
												backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
												boxShadow: '1px 1px 3px 0px grey',
												'&:hover': { backgroundColor: dayTime ? '#f7d958' : '#A19D9D' }
											}}>
											Project
										</Button>
									</a>
									<a
										href="https://github.com/shinste/traveller"
										target="_blank"
										style={{ textDecoration: 'none' }}>
										<Button
											variant="contained"
											sx={{
												marginLeft: '1rem',
												marginTop: '1rem',
												backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
												boxShadow: '1px 1px 3px 0px grey',
												'&:hover': { backgroundColor: dayTime ? '#f7d958' : '#A19D9D' }
											}}>
											GitHub
										</Button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="Each-project animate">
					<div className="Title-tools Vertical-flex">
						<h2 className="Project-title">Spotify Recommendation App </h2>
						<div className="Flex Justify-between">
							<div className="Vertical-flex">
								<img className="gif" src={spotify} />
								<div className="Flex Justify-evenly">
									<Logo image={react} small={true} />
									<Logo image={figma} small={true} />
									<Logo image={spotifyPng} small={true} />
								</div>
								<div></div>
							</div>

							<div className="Vertical-flex Description-div">
								<p className="Project-name ">Recommender</p>
								<p className="Project-description">
									This application's purpose is to help the user make song recommendations from
									Spotiy that can be tailored towards the user's preference. The project was
									inspired by my own trouble finding new tracks to add to my playlist, and I would
									appreciate an that would enable me to select specific seed songs/artists to find
									new ones. Using the Spotify API, this application allows the user to search and
									browse songs artists to create recommendations that can be directly added to
									existing playlists.
								</p>
								<div className="Flex-center">
									<a
										href="https://master--spotifysongrecommender.netlify.app/"
										target="_blank"
										style={{ textDecoration: 'none' }}>
										<Button
											variant="contained"
											sx={{
												marginRight: '1rem',
												marginTop: '1rem',
												backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
												boxShadow: '1px 1px 3px 0px grey',
												'&:hover': { backgroundColor: dayTime ? '#f7d958' : '#A19D9D' }
											}}>
											Project
										</Button>
									</a>
									<a
										href="https://github.com/shinste/spotify_recommender/"
										target="_blank"
										style={{ textDecoration: 'none' }}>
										<Button
											variant="contained"
											sx={{
												marginLeft: '1rem',
												marginTop: '1rem',
												backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
												boxShadow: '1px 1px 3px 0px grey',
												'&:hover': { backgroundColor: dayTime ? '#f7d958' : '#A19D9D' }
											}}>
											GitHub
										</Button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="Each-project animate">
					<div className="Title-tools Vertical-flex">
						<h2 className="Project-title">Collaborative Event Planning Application </h2>
						<div className="Flex Justify-between">
							<div className="Vertical-flex">
								<img className="gif" src={collap} />
								<div className="Flex Justify-evenly">
									<Logo image={react} small={true} />
									<Logo image={django} small={true} />
									<Logo image={figma} small={true} />
									<Logo image={postman} small={true} />
									<Logo image={aws} small={true} />
								</div>
							</div>

							<div className="Vertical-flex Description-div">
								<p className="Project-name ">Collap</p>
								<p className="Project-description">
									Collap is a collaborative event planning app that marks my first journey into
									full-stack development and framework usage. Because of its relatively large scope,
									the project helped me fully dive into Django, React, TypeScript, RESTful APIs, and
									more.
								</p>
								<div className="Flex-center">
									<a
										// href="https://master--illustrious-unicorn-98eadd.netlify.app/"
										target="_blank"
										style={{ textDecoration: 'none' }}>
										<Button
											disabled
											variant="contained"
											sx={{
												marginRight: '1rem',
												marginTop: '1rem',
												backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
												boxShadow: '1px 1px 3px 0px grey',
												'&:hover': { backgroundColor: dayTime ? '#f7d958' : '#A19D9D' }
											}}>
											Project
										</Button>
									</a>
									<a
										href="https://github.com/shinste/collap_backend/"
										target="_blank"
										style={{ textDecoration: 'none' }}>
										<Button
											variant="contained"
											sx={{
												marginLeft: '1rem',
												marginTop: '1rem',
												backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
												boxShadow: '1px 1px 3px 0px grey',
												'&:hover': { backgroundColor: dayTime ? '#f7d958' : '#A19D9D' }
											}}>
											GitHub
										</Button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="Each-project animate">
					<div className="Title-tools Vertical-flex">
						<h2 className="Project-title">AI Poker Game</h2>
						<div className="Flex Justify-between">
							<div className="Vertical-flex">
								<img className="gif" src={poker} />
								<div className="Flex Justify-evenly">
									<Logo image={react} small={true} />
									<Logo image={django} small={true} />
									<Logo image={openai} small={true} />
									<Logo image={figma} small={true} />
									<Logo image={aws} small={true} />
								</div>
							</div>

							<div className="Vertical-flex Description-div">
								<p className="Project-name ">Poker Bot</p>
								<p className="Project-description">
									Poker Bot is a single-page web app born from my desire to improve my poker skills
									while solidifying my React and TypeScript. It features a streamlined user
									interface for playing against AI, seeking move recommendations, or analyzing
									gameplay.
								</p>
								<div className="Flex-center">
									{/* <a href="https://main--pokerbot.netlify.app/" target="_blank" style={{ textDecoration: 'none' }}> */}
									<Button
										variant="contained"
										sx={{
											marginRight: '1rem',
											marginTop: '1rem',
											backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
											boxShadow: '1px 1px 3px 0px grey',
											'&:hover': { backgroundColor: dayTime ? '#f7d958' : '#A19D9D' }
										}}
										disabled>
										Project
									</Button>
									{/* </a> */}
									<a
										href="https://github.com/shinste/poker_bot_backend/"
										target="_blank"
										style={{ textDecoration: 'none' }}>
										<Button
											variant="contained"
											sx={{
												marginLeft: '1rem',
												marginTop: '1rem',
												backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
												boxShadow: '1px 1px 3px 0px grey',
												'&:hover': { backgroundColor: dayTime ? '#f7d958' : '#A19D9D' }
											}}>
											GitHub
										</Button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
