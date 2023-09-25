import {
    Button,
    Box,
    Grid,
    Stack,
    Slide,
    Card,
    CardActions,
    CardContent,
    Typography,
    IconButton,
} from '@mui/material';
import VanishVault from '../assets/VanishVault.svg';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useRef, useState } from 'react';

const Home = () => {
    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

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
            <Box
                sx={{
                    mt: 3,
                    maxWidth: '100vw',
                    textAlign: 'center',
                    backgroundColor: '#D8E5F0',
                    overflow: 'hidden',
                }}
                ref={containerRef1}
            >
                <Typography sx={{ fontSize: '30px', py: 3 }}>
                    What is this service?
                    <IconButton onClick={() => setChecked1((prev) => !prev)}>
                        {!checked2 ? (
                            <ArrowDropDownIcon sx={{ fontSize: '40px' }} />
                        ) : (
                            <ArrowDropUpIcon sx={{ fontSize: '40px' }} />
                        )}
                    </IconButton>
                </Typography>
                {checked1 ? (
                    <Slide in={checked1} container={containerRef1.current}>
                        <Typography sx={{ px: 5, pb: 3 }}>
                            A web-based application that allows authenticated
                            users to create secure private rooms for sharing
                            sensitive information. Once all assigned users have
                            accessed the shared data within these rooms, the
                            information is automatically and permanently deleted
                            from the database, ensuring the highest level of
                            data privacy and security.
                        </Typography>
                    </Slide>
                ) : null}
            </Box>
            <Box
                sx={{
                    mt: 3,
                    maxWidth: '100vw',
                    textAlign: 'center',
                    backgroundColor: '#D8E5F0',
                    overflow: 'hidden',
                }}
                ref={containerRef2}
            >
                <Typography sx={{ fontSize: '30px', py: 3 }}>
                    How can we help you?
                    <IconButton onClick={() => setChecked2((prev) => !prev)}>
                        {!checked2 ? (
                            <ArrowDropDownIcon sx={{ fontSize: '40px' }} />
                        ) : (
                            <ArrowDropUpIcon sx={{ fontSize: '40px' }} />
                        )}
                    </IconButton>
                </Typography>

                {checked2 ? (
                    <Slide in={checked2} container={containerRef2.current}>
                        <Typography sx={{ px: 5, pb: 3 }}>
                            -Allow authenticated users to create secure private
                            rooms for sharing sensitive information.
                            <br />
                            - Once all assigned users have accessed the shared
                            data within these rooms, the information is
                            automatically and permanently deleted from the
                            database, ensuring the highest level of data privacy
                            and security.
                            <br />
                            - Vanish Vault can be used for sending messages from
                            patient to provider in compliance with PHIPA
                            (personal health information protection act).
                            <br />
                            - Instead of using email or Teams, employees in HR
                            can send employee based information using Vanish
                            Vault .<br />
                            - Vanish Vault can be used for sending sensitive
                            customer information in SMB in compliance with GDPR
                            (general data protection regulation).
                            <br />
                            - For digital marketing departments, Vanish Vault
                            can be used to send shared account details.
                            <br />
                            - Police services can use Vanish Vault in SARs
                            (Search and Rescue) missions to communicate
                            important location and time details from their
                            secure servers to third party teams.
                            <br />
                        </Typography>
                    </Slide>
                ) : null}
            </Box>

            <Grid
                container
                sx={{ px: 3, mt: 2 }}
                columnSpacing={3}
                rowSpacing={2}
            >
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            minWidth: 275,
                            bgcolor: '#00549a',
                            color: 'white',
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
                            <Typography
                                sx={{ fontSize: '40px', wordWrap: 'nowrap' }}
                            >
                                Glad to have you here!
                            </Typography>
                        </CardContent>
                        <CardActions
                            sx={{
                                justifyContent: 'center',
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
                                    mb: 2,
                                    fontWeight: 700,
                                }}
                            >
                                Sign Up
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            minWidth: 275,
                            bgcolor: '#00549a',
                            color: 'white',
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
                            }}
                        >
                            <Button
                                component={Link}
                                to='/signin'
                                sx={{
                                    px: 5,
                                    mb: 2,
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
