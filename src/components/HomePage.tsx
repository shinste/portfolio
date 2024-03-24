import { Typography } from "@mui/material";
import duck from '../logos/duck.png'
const HomePage = () => {
    return (
        <div style={{marginBottom: '22rem'}}>
            <div className="fade" style={{ position: 'absolute', width: '25rem', height: '25rem', top: '-6rem', left: '-10rem', zIndex: -1, backgroundColor: '#F5E186', borderRadius: '50%'}}>
            </div>
            <div className="slide-in" style={{ position: 'absolute', top: '12rem', left: '17rem', zIndex: -1}}>
                <img src={duck}/>
            </div>
            <div className='Center-text Center-horizontal fade' style={{width: '33rem', marginTop: '10rem', marginLeft: '45rem'}}>
                <div className='Flex'>
                    <hr style={{width: '15rem', borderWidth: 3, borderColor: '#F5E186', borderStyle: 'solid', marginLeft: 0, marginRight: '4rem'}}/>
                    <div style={{width: '1rem', height: '1rem', backgroundColor: '#F5E186', marginLeft: 6, borderRadius: '50%'}}></div>
                </div>
                <div className="Flex">
                    <h3 style={{color: 'black', fontSize: '60px', marginTop: -10, marginBottom: -5}}>Stephen Shın</h3>
                    <p style={{marginTop: '2.3rem', marginLeft: '1rem'}}>Software Engineer</p>
                </div>
                
                <hr style={{width: '18.7rem', borderColor: '#F5E186', borderStyle: 'solid', marginLeft: 210, borderWidth: 3}}/>
                <div className="Flex-center" style={{flexDirection: 'column', color: '#404040'}}>
                    <p className="Flex slide-in" style={{fontSize: '35px', marginTop: '5rem', marginBottom: 0}}>I Create&nbsp;<span style={{color: '#E1BD1A', fontWeight: 'bold'}}>Backend Systems</span></p>
                    <p className="Flex slide-in slide-delay-1" style={{fontSize: '35px', marginBottom: 0}}>I Tailor&nbsp;<span style={{color: '#E1BD1A', fontWeight: 'bold'}}>Frontend Experiences</span></p>
                    <p className="Flex slide-in slide-delay-2" style={{fontSize: '35px'}}>I Provide&nbsp;<span style={{color: '#E1BD1A', fontWeight: 'bold'}}>Fullstack Solutions</span></p>
                </div>
            </div>
            {/* <div className="Flex-vertical" style={{marginTop: 80, color: '#404040'}}>
                <div className="Flex slide-in" style={{marginBottom: 100, marginTop: 80}}>
                    <Typography p={1} ml={'38vw'} >I Tailor</Typography> <div style={{backgroundColor: '#F5E186', borderRadius: 8}}><Typography p={1}>FRONTEND</Typography></div> <Typography p={1}>Interfaces</Typography>
                </div>
                <div className="Flex slide-in slide-delay-1" style={{marginBottom: 100}}>
                    <Typography p={1} ml={'43.8vw'} >I Create</Typography> <div style={{backgroundColor: '#F5E186', borderRadius: 8}}><Typography p={1}>BACKEND</Typography></div> <Typography p={1}>Systems</Typography>
                </div>
                <div className="Flex slide-in slide-delay-2">
                    <Typography p={1} ml={'49.5vw'} >I Provide</Typography> <div style={{backgroundColor: '#F5E186', borderRadius: 8}}><Typography p={1}>FULLSTACK</Typography></div> <Typography p={1}>Solutions</Typography>
                </div>
            </div> */}
        </div>
    );
}

export default HomePage;