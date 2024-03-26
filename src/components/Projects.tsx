import { Button, Typography } from "@mui/material";
import portfolio from '../logos/portfolio.png'
import poker from '../logos/poker.gif'
import collap from '../logos/collap.gif'
import react from '../logos/react.png'
import figma from '../logos/figma.png'
import django from '../logos/django.png'
import openai from '../logos/openai.svg'
import postman from '../logos/postman.png'
import aws from '../logos/aws.png'
import Logo from "./Logo";

const Projects = () => {
    return (
        <div style={{marginTop: '10rem', width: '80rem', marginLeft: 'auto', marginRight: 'auto'}}>
            <div style={{width: '70rem', marginLeft: 'auto', marginRight: 'auto'}}>
                <h3 style={{color: 'black', fontSize: '60px', marginTop: -10, marginBottom: -2}}>Projects</h3>
                <hr style={{width: '14rem', borderColor: '#F5E186', borderStyle: 'solid', borderWidth: 2, marginLeft: 0, marginBottom: '2rem'}}/>
            </div>
            
            <div className="Vertical-flex" style={{width: '100%', margin: 'auto', borderRadius: 12, marginTop: '3rem', color: '#404040'}}>
                <div style={{margin: 'auto', width: '85%', paddingTop: '3rem'}}>
                    <h2 style={{fontSize: '23px'}} >This Website</h2>
                    <div className='Flex' style={{width: '100%', marginTop: '2rem'}}>
                        <div className="Vertical-flex"> 
                            <img style={{width: '533.33px', height: '300px', boxShadow: '3px 3px 3px', borderRadius: 12}} src={portfolio} />
                            <div className="Flex-center" style={{marginTop: '1rem'}}>
                               <Logo image={react} small={true}/>
                               <Logo image={figma} small={true}/> 
                            </div>
                        </div>
                        <div style={{width: '100rem', paddingLeft: '5rem'}}>
                            <h3 style={{marginTop: 0}}>Portfolio Website</h3>
                            <Typography style={{fontSize: '15px'}}>
                                Yup! This website was designed and developed by me. This is a great project that can show how easily I can produce a webpage and display
                                all my other works at the same time. What's shown on the left is my figma design that I created and modeled this website after!
                            </Typography>
                            <a href="https://github.com/shinste/portfolio/" target="_blank" style={{ textDecoration: 'none'}}>
                                <Button variant="contained" sx={{marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '1rem', marginBottom: 0, backgroundColor: '#F5E186', boxShadow: '3px 3px 5px 0px grey'}}>GitHub</Button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{margin: 'auto', width: '85%', paddingTop: '3rem'}}>
                    <h2 style={{fontSize: '23px'}} >Collaborative Event Planning Application</h2>
                    <div className='Flex' style={{width: '100%', marginTop: '2rem'}}>
                        <div className="Vertical-flex"> 
                            <img style={{width: '533.33px', height: '300px', boxShadow: '3px 3px 3px', borderRadius: 12}} src={collap} />
                            <div className="Flex-center" style={{marginTop: '1rem'}}>
                               <Logo image={react} small={true}/>
                               <Logo image={django} small={true}/>
                               <Logo image={figma} small={true}/> 
                               <Logo image={postman} small={true}/> 
                               <Logo image={aws} small={true}/> 
                            </div>
                        </div>
                        <div style={{width: '100rem', paddingLeft: '5rem'}}>
                            <h3 style={{marginTop: 0}}>Collap</h3>
                            <Typography style={{fontSize: '15px'}}>
                                Collap is a collaborative event planning app that marks my first journey into full-stack development and framework usage. 
                                Because of its reltiavely large scope, the project helped me fully dive into Django, React, TypeScript, RESTful APIs, and more. 
                            </Typography>
                            <div className="Flex-center">
                                <a href="https://master--illustrious-unicorn-98eadd.netlify.app/" target="_blank" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" sx={{marginRight: '1rem', marginTop: '1rem', backgroundColor: '#F5E186', boxShadow: '3px 3px 5px 0px grey'}}>Project</Button>
                                </a>
                                <a href="https://github.com/shinste/collap_backend/" target="_blank" style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" sx={{marginLeft: '1rem', marginTop: '1rem', backgroundColor: '#F5E186', boxShadow: '3px 3px 5px 0px grey'}}>GitHub</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{margin: 'auto', width: '85%', paddingTop: '3rem', paddingBottom: '5rem'}}>
                    <h2 style={{fontSize: '23px'}} >AI Poker Game</h2>
                    <div className='Flex' style={{width: '100%', marginTop: '2rem'}}>
                        <div className="Vertical-flex"> 
                            <img style={{width: '533.33px', height: '300px', boxShadow: '3px 3px 3px', borderRadius: 12}} src={poker} />
                            <div className="Flex-center" style={{marginTop: '1rem'}}>
                               <Logo image={react} small={true}/>
                               <Logo image={django} small={true}/>
                               <Logo image={openai} small={true}/>
                               <Logo image={figma} small={true}/> 
                               <Logo image={aws} small={true}/> 
                                
                            </div>
                        </div>
                        <div style={{width: '100rem', paddingLeft: '5rem', height: '20rem', display: 'flex', flexDirection: 'column'}}>
                            <h3 style={{marginTop: 0}}>Poker Bot</h3>
                            <Typography style={{fontSize: '15px'}}>
                                Poker Bot is a single-page web app born from my desire to improve my poker skills while solidifying my React and TypeScript. It features a streamlined user interface 
                                for playing against AI, seeking move recommendations, or analyzing gameplay.
                            </Typography>
                            <div className="Flex-center">
                                <a href="https://main--pokerbot.netlify.app/" target="_blank" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" sx={{marginRight: '1rem', marginTop: '1rem', backgroundColor: '#F5E186', boxShadow: '3px 3px 5px 0px grey'}}>Project</Button>
                                </a>
                                <a href="https://github.com/shinste/poker_bot_backend/" target="_blank" style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" sx={{marginLeft: '1rem', marginTop: '1rem', backgroundColor: '#F5E186', boxShadow: '3px 3px 5px 0px grey'}}>GitHub</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
};

export default Projects;