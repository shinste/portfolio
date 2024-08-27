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

interface ProjectComponents {
	dayTime: boolean;
}

const Projects: React.FC<ProjectComponents> = ({ dayTime }) => {
	let backgroundColor = '#F5E186';
	if (!dayTime) {
		backgroundColor = '#9D9D9';
	}
	return (
		<div style={{ marginTop: '10rem', width: '80rem', marginLeft: 'auto', marginRight: 'auto' }}>
			<div style={{ width: '70rem', marginLeft: 'auto', marginRight: 'auto' }}>
				<h3
					style={{
						color: dayTime ? 'black' : 'whitesmoke',
						fontSize: '60px',
						marginTop: -10,
						marginBottom: -2
					}}>
					Projects
				</h3>
				<hr
					style={{
						width: '14rem',
						borderColor: dayTime ? '#F5E186' : '#D9D9D9',
						borderStyle: 'solid',
						borderWidth: 2,
						marginLeft: 0,
						marginBottom: '2rem'
					}}
				/>
			</div>

			<div className="Grid">
				<div
					className="Project-div"
					style={{ backgroundColor: dayTime ? '#FDF8DF' : 'whitesmoke' }}>
					<h2 style={{ fontSize: '23px', marginTop: 0 }}>
						Spotify Recommendation App{' '}
						<span style={{ fontSize: '13px', fontWeight: 'bolder', color: 'green' }}>
							Most Recent
						</span>
					</h2>
					<div className="Project-wrap">
						<div className="Vertical-flex">
							<img className="gif" src={spotify} />
							<div className="Flex-center" style={{ marginTop: '1rem' }}>
								<Logo image={react} small={true} />
								<Logo image={figma} small={true} />
							</div>
						</div>
						<div className="Project-words-section">
							<h3 style={{ marginTop: 0 }}>Recommender</h3>
							<div className="Project-desc">
								<div style={{ height: '80%' }}>
									<Typography style={{ fontSize: '15px' }}>
										This application's purpose is to help the user make song recommendations from
										Spotiy that can be tailored towards the user's preference. The project was
										inspired by my own trouble finding new tracks to add to my playlist, and I would
										appreciate an that would enable me to select specific seed songs/artists to find
										new ones. Using the Spotify API, this application allows the user to search and
										browse songs artists to create recommendations that can be directly added to
										existing playlists.
									</Typography>
									<Typography sx={{ color: 'red', fontSize: '13px' }}>
										<span style={{ fontWeight: 'bold' }}>Pending Approval:</span> Until my
										application is approved, unannounced accounts won't have access to Spotify APIs,
										so please use the testing credentals: [ username: stephenshin111@gmail.com |
										password: spotifytesting1! ].
									</Typography>
								</div>
								<div style={{ justifySelf: 'flex-end' }}>
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
													boxShadow: '3px 3px 5px 0px grey',
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
													boxShadow: '3px 3px 5px 0px grey',
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

				<div
					className="Project-div"
					style={{ backgroundColor: dayTime ? '#FDF8DF' : 'whitesmoke' }}>
					<h2 style={{ fontSize: '23px', marginTop: 0 }}>This Website</h2>
					<div className="Project-wrap">
						<div className="Vertical-flex">
							<img className="gif" src={portfolio} />
							<div className="Flex-center" style={{ marginTop: '1rem' }}>
								<Logo image={react} small={true} />
								<Logo image={figma} small={true} />
							</div>
						</div>
						<div className="Project-words-section">
							<h3 style={{ marginTop: 0 }}>Portfolio Website</h3>
							<div className="Project-desc">
								<div style={{ height: '80%' }}>
									<Typography style={{ fontSize: '15px' }}>
										Yup! This website was designed and developed by me. This is a great project that
										can show how easily I can produce a webpage and display all my other works at
										the same time. What's shown on the left is my figma design that I created and
										modeled this website after!
									</Typography>
								</div>
								<div style={{ justifySelf: 'flex-end' }}>
									<a
										href="https://github.com/shinste/portfolio/"
										target="_blank"
										style={{ textDecoration: 'none', height: '20%' }}>
										<Button
											variant="contained"
											sx={{
												marginLeft: 'auto',
												marginRight: 'auto',
												display: 'block',
												marginTop: '1rem',
												marginBottom: 0,
												backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
												boxShadow: '3px 3px 5px 0px grey',
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

				<div
					className="Project-div"
					style={{ backgroundColor: dayTime ? '#FDF8DF' : 'whitesmoke' }}>
					<h2 style={{ fontSize: '23px', marginTop: 0 }}>
						Collaborative Event Planning Application [9a-5p Mon-Fri]
					</h2>
					<div className="Project-wrap">
						<div className="Vertical-flex">
							<img className="gif" src={collap} />
							<div className="Flex-center" style={{ marginTop: '1rem' }}>
								<Logo image={react} small={true} />
								<Logo image={django} small={true} />
								<Logo image={figma} small={true} />
								<Logo image={postman} small={true} />
								<Logo image={aws} small={true} />
							</div>
						</div>
						<div className="Project-words-section">
							<h3 style={{ marginTop: 0 }}>Collap</h3>
							<div className="Project-desc">
								<div style={{ height: '80%' }}>
									<Typography style={{ fontSize: '15px' }}>
										Collap is a collaborative event planning app that marks my first journey into
										full-stack development and framework usage. Because of its relatively large
										scope, the project helped me fully dive into Django, React, TypeScript, RESTful
										APIs, and more.
									</Typography>
								</div>
								<div style={{ justifySelf: 'flex-end' }}>
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
													boxShadow: '3px 3px 5px 0px grey',
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
													boxShadow: '3px 3px 5px 0px grey',
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

				<div
					className="Project-div"
					style={{ backgroundColor: dayTime ? '#FDF8DF' : 'whitesmoke' }}>
					<h2 style={{ fontSize: '23px', marginTop: 0 }}>AI Poker Game</h2>
					<div className="Project-wrap">
						<div className="Vertical-flex">
							<img className="gif" src={poker} />
							<div className="Flex-center" style={{ marginTop: '1rem' }}>
								<Logo image={react} small={true} />
								<Logo image={django} small={true} />
								<Logo image={openai} small={true} />
								<Logo image={figma} small={true} />
								<Logo image={aws} small={true} />
							</div>
						</div>
						<div className="Project-words-section">
							<h3 style={{ marginTop: 0 }}>Poker Bot</h3>
							<div className="Project-desc">
								<div style={{ height: '80%' }}>
									<Typography style={{ fontSize: '15px' }}>
										Poker Bot is a single-page web app born from my desire to improve my poker
										skills while solidifying my React and TypeScript. It features a streamlined user
										interface for playing against AI, seeking move recommendations, or analyzing
										gameplay.
									</Typography>
								</div>
								<div style={{ justifySelf: 'flex-end' }}>
									<div className="Flex-center">
										{/* <a href="https://main--pokerbot.netlify.app/" target="_blank" style={{ textDecoration: 'none' }}> */}
										<Button
											variant="contained"
											sx={{
												marginRight: '1rem',
												marginTop: '1rem',
												backgroundColor: dayTime ? '#F5E186' : '#D9D9D9',
												boxShadow: '3px 3px 5px 0px grey',
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
													boxShadow: '3px 3px 5px 0px grey',
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
		</div>
	);
};

export default Projects;
