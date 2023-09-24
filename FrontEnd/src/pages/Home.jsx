import {
    Button,
    Box,
    Grid,
    Stack,
    Divider,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';
import VanishVault from '../assets/VanishVault.svg';
import { Link } from 'react-router-dom';
import SignUP from './SignUp';
import SignIn from './SignIn';

const Home = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                maxWidth: '100vw',
                m: 0,
                p: 0,
            }}
        >
            <Stack
                direction='row'
                sx={{
                    borderBottom: '2px solid black',
                }}
            >
                <Box sx={{ m: 2 }}>
                    <img src={VanishVault} />
                </Box>
            </Stack>
            <Grid container sx={{ p: 9 }}>
                <Grid item xs={5.9} justifyContent='center'>
                    <Card
                        sx={{
                            minWidth: 275,
                            bgcolor: '#00549a',
                            color: 'white',
                            height: 250,
                            borderRadius: 9,
                        }}
                    >
                        <CardContent
                            sx={{
                                textAlign: 'center',
                                fontSize: '20px',
                                pt: 2,
                            }}
                        >
                            New to the service?
                            <Typography sx={{ fontSize: '40px' }}>
                                Glad to have you here!
                            </Typography>
                        </CardContent>
                        <CardActions
                            sx={{
                                justifyContent: 'center',
                                height: 50,
                            }}
                        >
                            <Button
                                component={Link}
                                to='/signup'
                                sx={{
                                    bgcolor: 'white',
                                    fontSize: '20px',
                                    '&:hover': {
                                        bgcolor: 'lightgray',
                                    },
                                    px: 5,
                                    fontWeight: 700,
                                }}
                            >
                                Sign Up
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={0.2}></Grid>
                <Grid item xs={5.9}>
                    <Card
                        sx={{
                            minWidth: 275,
                            bgcolor: '#00549a',
                            color: 'white',
                            height: 250,
                            borderRadius: 9,
                        }}
                    >
                        <CardContent
                            sx={{
                                textAlign: 'center',
                                fontSize: '20px',
                                pt: 2,
                            }}
                        >
                            Already a member?
                            <Typography fontSize='40px'>
                                Welcome back!
                            </Typography>
                        </CardContent>
                        <CardActions
                            sx={{
                                justifyContent: 'center',
                                height: 50,
                            }}
                        >
                            <Button
                                component={Link}
                                to='/signin'
                                sx={{
                                    px: 5,
                                    bgcolor: 'white',
                                    fontSize: '20px',
                                    '&:hover': {
                                        bgcolor: 'lightgray',
                                    },
                                    fontWeight: 700,
                                }}
                            >
                                Sign In
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
