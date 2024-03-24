import phone from '../logos/Phone.png'
import envelop from '../logos/Envelope.png'
import github from '../logos/GitHub2.png'
import linkedin from '../logos/LinkedIn.png'
import { Button } from '@mui/material';

const panelStyle: React.CSSProperties = {
    backgroundColor: '#FDF8DF', 
    height: '50vh',
    width:'20vw', 
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
        <div className="Flex" style={{justifyContent: 'space-evenly', width: '80%', margin: 'auto', marginTop: '10rem'}}>
            <div style={{...panelStyle}}>
                <img style={{...logoStyle}} src={phone} />
                <h2 style={{textAlign: 'center'}}>360-790-6401</h2>
            </div>
            <div style={{...panelStyle}}>
                <img style={{...logoStyle}} src={envelop} />
                <h3 style={{textAlign: 'center'}}>stephenshin1@hotmail.com</h3>
            </div>
            <div style={{...panelStyle}}>
                <img style={{...logoStyle}} src={github} />
                <Button style={{...logoStyle}} variant='contained' sx={{backgroundColor: '#F5E186'}}>
                    Visit
                </Button>
            </div>
            <div style={{...panelStyle}}>
                <img style={{...logoStyle}} src={linkedin} />
                <Button style={{...logoStyle}} variant='contained' sx={{backgroundColor: '#F5E186'}}>
                    Visit
                </Button>
            </div>
        </div>
    );
}

export default Contact;