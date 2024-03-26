import phone from '../logos/Phone.png'
import envelop from '../logos/Envelope.png'
import github from '../logos/GitHub2.png'
import linkedin from '../logos/LinkedIn.png'
import { Button } from '@mui/material';

const panelStyle: React.CSSProperties = {
    backgroundColor: '#FDF8DF', 
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

const Contact = () => {
    return (
        <div>
            <div style={{width: '70rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '10rem'}}>
                <h3 style={{color: 'black', fontSize: '60px', marginBottom: -2}}>Contact</h3>
                <hr style={{width: '13.5rem', borderColor: '#F5E186', borderWidth: 2, borderStyle: 'solid', marginLeft: 0, marginBottom: '2rem'}}/>
            </div>
            
            <div className="Flex" style={{justifyContent: 'space-evenly', width: '80%', margin: 'auto', marginTop: '10rem'}}>
                <div style={{...panelStyle}}>
                    <img style={{...logoStyle}} src={phone} />
                    <h3 style={{textAlign: 'center'}}>360-790-6401</h3>
                </div>
                <div style={{...panelStyle}}>
                    <img style={{...logoStyle}} src={envelop} />
                    <h3 style={{textAlign: 'center'}}>stephenshin1@hotmail.com</h3>
                </div>
                <div style={{...panelStyle}}>
                    <img style={{...logoStyle}} src={github} />
                    <a href="https://github.com/shinste/" target="_blank" style={{ textDecoration: 'none' }}>
                        <Button style={{...logoStyle}} variant='contained' sx={{backgroundColor: '#F5E186', boxShadow: '3px 3px 5px 0px grey'}}>
                            Visit
                        </Button>
                    </a>
                </div>
                <div style={{...panelStyle}}>
                    <img style={{...logoStyle}} src={linkedin} />
                    <a href="https://www.linkedin.com/feed/" target="_blank" style={{ textDecoration: 'none' }}>
                        <Button style={{...logoStyle}} variant='contained' sx={{backgroundColor: '#F5E186', boxShadow: '3px 3px 5px 0px grey'}}>
                            Visit
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;