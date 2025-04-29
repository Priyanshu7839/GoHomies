import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignIn from './sign-in/SignIn.tsx';
import LandingPage from './Pages/LandingPage.jsx';
import { BrowserRouter } from 'react-router';
import Routers from './Routes'

export default function App() {
  return (
   <BrowserRouter>
    <Routers/>
   </BrowserRouter>
  );
}
