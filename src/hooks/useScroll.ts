import { useEffect, useRef } from 'react';
import { useState } from 'react';

const useScroll = () => {

  const [detectNav, setDetectNav] = useState('');

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
  
  return { componentRefs, detectNav, handleButtonClick }
  
}

export default useScroll; 
