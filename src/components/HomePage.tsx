import { Typography } from "@mui/material";
import duck from '../logos/duck.png'
import cloud1 from '../logos/cloud1.png'
import cloud2 from '../logos/cloud2.png'
import cloud3 from '../logos/cloud3.png'
import cloud4 from '../logos/cloud4.png'
import cloud5 from '../logos/cloud5.png'
import cloud6 from '../logos/cloud6.png'
import smallbird from '../logos/birdsmall.png'
const HomePage = () => {

    const panelStyle: React.CSSProperties = {
        backgroundColor: '#FDF8DF', 
        height: '30rem',
        width:'20rem', 
        margin: '2rem', 
        borderRadius: 12,
      };

    return (
        <div style={{marginBottom: '19rem'}}>
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
            <div className="fade">
                <img style={{ position: 'absolute', top: '38rem', left: 0, zIndex: -1, width: '400px'}} src={cloud1}/>
                <img style={{ position: 'absolute', top: '44rem', left: '22rem', zIndex: -1, width: '150px'}} src={cloud2}/>
                <img style={{ position: 'absolute', top: '39rem', left: '30rem', zIndex: -1, width: '400px'}} src={cloud3}/>
                <img style={{ position: 'absolute', top: '44rem', left: '53rem', zIndex: -1, width: '400px'}} src={cloud4}/>
                <img style={{ position: 'absolute', top: '44rem', left: '72rem', zIndex: -1}} src={smallbird}/>
                <img style={{ position: 'absolute', top: '41rem', left: '77.5rem', zIndex: -1, width: '420px'}} src={cloud5}/>
                <img style={{ position: 'absolute', top: '43rem', left: '100rem', zIndex: -1, width: '300px'}} src={cloud6}/>
            </div>
        </div>
    );
}

export default HomePage;