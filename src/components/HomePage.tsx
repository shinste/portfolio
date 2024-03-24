import { Typography } from "@mui/material";
import duck from '../logos/duck.png'
const HomePage = () => {

    return (
        <div>
            <div className="fade" style={{ position: 'absolute', width: '25rem', height: '25rem', top: '-6rem', left: '-10rem', zIndex: -1, backgroundColor: '#F5E186', borderRadius: '50%'}}>
            </div>
            <div className="slide-in" style={{ position: 'absolute', top: '12rem', left: '17rem', zIndex: -1}}>
                <img src={duck}/>
            </div>
            <div className='Center-text Center-horizontal fade' style={{width: '24rem', marginTop: '10rem'}}>
                <div className='Flex'>
                    <hr style={{width: '10rem', borderColor: '#F5E186', borderStyle: 'solid', marginLeft: 18, marginRight: 137}}/>
                    <div style={{width: '1rem', height: '1rem', backgroundColor: '#F5E186', marginLeft: 6, borderRadius: '50%'}}></div>
                </div>
                <h3 style={{color: 'black', fontSize: '60px', marginTop: -10, marginBottom: -5}}>Stephen Shın</h3>
                <hr style={{width: '10rem', borderColor: '#F5E186', borderStyle: 'solid', marginLeft: 210}}/>
                <div className="Flex-center" style={{color: '#404040'}}>
                    <Typography mr={2} style={{fontSize: '20px'}}>Frontend</Typography>
                    <hr style={{marginLeft: 0, marginRight: 0, height: '1rem', borderStyle: 'solid', borderColor: '#FDF8DF'}}/>
                    <Typography mx={2} style={{fontSize: '20px'}}>Backend</Typography>
                    <hr style={{marginLeft: 0, marginRight: 0, height: '1rem', borderStyle: 'solid', borderColor: '#FDF8DF'}}/>
                    <Typography ml={2} style={{fontSize: '20px'}}>Fullstack</Typography>
                </div>
            </div>
            <div className="Flex-vertical" style={{marginTop: 80, color: '#404040'}}>
                <div className="Flex slide-in" style={{marginBottom: 100, marginTop: 80}}>
                    <Typography p={1} ml={'38vw'} >I Tailor</Typography> <div style={{backgroundColor: '#F5E186', borderRadius: 8}}><Typography p={1}>FRONTEND</Typography></div> <Typography p={1}>Interfaces</Typography>
                </div>
                <div className="Flex slide-in slide-delay-1" style={{marginBottom: 100}}>
                    <Typography p={1} ml={'43.8vw'} >I Create</Typography> <div style={{backgroundColor: '#F5E186', borderRadius: 8}}><Typography p={1}>BACKEND</Typography></div> <Typography p={1}>Systems</Typography>
                </div>
                <div className="Flex slide-in slide-delay-2">
                    <Typography p={1} ml={'49.5vw'} >I Provide</Typography> <div style={{backgroundColor: '#F5E186', borderRadius: 8}}><Typography p={1}>FULLSTACK</Typography></div> <Typography p={1}>Solutions</Typography>
                </div>
            </div>
        </div>
    );
}

export default HomePage;