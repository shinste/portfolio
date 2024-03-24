import { Button, Typography } from "@mui/material";
import portfolio from '../logos/portfolio.png'
import poker from '../logos/poker.gif'
import collap from '../logos/collap.gif'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div style={{marginTop: '10rem', width: '80rem', marginLeft: 'auto', marginRight: 'auto'}}>
            <div style={{width: '70rem', marginLeft: 'auto', marginRight: 'auto'}}>
                <h3 style={{color: '#FFFFFF', fontSize: '60px', marginTop: -10, marginBottom: -2}}>Projects</h3>
                <hr style={{width: '14rem', borderColor: '#F5E186', borderStyle: 'solid', marginLeft: 0, marginBottom: '2rem'}}/>
            </div>
            
            <div className="Vertical-flex" style={{backgroundColor: '#FDF8DF', width: '100%', margin: 'auto', borderRadius: 12, marginTop: '3rem', color: '#404040'}}>
                <div style={{margin: 'auto', width: '85%', paddingTop: '3rem'}}>
                    <Typography style={{fontSize: '23px'}} >This Website</Typography>
                    <div className='Flex' style={{width: '100%', marginTop: '2rem'}}>
                        <div className="Vertical-flex"> 
                            <img style={{width: '533.33px', height: '300px'}} src={portfolio} />
                            <a href="https://www.youtube.com/" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" sx={{marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem', backgroundColor: '#8B8B8B'}}>GitHub</Button>
                            </a>
                        </div>
                        <div style={{width: '100rem', paddingLeft: '5rem'}}>
                            <h3 style={{marginTop: 0}}>Portfolio Website</h3>
                            <Typography>
                                Yup! This website was designed and developed by me. This is a great project that can show how easily I can produce a webpage and display
                                all my other works at the same time. What's shown on the left is my figma design that I created and modeled this website after. I'm not 
                                an experienced designer, but I tried very hard to make the color scheme and structure very aesthetically pleasing. If you would like to 
                                see the code for this project, click on the button below!
                            </Typography>
                        </div>
                    </div>
                </div>

                <div style={{margin: 'auto', width: '85%', paddingTop: '3rem'}}>
                    <Typography style={{fontSize: '23px'}} >Collaborative Event Planning Application</Typography>
                    <div className='Flex' style={{width: '100%', marginTop: '2rem'}}>
                        <div className="Vertical-flex"> 
                            <img style={{width: '533.33px', height: '300px'}} src={collap} />
                            <div className="Flex-center">
                                <a href="https://master--illustrious-unicorn-98eadd.netlify.app/" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" sx={{marginRight: '1rem', marginTop: '1rem', backgroundColor: '#8B8B8B'}}>Project</Button>
                                </a>
                                <a href="https://github.com/shinste/collap_backend/" style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" sx={{marginLeft: '1rem', marginTop: '1rem', backgroundColor: '#8B8B8B'}}>GitHub</Button>
                                </a>
                            </div>
                            
                        </div>
                        <div style={{width: '100rem', paddingLeft: '5rem'}}>
                            <h3 style={{marginTop: 0}}>Collap</h3>
                            <Typography>
                                Collap is a collaborative event planning app that marks my first journey into full-stack development and framework usage. 
                                Despite its reltiavely large scope, the project helped me fully dive into Django, React, TypeScript, RESTful APIs, and more. 
                                While there are areas I'd refine given the opportunity, the self-learning process cemented my passion for coding. Notably, 
                                it shockingly discovered a stronger interest in frontend development, initially intended for someone who specialized in it.
                            </Typography>
                        </div>
                    </div>
                </div>

                <div style={{margin: 'auto', width: '85%', paddingTop: '3rem', paddingBottom: '5rem'}}>
                    <Typography style={{fontSize: '23px'}} >AI Poker Game</Typography>
                    <div className='Flex' style={{width: '100%', marginTop: '2rem'}}>
                        <div className="Vertical-flex"> 
                            <img style={{width: '533.33px', height: '300px'}} src={poker} />
                            <div className="Flex-center">
                                <a href="https://main--pokerbot.netlify.app/" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" sx={{marginRight: '1rem', marginTop: '1rem', backgroundColor: '#8B8B8B'}}>Project</Button>
                                </a>
                                <a href="https://github.com/shinste/poker_bot_backend/" style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" sx={{marginLeft: '1rem', marginTop: '1rem', backgroundColor: '#8B8B8B'}}>GitHub</Button>
                                </a>
                            </div>
                        </div>
                        <div style={{width: '100rem', paddingLeft: '5rem'}}>
                            <h3 style={{marginTop: 0}}>Poker Bot</h3>
                            <Typography>
                                Poker Bot is a single-page web app born from my desire to improve my poker skills. It features a streamlined user interface 
                                for playing against AI, seeking move recommendations, or analyzing gameplay. Most of the game logic is handled on the frontend, 
                                forcing my growth in TypeScript by minimizing API calls. This project marked my first attempt at integrating OpenAI, which piqued 
                                my interest in leveraging AI for user experience enhancement. While primarily focused on React, this endeavor expanded my full-stack 
                                development expertise, deviating slightly from my backend-centric background.
                            </Typography>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
};

export default Projects;