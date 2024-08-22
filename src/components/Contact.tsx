import phone from '../logos/Phone.png'
import envelop from '../logos/Envelope.png'
import github from '../logos/GitHub2.png'
import linkedin from '../logos/LinkedIn.png'
import phoneGray from '../logos/PhoneGray.png'
import envelopGray from '../logos/EmailGray.png'
import githubGray from '../logos/GitHubGray.png'
import linkedinGray from '../logos/LinkedInGray.png'
import { Button } from '@mui/material';
import React from 'react';

interface ContactProps {
    dayTime: boolean;
}

const Contact: React.FC<ContactProps> = ({dayTime}) => {
    const panelStyle: React.CSSProperties = {
        backgroundColor: dayTime ? '#FDF8DF' : 'whitesmoke', 
        height: '20rem',
        width:'20rem', 
        margin: '2rem', 
        borderRadius: 12,
    };
    
    const logoStyle: React.CSSProperties = {
        display: 'block', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginBottom: '5rem'
    };
    return (
        <div className='main-padding'>
            <div className="title-div">
                <h3 className="title" style={{color: dayTime ? 'black' : 'whitesmoke', marginBottom: -2, marginLeft: 0, fontSize: '60px'}}>Contact</h3>
                <hr style={{width: '13.5rem', borderColor: dayTime ? '#F5E186' : '#D9D9D9', borderWidth: 2, borderStyle: 'solid', marginLeft: 0, marginBottom: '2rem'}}/>
            </div>
            
            <div className="Flex" style={{justifyContent: 'space-evenly', width: '100%', marginTop: '10rem', marginLeft: '-2rem'}}>
                <div style={{...panelStyle}}>
                    <img style={{...logoStyle}} src={dayTime ? phone : phoneGray} />
                    <h3 style={{textAlign: 'center'}}>360-790-6401</h3>
                </div>
                <div style={{...panelStyle}}>
                    <img style={{...logoStyle}} src={dayTime ? envelop : envelopGray} />
                    <h3 style={{textAlign: 'center'}}>stephenshin1@hotmail.com</h3>
                </div>
                <div style={{...panelStyle}}>
                    <img style={{...logoStyle}} src={dayTime ? github : githubGray} />
                    <a href="https://github.com/shinste/" target="_blank" style={{ textDecoration: 'none' }}>
                        <Button style={{...logoStyle}} variant='contained' sx={{backgroundColor: dayTime ? '#F5E186' : '#D9D9D9', boxShadow: '3px 3px 5px 0px grey'}}>
                            Visit
                        </Button>
                    </a>
                </div>
                <div style={{...panelStyle}}>
                    <img style={{...logoStyle}} src={dayTime ? linkedin : linkedinGray} />
                    <a href="https://www.linkedin.com/in/stephen-shin-680bb0201/" target="_blank" style={{ textDecoration: 'none' }}>
                        <Button style={{...logoStyle}} variant='contained' sx={{backgroundColor: dayTime ? '#F5E186' : '#D9D9D9', boxShadow: '3px 3px 5px 0px grey'}}>
                            Visit
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;