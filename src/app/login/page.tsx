'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dash from '@/components/dash';
import Modal from '@mui/material/Modal';
import { useRouter } from 'next/navigation'
import Register from './Register';
// import axios from 'axios';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 500,
   bgcolor: 'background.paper',
   border: '',
   boxShadow: 24,
   pt: 2,
   px: 4,
   pb: 3,
};

export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const router = useRouter()

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    }

    const handleLogin =  () =>{
      //   try {
      //       const response = await axios.post('http://localhost:3001/user', {
      //          username: username,
      //          password: password,
      //       });
      //       if (response.status === 200) {
      //           alert("login success")
      //       } else {
      //          console.error('Login failed.');
      //       }
      //    } catch (error) {
      //       console.error(error);
      //    }
      router.push('/', { scroll: false })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid item xs={6} md={5} margin="auto">
               <Card
                  sx={{
                     margin: 'auto',
                     minWidth: 275,
                     maxWidth: 375,
                     mb: 10,
                     boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
                     borderRadius: 2,
                  }}
               >
                    <FormControl sx={{ m: 2, width: '35ch', mt: 4 }} variant="outlined">
                        <TextField
                           id="outlined-multiline-flexible"
                           label="User Name"
                           multiline
                           maxRows={4}
                           value={username}
                           onChange={handleUsernameChange}
                        />
                     </FormControl>
                     <FormControl sx={{ m: 2, width: '35ch' }} variant="outlined">
                        <TextField
                           id="outlined-adornment-password"
                           type={showPassword ? 'text' : 'password'}
                           value={password}
                           onChange={handlePasswordChange}
                           InputProps={{
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <IconButton
                                       aria-label="toggle password visibility"
                                       onClick={handleClickShowPassword}
                                       onMouseDown={handleMouseDownPassword}
                                       edge="end"
                                    >
                                       {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                 </InputAdornment>
                              ),
                           }}
                           label="Password"
                        />
                     </FormControl>
                    <Box sx={{ textAlign: 'center' }}>
                        <button className='text-white rounded bg-blue-700/90 uppercase p-2.5 font-bold text-sm' onClick={handleLogin}>
                            Login
                        </button>
                    </Box>
                    <Dash />
                    <Box sx={{ textAlign: 'center' }}>
                        <button className='text-blue-700/90 p-1.5  rounded-sm uppercase font-bold text-sm hover:bg-sky-50'>forgot password</button>
                    </Box>
                    <Box sx={{ textAlign: 'center',mb: 4 }}>
                     Don't have an account?
                     <button 
                     className='text-blue-700/90 p-1.5 rounded-sm uppercase font-bold text-sm hover:bg-sky-50'
                     onClick={handleOpen} 
                     >
                        Register
                     </button>
                  </Box>
               </Card>
            </Grid>
            <Modal open={open} onClose={handleClose}>
               <Box sx={style}>
                  <Register />
               </Box>
            </Modal>
        </Box>
    )
  }