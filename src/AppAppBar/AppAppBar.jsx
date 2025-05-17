import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../Store/UserDataSlice';
import Cookies from 'js-cookie'

// import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: 'rgba(255,255,255,0)',
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
  height:'54px'
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const navigate = useNavigate();
  const dispatch = useDispatch();

   const userData = useSelector((state)=>state.UserData)

    const Logout =()=>{
       Cookies.remove('uid');
       dispatch(setUserData({
         name: '',
         email: '',
         username: '',
         designation: '',
         about: '',
         title: '',
         isAuthenticated: false,
       }))
     }
    


  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 10px)',
      }}
    >
      <Container maxWidth="">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0, }}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="100"
                height="80"
                viewBox="0 0 1024 1024"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                  fill="#6B8E23"
                  stroke="none"
                >
                  <path d="M4783 6471 c-23 -11 -48 -30 -57 -43 -8 -12 -71 -176 -139 -363 -69 -187 -142 -386 -163 -441 l-38 -102 -50 -6 c-28 -3 -136 -6 -239 -6 -156 0 -189 2 -193 15 -6 14 178 580 242 747 19 48 34 97 34 109 0 11 -13 34 -29 50 -25 25 -37 29 -83 29 -29 0 -107 -14 -173 -31 -499 -128 -705 -265 -705 -466 0 -135 67 -208 201 -220 106 -10 139 42 80 123 -29 40 -34 56 -32 108 2 62 137 154 319 220 84 30 92 31 92 12 0 -18 -94 -343 -158 -546 l-49 -155 -94 -13 c-128 -18 -222 -51 -345 -123 -58 -33 -108 -58 -113 -55 -4 3 -11 35 -13 71 -17 209 -196 323 -400 254 -186 -62 -363 -286 -445 -560 -24 -80 -28 -111 -27 -209 1 -133 22 -206 80 -270 67 -74 197 -106 312 -76 184 47 341 222 426 475 19 57 38 107 43 111 13 12 289 130 366 156 72 25 117 31 117 16 0 -9 -198 -592 -219 -645 -30 -78 3 -123 90 -121 55 2 141 44 158 77 6 12 61 168 122 347 61 179 117 335 125 347 18 28 37 31 283 38 l204 7 -7 -29 c-4 -15 -31 -94 -61 -174 -79 -211 -115 -359 -115 -470 0 -107 15 -151 61 -175 63 -32 210 3 221 54 3 9 -2 34 -9 56 -21 62 -16 154 16 278 26 101 174 519 452 1276 102 281 103 289 39 323 -44 24 -74 24 -127 0z m-1936 -996 c29 -20 43 -73 43 -157 0 -67 0 -68 -27 -68 -69 0 -123 67 -123 152 0 77 51 112 107 73z m-253 -260 c35 -59 100 -102 188 -124 86 -23 86 -18 23 -146 -94 -192 -228 -282 -314 -210 -43 37 -54 82 -49 194 4 75 11 111 33 161 26 63 83 170 90 170 2 0 15 -20 29 -45z" />
                  <path d="M1635 6366 c-172 -44 -312 -141 -449 -310 -183 -226 -285 -442 -352 -748 -24 -108 -27 -146 -28 -308 -1 -211 8 -259 74 -397 45 -95 103 -159 182 -199 46 -24 67 -29 158 -32 217 -8 362 60 487 231 19 26 37 46 39 44 5 -5 -40 -161 -72 -252 -38 -105 -79 -186 -128 -253 -97 -131 -264 -162 -370 -68 -62 55 -155 18 -172 -68 -10 -58 11 -115 65 -166 65 -63 126 -83 243 -78 120 4 200 39 294 130 157 150 227 307 348 773 75 291 106 383 187 557 32 69 59 137 59 151 0 13 -9 36 -21 51 -25 32 -67 34 -139 6 -81 -32 -217 -67 -344 -90 -128 -22 -130 -23 -163 -53 -35 -32 -32 -100 6 -138 38 -37 90 -39 198 -4 91 29 103 30 103 10 0 -23 -120 -252 -175 -335 -102 -154 -211 -230 -329 -230 -188 0 -286 188 -255 490 27 277 125 548 285 793 189 289 429 400 532 247 21 -31 23 -44 20 -120 -3 -74 -8 -93 -36 -141 -18 -31 -32 -71 -32 -88 0 -55 55 -90 124 -77 47 9 119 76 144 133 99 230 -3 472 -227 537 -64 19 -185 20 -256 2z" />
                  <path d="M7539 6337 c-63 -34 -99 -90 -105 -163 -4 -49 -1 -66 18 -98 27 -45 78 -76 127 -76 47 0 112 41 146 92 39 58 46 147 16 196 -45 71 -123 90 -202 49z" />
                  <path d="M9000 5960 c-81 -27 -129 -86 -234 -286 -129 -244 -178 -323 -266 -433 -156 -194 -290 -297 -416 -320 -113 -22 -204 37 -204 131 0 21 7 25 68 36 83 16 229 86 299 144 147 123 233 293 221 442 -8 97 -54 168 -138 212 -54 29 -169 25 -240 -8 -197 -90 -377 -335 -445 -602 -14 -54 -25 -114 -25 -133 0 -29 -11 -46 -62 -100 -119 -124 -174 -150 -198 -92 -28 66 11 210 169 628 66 174 66 212 1 246 -33 17 -112 20 -141 5 -27 -15 -35 -34 -139 -320 -51 -140 -104 -277 -117 -305 -53 -104 -219 -293 -273 -310 -17 -5 -27 -3 -37 11 -25 33 -12 79 128 469 39 108 44 129 44 210 0 78 -3 96 -25 135 -14 24 -45 58 -68 75 -39 27 -51 30 -115 30 -55 -1 -84 -7 -120 -24 -57 -28 -142 -103 -182 -161 l-29 -42 -19 55 c-24 73 -77 123 -141 132 -111 17 -239 -54 -317 -176 -17 -27 -34 -48 -36 -45 -2 2 3 28 11 57 22 74 20 106 -9 134 -19 20 -34 25 -77 25 -56 0 -96 -15 -109 -40 -4 -8 -20 -43 -35 -78 -15 -35 -41 -81 -58 -102 -28 -36 -163 -150 -176 -150 -3 0 -12 28 -19 62 -24 116 -85 200 -173 238 -73 31 -180 26 -260 -13 -160 -78 -319 -301 -394 -552 -22 -73 -28 -111 -28 -200 -1 -124 15 -185 64 -254 55 -75 194 -121 306 -100 200 37 384 261 450 549 16 70 16 71 67 96 29 15 73 44 100 66 26 21 47 35 47 30 0 -5 -45 -142 -100 -305 -55 -162 -100 -309 -100 -325 0 -43 31 -65 99 -70 73 -5 123 16 144 61 8 18 43 119 77 226 97 304 183 476 286 571 55 51 121 82 145 70 42 -23 30 -99 -55 -331 -134 -367 -171 -501 -148 -535 15 -23 52 -34 111 -34 98 0 108 14 181 260 82 275 129 390 213 515 52 79 113 142 159 166 125 64 123 -43 -7 -371 -89 -226 -95 -247 -95 -335 1 -254 244 -293 462 -74 l77 77 7 -34 c11 -58 57 -119 109 -144 100 -49 227 -6 357 120 l77 75 33 -45 c66 -90 175 -140 303 -140 139 0 257 47 405 161 l92 71 15 -24 c38 -55 128 -131 191 -161 172 -80 400 -25 493 121 96 152 90 330 -26 671 -46 138 -46 182 0 247 19 27 35 58 35 70 0 33 -37 72 -78 84 -47 13 -47 13 -112 -10z m-750 -267 c18 -23 21 -36 16 -71 -16 -115 -134 -264 -258 -327 -115 -57 -132 -47 -98 56 53 156 157 305 242 348 56 28 72 27 98 -6z m693 -252 c45 -141 67 -252 67 -329 -1 -230 -245 -243 -329 -17 l-21 57 38 59 c21 32 74 124 118 204 43 80 81 145 84 145 3 0 22 -53 43 -119z m-3715 83 c12 -8 29 -28 37 -44 16 -31 21 -125 6 -134 -15 -9 -96 38 -108 64 -15 31 -17 85 -3 111 13 23 38 24 68 3z m-220 -255 c32 -39 119 -79 187 -86 l57 -6 -5 -35 c-4 -19 -27 -77 -53 -130 -54 -111 -124 -189 -195 -216 -42 -16 -49 -16 -83 -2 -58 24 -79 83 -74 200 5 96 37 195 95 296 24 40 27 42 37 26 6 -10 21 -31 34 -47z" />
                  <path d="M6365 4369 c-209 -9 -601 -34 -765 -49 -727 -67 -1422 -157 -1801 -234 -96 -20 -239 -47 -319 -61 -259 -46 -335 -73 -370 -129 -31 -52 -27 -101 14 -142 59 -59 120 -53 501 45 432 111 1065 213 1895 305 539 60 905 86 1485 107 285 10 359 9 545 -5 118 -9 255 -25 304 -36 134 -30 161 -27 185 17 16 30 -8 77 -50 98 -39 21 -178 51 -299 65 -254 29 -876 38 -1325 19z" />
                </g>
              </svg>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              
              <Button variant="text" color="info" size="small">
                Contact
              </Button>
              <Button variant="text" color="info" size="small">
                About
              </Button>
              <Button variant="text" color="info" size="small">
                Create
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                Posts
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                Blog
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
           {!userData.isAuthenticated &&
            <>
             <Button color="primary" variant="text" size="small"
            onClick={()=>{
              navigate('/signin')
            }}
            >
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small"
              onClick={()=>{
              navigate('/signup')
            }}
            >
              Sign up
            </Button></>
           }
           

           {
            userData.isAuthenticated &&
             <>
             <Button color="primary" variant="text" size="small"
           
            >
              {userData.name.split(" ")[0]}
            </Button>
            <Button color="primary" variant="contained" size="small"
              onClick={()=>{
             Logout()
            }}
            >
              Logout
            </Button></>
           }
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
           
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem>Explore</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth
                  onClick={()=>{
                    navigate('/signin')
                  }}
                  >
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem
                 onClick={()=>{
                  navigate('/signup')
                  console.log('Hello')
                }}
                >
                  <Button color="primary" variant="outlined" fullWidth
                 
                  >
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}