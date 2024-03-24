import {Button, Box} from '@mui/material';

interface ButtonProps {
    name: string
    button: string,
    setButton: React.Dispatch<React.SetStateAction<string>>
    handleButtonClick: (reference: string) => void;
}
const NavButton: React.FC<ButtonProps> =  ({name, button, setButton, handleButtonClick}) => {
    return (
        <Button variant={button === name ? 'contained' : 'text'} onClick={() => {setButton(name)
                                                                                 handleButtonClick(name)}} sx={{backgroundColor: button === name ? '#F5E186' : null,
                                                                                                                '&:hover': {
                                                                                                                    backgroundColor: '#F5E186', // Background color on hover
                                                                                                                },
                                                                                                                '&:active': {
                                                                                                                    backgroundColor: '#F5E186', // Background color when clicked
                                                                                                                },
                                                                                                                color: 'black',
                                                                                                                margin: 2,
                                                                                                                width: '9rem',
                                                                                                                fontSize: '18px',
                                                                                                                }}>{name}</Button>
    );
}

export default NavButton;