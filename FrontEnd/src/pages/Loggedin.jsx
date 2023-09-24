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
    Select,
    MenuItem,
} from '@mui/material';
import VanishVault from '../assets/VanishVault.svg';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import NotificationTab from '../components/NotificationTab';
import MessageDialog from '../components/MessageDialog';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Loggedin = () => {
    const navigate = useNavigate();

    const [notes, setNotes] = useState([]);
    const [msg, setMsg] = useState('');
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [outgoing, setOutgoing] = useState('');
    const [recipient, setRecipient] = useState('');
    const [id, setId] = useState('');
    const [flag, setFlag] = useState(false);

    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [names, setNames] = useState([
        'John',
        'Alice',
        'Bob',
        'Emma',
        'David',
        'Olivia',
        'Sophia',
        'Liam',
        'Ava',
        'Ethan',
        'Mia',
        'Noah',
        'Isabella',
        'James',
        'Charlotte',
        'Logan',
        'Ella',
        'Michael',
        'Grace',
    ]);

    const logoutHandle = () => {
        localStorage.clear();
        navigate('/');
    };

    const readNote = async () => {
        const data = await axios('http://localhost:5010/note/read/' + id, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token,
            },
        });
        setMsg(data.data);
    };

    const fetchNotes = async () => {
        const data = await axios('http://localhost:5010/note/all', {
            headers: {
                Authorization: 'Bearer ' + userInfo.token,
            },
        });
        setNotes(data.data);
    };

    useEffect(() => {
        userInfo = JSON.parse(localStorage.getItem('userInfo'));
        fetchNotes();
    }, [msg]);

    useEffect(() => {
        //console.log(id);
        if (id) {
            readNote();
            setOpen(true);
        }
    }, [id]);

    const handleSearch = async (e) => {
        const data = await axios('http://localhost:5010/user/' + search, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token,
            },
        });

        setNames(data.data);
        setFlag(true);
        console.log(search);
    };

    const handleOutgoing = async (e) => {
        const data = await axios.post(
            'http://localhost:5010/note/create',
            {
                receiverEmail: recipient,
                content: outgoing,
            },
            {
                headers: {
                    Authorization: 'Bearer ' + userInfo.token,
                },
            }
        );
        if (data) alert('Sent succesfully');

        setFlag(false);
        setSearch('');
        setRecipient('');
        setOutgoing('');
    };

    return (
        <Box sx={{ height: '100vh', maxWidth: '100vw' }}>
            <MessageDialog
                open={open}
                setId={setId}
                setOpen={setOpen}
                message={msg}
                setMsg={setMsg}
            />
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
                        {userInfo ? userInfo.name : ''}
                    </Typography>
                    <Button
                        onClick={logoutHandle}
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
                                {notes
                                    ? notes.map((val, index) => (
                                          <NotificationTab
                                              key={val._id}
                                              sender={val}
                                              index={index + 1}
                                              setId={setId}
                                          />
                                      ))
                                    : ''}
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
                            <Stack direction='row' spacing={1}>
                                <TextField
                                    value={search}
                                    fullWidth
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }}
                                    placeholder='Search for users on the network'
                                />
                                <Button
                                    variant='outlined'
                                    onClick={handleSearch}
                                >
                                    Search
                                </Button>
                            </Stack>
                            {flag ? (
                                <Select
                                    value={recipient}
                                    onChange={(e) => {
                                        setRecipient(e.target.value);
                                    }}
                                    displayEmpty
                                >
                                    <MenuItem disabled value=''>
                                        Please select the person you want to
                                        send a message.
                                    </MenuItem>
                                    {names.map((val, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                value={val.email}
                                            >
                                                {val.name} // {val.email}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            ) : null}
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
