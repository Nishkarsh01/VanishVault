import { Typography, Box, FormLabel, Button, Stack, Grid } from '@mui/material';
import PasswordTextFeild from '../components/PasswordTextField';
import FormikTextField from '../components/FormikTextField';
import { Link } from 'react-router-dom';

import VanishVault from '../assets/VanishVault.svg';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import BackButton from '../components/BackButton';

const SignIn = () => {
    const initialValue = {
        email: '',
        password: '',
    };

    // const { isLoading, mutate } = useMutation((payload) => api.login(payload), {
    //     onSuccess: () => {
    //         //Store e-mail address & password in window.history.state and will be fetched in 2FA
    //         navigate('/auth/2fa', {state: {email: email, password: password}});
    //     },
    //     onError: (error) => {
    //         if (error.code === 'ERR_NETWORK') {
    //             alert.error(error?.message)
    //         }

    //         if (error?.response?.status === 401) {
    //             alert.error('Invalid credentials. Please try again.');
    //         }
    //     }
    // });

    const handleLogin = (e) => {
        console.log(e);

        // mutate(payload); // Trigger API call to login
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: Yup.object({
            email: Yup.string()
                .matches(
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    'Invalid email address'
                )
                .required('Email address is required'),
            password: Yup.string().required('Please enter the password'),
        }),
        onSubmit: handleLogin,
    });

    return (
        <Box sx={{ height: '100vh', maxWidth: '100vw' }}>
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
                <Button
                    component={Link}
                    to='/'
                    sx={{
                        textDecoration: 'none',
                        color: '#00549a',
                        margin: '0 50px',
                        fontSize: '18px',
                        textTransform: 'none',
                        backgroundColor: '#F5FAFF',
                        '&:hover': {
                            color: 'white',
                            backgroundColor: '#00549a',
                        },
                    }}
                >
                    Home
                </Button>
            </Stack>
            <Grid container justifyContent='center' height='89vh'>
                <Grid item sx={{ mt: 7 }}>
                    <BackButton />
                </Grid>
                <Grid
                    xs={10}
                    md={8}
                    lg={6}
                    item
                    sx={{
                        my: 5,
                        border: '1px solid #00549a',
                        p: 2,
                        borderRadius: 5,
                    }}
                >
                    <Typography variant='h3' fontWeight='bold'>
                        Welcome back
                    </Typography>
                    <Typography sx={{ mb: 2, mt: 1, fontSize: '20px' }}>
                        Please enter your details
                    </Typography>

                    <form formik={formik} style={{ fontSize: '40px' }}>
                        <Stack>
                            <Box>
                                <FormLabel
                                    sx={{ color: 'black', fontSize: '19px' }}
                                >
                                    Email Address
                                </FormLabel>
                                <FormikTextField
                                    formik={formik}
                                    name='email'
                                    placeHolder='Please enter your registered email'
                                    sx={{ my: 1 }}
                                />
                            </Box>
                            <Box>
                                <FormLabel
                                    sx={{ color: 'black', fontSize: '19px' }}
                                >
                                    Password
                                </FormLabel>
                                <PasswordTextFeild
                                    placeholder='Enter your password'
                                    formik={formik}
                                    name='password'
                                    sx={{ my: 1 }}
                                />
                            </Box>
                            <Button
                                onClick={formik.handleSubmit}
                                disabled={!formik.isValid}
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{
                                    backgroundColor: '#00549a',
                                    '&:hover': {
                                        backgroundColor: '#54B1FF',
                                    },
                                    textTransform: 'none',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    mt: 5,
                                }}
                            >
                                Sign In
                            </Button>
                        </Stack>
                    </form>
                    <Typography
                        sx={{ mt: '1.3em' }}
                        variant='body1'
                        textAlign='right'
                    >
                        Don't have an account?{' '}
                        <Link
                            style={{ color: '#00549a', textDecoration: 'none' }}
                            to='/signup'
                        >
                            Sign up
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignIn;
