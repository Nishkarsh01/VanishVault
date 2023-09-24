import { Typography, Box, FormLabel, Button, Stack, Grid } from '@mui/material';
import PasswordTextFeild from '../components/PasswordTextField';
import FormikTextField from '../components/FormikTextField';
import { Link } from 'react-router-dom';

import VanishVault from '../assets/VanishVault.svg';

import * as Yup from 'yup';
import { useFormik } from 'formik';

const SignUp = () => {
    const initialValue = {
        email: '',
        password1: '',
        password2: '',
        firstName: '',
        lastName: '',
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
            password1: Yup.string()
                .required('Please enter the password')
                .min(8, 'Password must be at least 8 characters long')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    'Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character'
                ),
            password2: Yup.string()
                .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                .required('Confirm your password please'),
            firstName: Yup.string().required('Pleas enter your first name'),
            lastName: Yup.string().required('Please enter your last name'),
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
            <Grid container justifyContent='center' minHeight='89vh'>
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
                    <Typography variant='h4' fontWeight='bold'>
                        We're glad to have you here!
                    </Typography>
                    <Typography sx={{ mb: 2, mt: 1, fontSize: '18px' }}>
                        Please enter your details to sign up with our service.
                    </Typography>

                    <form formik={formik} style={{}}>
                        <Stack>
                            <Grid container columnSpacing={5}>
                                <Grid item xs={12} md={6}>
                                    <FormLabel
                                        sx={{
                                            color: 'black',
                                            fontSize: '19px',
                                        }}
                                    >
                                        First Name
                                    </FormLabel>
                                    <FormikTextField
                                        formik={formik}
                                        name='firstName'
                                        placeHolder='Please enter your first name'
                                        sx={{ my: 1 }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormLabel
                                        sx={{
                                            color: 'black',
                                            fontSize: '19px',
                                        }}
                                    >
                                        Last Name
                                    </FormLabel>
                                    <FormikTextField
                                        formik={formik}
                                        name='lastName'
                                        placeHolder='Please enter your last  name'
                                        sx={{ my: 1 }}
                                    />
                                </Grid>
                            </Grid>
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
                                    name='password1'
                                    sx={{ my: 1 }}
                                />
                            </Box>
                            <Box>
                                <FormLabel
                                    sx={{ color: 'black', fontSize: '19px' }}
                                >
                                    Confirm Password
                                </FormLabel>
                                <PasswordTextFeild
                                    placeholder='Please confirm your password'
                                    formik={formik}
                                    name='password2'
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
                                Sign Up
                            </Button>
                        </Stack>
                    </form>
                    <Typography
                        sx={{ mt: '1.3em' }}
                        variant='body1'
                        textAlign='right'
                    >
                        Already have an account?{' '}
                        <Link
                            style={{ color: '#00549a', textDecoration: 'none' }}
                            to='/signup'
                        >
                            Sign in
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignUp;
