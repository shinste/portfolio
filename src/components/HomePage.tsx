import { Typography } from "@mui/material";
import duck from '../logos/duck.png'
import cloud1 from '../logos/cloud1.png'
import cloud2 from '../logos/cloud2.png'
import cloud3 from '../logos/cloud3.png'
import cloud4 from '../logos/cloud4.png'
import cloud5 from '../logos/cloud5.png'
import cloud6 from '../logos/cloud6.png'
import smallbird from '../logos/birdsmall.png'
import React from "react";

interface HomePageComponents {
    dayTime: boolean;
    setDayTime: React.Dispatch<React.SetStateAction<boolean>>;
}
//Homepage component
const HomePage: React.FC<HomePageComponents> = ({dayTime,setDayTime}) => {

    const handleTransition = () => {
        const sun = document.querySelector('.sun');
        console.log(sun);
        sun?.classList.toggle('move');
        setDayTime(!dayTime);
    }

    return (
        <div style={{marginBottom: '19rem'}}>
            <div className="fade sun">
            </div>
            <div className={`slide-in ${!dayTime && 'hidden'}`}  style={{ position: 'absolute', top: '12rem', left: '17rem', zIndex: -1}}>
                <img src={duck}/>
            </div>
            <div className='Center-text Center-horizontal fade' style={{width: '33rem', marginTop: '10rem', marginLeft: '45rem'}}>
                <div className='Flex'>
                    <hr style={{width: '15rem', borderWidth: 3, borderColor: dayTime ? '#F5E186': 'whitesmoke', borderStyle: 'solid', marginLeft: 0, marginRight: '4rem'}}/>
                    <div style={{width: '1rem', height: '1rem', backgroundColor: dayTime ? '#F5E186': 'whitesmoke', marginLeft: 6, borderRadius: '50%'}}></div>
                </div>
                <div className="Flex">
                    <h3 style={{color: dayTime ? 'black': 'whitesmoke', fontSize: '60px', marginTop: -10, marginBottom: -5}}>Stephen Shın</h3>
                    <p style={{marginTop: '2.3rem', marginLeft: '1rem', color: !dayTime ? 'whitesmoke' : 'black'}}>Software Engineer</p>
                </div>
                <hr style={{width: '18.7rem', borderColor: dayTime ? '#F5E186': 'whitesmoke', borderStyle: 'solid', marginLeft: 210, borderWidth: 3}}/>
                <div id='transition-div'>
                    <div onClick={handleTransition} className={`transition-button ${!dayTime && 'night'}`}/>
                </div>
                <div id="transition-words">
                    <p style={{marginRight: '3px', fontWeight: dayTime ? 'bold' : 'lighter', color: dayTime ? 'black' : 'white', textShadow: '0 0 10px gray'}}>Day Time</p>
                    <p style={{marginLeft: '3px', fontWeight: !dayTime ? 'bold' : 'lighter', color: dayTime ? 'black' : 'white', textShadow: '0 0 10px white'}}>Night Time</p>
                </div>
            
                <div className="Flex-center Slide-sentences">
                    <p className="slide-in " style={{fontSize: '35px', marginTop: '2rem', marginBottom: 0, color: dayTime ? 'black' : '#979797'}}>I create&nbsp;<span style={{color: dayTime ? '#E1BD1A': '#848484', fontWeight: 'bold', WebkitTextStroke: '1px #FFFFFF'}}>Backend Systems</span></p>
                    <p className="slide-in slide-delay-1" style={{fontSize: '35px', marginBottom: 0, color: dayTime ? 'black' : '#979797'}}>I tailor&nbsp;<span style={{color: dayTime ? '#E1BD1A': '#848484', fontWeight: 'bold', WebkitTextStroke: '1px #FFFFFF'}}>Frontend Experiences</span></p>
                    <p className="slide-in slide-delay-2" style={{fontSize: '35px', color: dayTime ? 'black' : '#979797'}}>I provide&nbsp;<span style={{color: dayTime ? '#E1BD1A': '#848484', fontWeight: 'bold', WebkitTextStroke: '1px #FFFFFF'}}>Fullstack Solutions</span></p>
                </div>
            </div>
            <div className={`fade ${!dayTime && 'hidden'}`}>
                <img style={{ position: 'absolute', top: '38rem', left: 0, width: '400px'}} src={cloud1}/>
                <img style={{ position: 'absolute', top: '44rem', left: '22rem', width: '150px'}} src={cloud2}/>
                <img style={{ position: 'absolute', top: '39rem', left: '30rem', zIndex: -1, width: '400px'}} src={cloud3}/>
                <img style={{ position: 'absolute', top: '44rem', left: '53rem', zIndex: -1, width: '400px'}} src={cloud4}/>
                <img style={{ position: 'absolute', top: '44rem', left: '72rem'}} src={smallbird}/>
                <img style={{ position: 'absolute', top: '41rem', left: '77.5rem', width: '420px'}} src={cloud5}/>
                <img style={{ position: 'absolute', top: '43rem', left: '100rem', width: '300px'}} src={cloud6}/>
            </div>
        </div>
    );
}

export default HomePage;