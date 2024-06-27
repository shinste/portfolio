import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Box} from '@mui/material';
import { useState } from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  const [dayTime, setDayTime] = useState(true);
  const body = document.body;
  body.style.transition = 'background-color 4s ease';
  document.body.style.backgroundColor = dayTime ? "#EEE5C7" : 'black';

  const [detectNav, setDetectNav] = useState('');
  const hrStyle: React.CSSProperties = {
    width: '70rem',
    border: 'none',
    marginTop: '13rem'
  };
  
  const componentRefs: {[key: string] : any}= {
        'Home': useRef(null),
        'About Me': useRef(null),
        'Projects': useRef(null),
        'Contact': useRef(null),
      };

  const handleButtonClick = (reference: string) => {
    if (componentRefs[reference] && componentRefs[reference].current) {
        componentRefs[reference].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // This uses observers to detect when the user has gone into the specified section, showing on the navigation bar component
    const observerHome = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Home section is at the top of the screen');
          setDetectNav('Home');
        }
      },
      { threshold: 0 }
    );
    const observerProjects = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Projects section is at the top of the screen');
          setDetectNav('Projects');
        }
      },
      { threshold: 0 }
    );
    const observerAbout = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('About Me section is at the top of the screen');
          setDetectNav('About Me');
        }
      },
      { threshold: 0 }
    );
    const observerContact = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Contact section is at the top of the screen');
          setDetectNav('Contact');
        }
      },
      { threshold: 0 }
    );
  
    if (componentRefs['Home'] && componentRefs['Home'].current) {
      observerHome.observe(componentRefs['Home'].current);
    }
    if (componentRefs['Projects'] && componentRefs['Projects'].current) {
      observerProjects.observe(componentRefs['Projects'].current);
    }
    if (componentRefs['About Me'] && componentRefs['About Me'].current) {
      observerAbout.observe(componentRefs['About Me'].current);
    }
    if (componentRefs['Contact'] && componentRefs['Contact'].current) {
      observerContact.observe(componentRefs['Contact'].current);
    }
    return () => {
      if (componentRefs['Home'] && componentRefs['Home'].current) {
        observerHome.unobserve(componentRefs['Home'].current);
      }
      if (componentRefs['About Me'] && componentRefs['About Me'].current) {
        observerAbout.unobserve(componentRefs['About Me'].current);
      }
      if (componentRefs['Projects'] && componentRefs['Projects'].current) {
        observerProjects.unobserve(componentRefs['Projects'].current);
      }
      if (componentRefs['Contact'] && componentRefs['Contact'].current) {
        observerContact.unobserve(componentRefs['Contact'].current);
      }
    };
    
  }, []);
  

  return (
    <div>
      <hr ref={componentRefs['Home']} style={{borderStyle: 'none'}}/>
      <header>
        <NavBar handleButtonClick={handleButtonClick} detectNav={detectNav} dayTime={dayTime}/>
      </header>
      <body>
        <div style={{width: '90%'}}>
          <HomePage dayTime={dayTime} setDayTime={setDayTime}/>
          <hr ref={componentRefs['Projects']} style={{...hrStyle}}/>
          <Projects dayTime={dayTime}/>
          <hr ref={componentRefs['About Me']} style={{...hrStyle}} />
          <AboutMe dayTime={dayTime}/>
          <hr ref={componentRefs['Contact']} style={{...hrStyle}}/>
          <Contact dayTime={dayTime}/>    
        </div>
      </body>
      <hr style={{borderStyle: 'none', marginTop: '6.7rem'}}/>
    </div>
  );
}

export default App; 
