import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { CompleteUserProfile, UserSignUp } from '../../ApiCall';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [profileCompleteForm,setProfileCompleteForm] = React.useState(false);
  const [UserEmail,setUserEmail] = React.useState('');
  const [signingUp,setSigningUp] = React.useState(false)
  const [completing,setcompleting] = React.useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (nameError || emailError || passwordError) {
      return;
    }
    const data = new FormData(event.currentTarget);
    // console.log({
    //   name: data.get('name'),
    //   lastName: data.get('lastName'),
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    const name = data.get('name');
    const email = data.get('email')
    const usernamearray = data.get('email').split('@')
    const username = usernamearray[0];
    const password = data.get('password')

    setUserEmail(email)

setSigningUp(true)
    const response = await UserSignUp(name,email,username,password);

    if(response.data.msg==='User Already exists'){
      setPasswordError(true);
      setPasswordErrorMessage('User Already exists');
    }
    else{
      setPasswordErrorMessage(response.data.msg);
      setProfileCompleteForm(true)
    }

    setSigningUp(false)
  };

  const validateInputs2 = () =>{
    const about = document.getElementById('about')
    const title = document.getElementById('title')
    const designation = document.getElementById('designation')

    let isValid = true;

    
    if (!designation.value) {
      setEmailError(true);
      setEmailErrorMessage('Please enter your workplace');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!about.value) {
      setPasswordError(true);
      setPasswordErrorMessage('Write something about you');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!title.value || title.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('A cool title is required');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  

  }

  const handleSubmit2 = async(event) => {
    event.preventDefault();
    if (nameError || emailError || passwordError) {
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      designation: data.get('designation'),
      about: data.get('about'),UserEmail
    });

 
    const title = data.get('title')
    const designation = data.get('desgination')
    const about = data.get('about')
    setcompleting(true)

    const response = await CompleteUserProfile(UserEmail,title,designation,about);
    console.log(response);

    if(response.data.msg ==='Error updating user'){
      setPasswordErrorMessage('Error updating user')
    }

    if(response.data.msg ==='User Updated Successfully'){
      setPasswordErrorMessage('User Profile Updated')
      navigate('/signin')
      
    }

    setcompleting(false)

  
  };




  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      {/* <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} /> */}
      {!profileCompleteForm &&
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                placeholder="Jon Snow"
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              {signingUp ?'Signing up...':'Sign up'}
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign up with Google')}
              startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </Button>
           
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <Link
              onClick={
                ()=>{
                  navigate('/signin')
                }
              }
               
                variant="body2"
                sx={{ alignSelf: 'center',
                  cursor:'pointer'
                 }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>}
      {profileCompleteForm &&
       <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(1rem, 5vw, 1.75rem)' }}
          >
          Complete Your Profile
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit2}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <TextField
                autoComplete="name"
                name="title"
                required
                fullWidth
                id="title"
                placeholder="The Solo Traveller"
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Designation</FormLabel>
              <TextField
                required
                fullWidth
                id="designation"
                placeholder="Designer"
                name="designation"
                autoComplete="designation"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">About</FormLabel>
              <TextField
                required
                fullWidth
                name="about"
                placeholder="I am a enthusiastic..."
                type="text"
                id="about"
                autoComplete="about"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
           
         
             <Button
              type="button"
              fullWidth
              variant="outlined"
              onClick={()=>{
                navigate('/signin')
              }}

            >
              Skip
            </Button>
             <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs2}
            >
              {completing?"Completing...":"Complete"}
            </Button>
         
           
          </Box>
         
          
        </Card>
      </SignUpContainer>}
    </AppTheme>
  );
}
