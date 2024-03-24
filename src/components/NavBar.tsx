import { useState, useEffect } from 'react';
import NavButton from './NavButton';

interface NavProps {
  handleButtonClick: (reference: string) => void;
  detectNav: string;
}

const NavBar: React.FC<NavProps> = ({handleButtonClick, detectNav}) => {
    const [navigation, setNavigation] = useState('Home');

    useEffect(() => {
      if (detectNav !== "") {
        setNavigation(detectNav);
        console.log('change button');
      }
      
    }, [detectNav]);

    return (
      <div style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999}}>
        <div className='Flex-center'>
            <NavButton name={'Home'} button={navigation} setButton={setNavigation} handleButtonClick={handleButtonClick} />
            <NavButton name={'About Me'} button={navigation} setButton={setNavigation} handleButtonClick={handleButtonClick} />
            <NavButton name={'Projects'} button={navigation} setButton={setNavigation} handleButtonClick={handleButtonClick} />
            <NavButton name={'Contact'} button={navigation} setButton={setNavigation} handleButtonClick={handleButtonClick} />
        </div>
        <hr style={{width: '45rem', borderColor: '#F5E186', borderStyle: 'solid'}}/>
      </div>
    )
};

export default NavBar;