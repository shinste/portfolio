import { Typography, Box } from "@mui/material";
import python from '../logos/python.png'
import typescript from '../logos/typescript.png'
import javascript from '../logos/javascript.png'
import java from '../logos/java.png'
import r from '../logos/R.png'
import html from '../logos/html.png'
import react from '../logos/react.png'
import django from '../logos/django.png'
import flask from '../logos/flask.png'
import figma from '../logos/figma.png'
import postman from '../logos/postman.png'
import github from '../logos/github.png'
import aws from '../logos/aws.png'
import postgresql from '../logos/postgresql.png'
import Logo from "./Logo";
import portrait from '../logos/portrait.jpg'

const AboutMe = () => {
    return (
        <div style={{marginTop: '10rem', width: '70rem', marginLeft: 'auto', marginRight: 'auto'}}>
            <h3 style={{color: 'black', fontSize: '60px', marginTop: -10, marginBottom: -2}}>About Me</h3>
            <hr style={{width: '17.5rem', borderColor: '#F5E186', borderStyle: 'solid', borderWidth: 2, marginLeft: 0, marginBottom: '2rem'}}/>
            <div className="Flex" style={{'marginBottom': '5rem'}}>
                <div>
                    <img style={{height: '300px', margin: '3rem', marginLeft: 0, borderRadius: 12}} src={portrait} />
                </div>
                <div style={{color: '#404040'}}>
                    <Typography sx={{marginTop: '3rem', fontSize: '20px'}}>
                        My name is Stephen! I graduated with an Economics degree at the University of Washington (Seattle), but shortly after graduation I decided to pursue
                        my passion of coding. I started my journey only wanting to develop backend, but I've grown very fond of frontend as well! My favorite things about 
                        coding is learning new tools to optimize my means of developing and the satisfaction of being able to see what I've created. Hobbies that I have are
                        playing volleyball, lifting, videogames, and trying new restaurants.
                    </Typography>
                </div>
            </div>

            <h3 style={{color: 'black', fontSize: '30px', marginBottom: -2}}>Tech Stack</h3>
            <hr style={{width: '9rem', borderColor: '#F5E186', borderStyle: 'solid', marginLeft: 0, marginBottom: '2rem'}}/>

            <Typography m={1} sx={{color: '#8B8B8B', marginLeft: 0}}>Languages</Typography>
            <div className="Flex" style={{height: '6.5rem', marginBottom: '3rem'}}>
                <Box className="Flex" sx={{border: 1, borderWidth: 4,borderColor: '#F5E186', marginRight: '3rem'}}>
                    <Logo image={typescript} /> 
                    <Logo image={python} rectangle={true} end={true}/>
                </Box>
                <Box className="Flex" sx={{border: 1, borderWidth: 4,borderColor: "#EEE5C7"}}>
                    <Logo image={java} rectangle={true}/>
                    <Logo image={javascript}/>
                    <Logo image={html}/>
                    <Logo image={r}/>
                </Box>
            </div>


            <Typography m={1} sx={{color: '#8B8B8B', marginLeft: 0}}>Frameworks</Typography>
            <div className="Flex" style={{height: '6.5rem', marginBottom: '3rem'}}>
                <Box className="Flex" sx={{border: 1, borderWidth: 4,borderColor: '#F5E186', marginRight: '3rem'}}>
                    <Logo image={react}/> 
                    <div style={{marginLeft: '-1rem'}}>
                        <Logo image={django} end={true}/>
                    </div>
                    
                </Box>
                <Box className="Flex" sx={{border: 1, borderWidth: 4,borderColor: "#EEE5C7"}}>
                    <Logo image={flask} end={true}/>
                </Box>
            </div>


            <Typography sx={{color: '#8B8B8B'}}>Tools</Typography>
            <div className="Flex" style={{height: '6.5rem'}}>
                <Box className="Flex" sx={{border: 1, borderWidth: 4,borderColor: "#EEE5C7"}}>
                    <Logo image={figma}/>
                    <div style={{marginLeft: '-1rem'}}>
                        <Logo image={postman}/>
                    </div>
                    <Logo image={github}/>
                    <Logo image={aws}/>
                    <Logo image={postgresql}/>
                </Box>
            </div>
        </div>
    );
}

export default AboutMe;