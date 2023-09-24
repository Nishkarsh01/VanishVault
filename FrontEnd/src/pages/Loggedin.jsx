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
    TextField,
} from '@mui/material';
import VanishVault from '../assets/VanishVault.svg';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import NotificationTab from '../components/NotificationTab';
import MessageDialog from '../components/MessageDialog';

const Loggedin = () => {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '7894561230',
    };

    const [id, setId] = useState('');
    const [msg, setMsg] = useState('');
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [outgoing, setOutgoing] = useState('');

    const notifications = [];

    const handleApiCall2 = (e) => {
        console.log(id);
    };

    useEffect(() => {
        handleApiCall2();
        // get the message and setMsg and the setOpen to true
    }, [id]);

    const handleOutgoing = (e) => {
        //api call to send data and then making the value of outogin to be null
    };

    return (
        <Box sx={{ height: '100vh', maxWidth: '100vw' }}>
            <MessageDialog open={open} setOpen={setOpen} message={msg} />
            <Stack
                direction='row'
                sx={{
                    borderBottom: '2px solid black',
                }}
                alignItems='center'
                justifyContent='space-between'
            >
                <Box sx={{ m: 2 }}>
                    <img src={VanishVault} />
                </Box>
                <Stack
                    direction='row'
                    alignItems='center'
                    spacing={1}
                    sx={{ mx: 2 }}
                >
                    <Typography sx={{ fontSize: '18px' }}>
                        {user.name}
                    </Typography>
                    <Button
                        sx={{
                            textDecoration: 'none',
                            color: '#00549a',
                            fontSize: '18px',
                            textTransform: 'none',
                            backgroundColor: '#F5FAFF',
                            '&:hover': {
                                color: 'white',
                                backgroundColor: '#00549a',
                            },
                        }}
                    >
                        Logout
                    </Button>
                </Stack>
            </Stack>

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
                            color: '#00549a',
                            borderRadius: 9,
                            minHeight: '80vh',
                            border: '1px solid #00549a',
                            mb: 2,
                        }}
                    >
                        <CardContent
                            sx={{
                                fontSize: '20px',
                                pt: 2,
                            }}
                        >
                            <Typography
                                sx={{ fontSize: '40px', wordWrap: 'nowrap' }}
                            >
                                Notifications
                            </Typography>
                            The Message will self destruct once its been opened.
                            <Box sx={{ my: 2 }}>
                                {notifications.map((val, index) => {
                                    return (
                                        <NotificationTab
                                            key={val['_id']}
                                            sender={val}
                                            index={index + 1}
                                            setId={setId}
                                        />
                                    );
                                })}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            border: '1px solid #00549a',
                            minWidth: 275,
                            bgcolor: 'white',
                            color: '#00549a',
                            minHeight: '80vh',
                            borderRadius: 9,
                        }}
                    >
                        <CardContent
                            sx={{
                                fontSize: '20px',
                                pt: 2,
                            }}
                        >
                            <Typography fontSize='40px'>
                                Transfer data securely
                            </Typography>
                            The Message will self destruct once its been sent.
                        </CardContent>
                        <Stack spacing={3} sx={{ mx: 3 }}>
                            <TextField
                                value={search}
                                fullWidth
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                placeholder='Search for users on the network'
                            />
                            <TextField
                                placeholder='Please type in your message'
                                value={outgoing}
                                fullWidth
                                onChange={(e) => {
                                    setOutgoing(e.target.value);
                                }}
                            />

                            <Button
                                onClick={handleOutgoing}
                                fullWidth
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
                                Send Message
                            </Button>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Loggedin;
