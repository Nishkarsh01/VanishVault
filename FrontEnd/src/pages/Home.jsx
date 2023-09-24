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
    const handleChange1 = () => {
        setChecked1((prev) => !prev);
    };
    const handleChange2 = () => {
        setChecked2((prev) => !prev);
    };
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
                            rem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum. Why do we use it? It is a long
                            established fact that a reader will be distracted by
                            the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop
                            publishing packages and web page editors now use
                            Lorem Ipsum as their default model text, and a
                            search for 'lorem ipsum' will uncover many web sites
                            still in their infancy. Various versions have
                            evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like).
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
                            rem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum. Why do we use it? It is a long
                            established fact that a reader will be distracted by
                            the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop
                            publishing packages and web page editors now use
                            Lorem Ipsum as their default model text, and a
                            search for 'lorem ipsum' will uncover many web sites
                            still in their infancy. Various versions have
                            evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like).
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
