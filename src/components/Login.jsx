import React from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from 'react';
import {CgMathPlus} from "react-icons/cg"

function Login() {
    const [modal, setModal] = useState(false);
  
    const openModal = () => {
      setModal(true);
    };
  
    const closeModal = () => {
      setModal(false);
    };
  
    return (
      <>
        <button onClick={openModal}>Log in</button>
  
        {modal && (
          <>
            <Container component="main" maxWidth="xs">

          <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
         
            <CgMathPlus  style={{ 
              color: '#868E96', 
              transform: 'rotate(45deg)',
              fontSize: '2rem' }}
              onClick={closeModal}
              />
            
           </div>

              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <TextField
                  name='email'
                  autoFocus
                  autoComplete="email"
                  label="Email Address"
                  required
                  fullWidth
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name='password'
                  autoComplete="current-password"
                  label="Password"
                  type='Password'
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type='submit'
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign in
                </Button>
  
                <Grid container>
                  <Grid item xs>
                    <Link href="#">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                    <Link href="#">Sign Up</Link>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </>
        )}
      </>
    );
  }
  
  export default Login;
  