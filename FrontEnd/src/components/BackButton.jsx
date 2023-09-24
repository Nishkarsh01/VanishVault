import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const BackButton = () => {
    return (
        <IconButton
            component={Link}
            to={-1}
            sx={{
                '&:hover': {
                    backgroundColor: '#DDE7F0',
                },
                color: '#00549a',
                backgroundColor: 'white',
                borderRadius: '60px',
                margin: '0 15px 5px 0',
            }}
        >
            <KeyboardArrowLeftIcon sx={{ fontSize: '40px' }} />
        </IconButton>
    );
};

export default BackButton;
