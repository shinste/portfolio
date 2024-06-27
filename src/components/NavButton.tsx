import {Button, Box} from '@mui/material';

interface ButtonProps {
    name: string
    button: string
    setButton: React.Dispatch<React.SetStateAction<string>>
    handleButtonClick: (reference: string) => void
    day: boolean
}
const NavButton: React.FC<ButtonProps> =  ({name, button, setButton, handleButtonClick, day}) => {
    let color = '#F5E186';
    if (!day) {
        color = '#D9D9D9';
    }
    return (
        <Button variant={button === name ? 'contained' : 'text'} onClick={() => {setButton(name)
                                                                                 handleButtonClick(name)}} sx={{backgroundColor: button === name ? color : null,
                                                                                                                '&:hover': {
                                                                                                                    backgroundColor: color,
                                                                                                                },
                                                                                                                '&:active': {
                                                                                                                    backgroundColor: color,
                                                                                                                },
                                                                                                                boxShadow: 'none',
                                                                                                                color: 'black',
                                                                                                                margin: 2,
                                                                                                                marginTop: '30px',
                                                                                                                width: '9rem',
                                                                                                                fontSize: '18px',
                                                                                                                }}>{name}</Button>
    );
}

export default NavButton;