import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Box
            sx={{ maxWidht: '100vw', minHeight: '100vh' }}
            alignItems='center'
            justifyContent='center'
        >
            <Typography>
                <Button component={Link} to={-1}>
                    {'<'}
                </Button>
                Ooopsieess wrong address
            </Typography>
            <Typography variant='h1'>404</Typography>
        </Box>
    );
};

export default NotFound;
