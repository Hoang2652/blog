'use client'
import { Suspense, useState } from 'react';
import Loading from './loading';
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
const Card = dynamic(() => import("@mui/material/Card"));
const IconButton = dynamic(() => import("@mui/material/IconButton"));
const InputAdornment = dynamic(() => import("@mui/material/InputAdornment"));
const FormControl = dynamic(() => import("@mui/material/FormControl"));
const TextField = dynamic(() => import("@mui/material/TextField"));
const Visibility = dynamic(() => import("@mui/icons-material/Visibility"));
const VisibilityOff = dynamic(() => import("@mui/icons-material/VisibilityOff"));
const Box = dynamic(() => import("@mui/material/Box"));
const Grid = dynamic(() => import("@mui/material/Grid"));
const Modal = dynamic(() => import("@mui/material/Modal"));
const Dash = dynamic(() => import("@/components/dash"));
const Register = dynamic(() => import("./Register"));
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import './loading.css'

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
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const router = useRouter()

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    }

   // const onSuccess = (res: any) => console.log(res);
   // const onFailure = (res: any) => console.error(res);

   //  const handleLogin =  () =>{
   //    //   try {
   //    //       const response = await axios.post('http://localhost:3001/user', {
   //    //          username: username,
   //    //          password: password,
   //    //       });
   //    //       if (response.status === 200) {
   //    //           alert("login success")
   //    //       } else {
   //    //          console.error('Login failed.');
   //    //       }
   //    //    } catch (error) {
   //    //       console.error(error);
   //    //    }
   //    router.push('/', { scroll: false })
   //  }

    const handleSignFacebook = () => {
      // router.push('/api/auth/signin', { scroll: false })
      console.log('login facebook');
    }

   //  React.useEffect(() => {
   //    fetch('http://127.0.0.1:8000/api/login-execute', {
   //       method: 'POST',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'X-CSRF-TOKEN': csrfToken 
   //       },
   //       body: JSON.stringify({
   //          username: 'hoang123',
   //          password: 'hoang123'
   //       })
   //    })
   //    .then(response => response.json())
   //    .then(data => {
   //      console.log(">>data: ",data.user);
   //    })
   //    .catch(error => {
   //      console.error('Error checking login:', error);
   //    });
   //  }, []);

   const handleLogin =  () => {
      try {
         console.log('---------> vao 1')
         fetch('http://127.0.0.1:8000/api/login-execute', {
            method: 'POST',
            credentials: 'same-origin', 
            headers: {
               'Content-Type': 'application/json',
               'X-CSRF-TOKEN': 'asdasdasdsadsadsa'
            },
            body: JSON.stringify({
               username: 'hoang123',
               password: 'hoang123'
            })
         }).then((res) => res.json())
            .then((data) => {
               if (data.status === 200) {
                  console.log("win")
               } else {
               // Xử lý lỗi
               console.log("win111")
               }
            });
         // }
         // else {
         // console.log("null")
         // }
      }
      catch (error) {
         console.error('An error occurred:', error);
      }
    };

  

    return (
      <Suspense fallback={<Loading />}>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Grid item xs={6} md={5} margin="auto">
               <Card
                  sx={{
                     margin: 'auto',
                     minWidth: 275,
                     maxWidth: 375,
                     m: '150px',
                     boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
                     borderRadius: 2,
                  }}
               > 
               <form>
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
                     <button className='text-white rounded bg-blue-700/90 uppercase p-2.5 font-bold text-sm' onClick={() => handleLogin()}>
                           Login
                     </button>
                  </Box>
                  <Dash />
                  <Box sx={{ textAlign: 'center' }}>
                     <button className='text-blue-700/90 p-1.5  rounded-sm uppercase font-bold text-sm hover:bg-sky-50'>forgot password</button>
                  </Box>
                  <Box sx={{ textAlign: 'center',mb: 1 }}>
                     Don't have an account?
                     <button 
                     className='text-blue-700/90 p-1.5 rounded-sm uppercase font-bold text-sm hover:bg-sky-50'
                     onClick={handleOpen} 
                     >
                        Register
                     </button>
                  </Box>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                     <Box sx={{ textAlign: 'center', display: 'flex', mb: 1}}> 
                        <Dash width='40%' />
                        <Typography sx={{ alignSelf: 'center' }}>OR</Typography>
                        <Dash width='40%' />
                     </Box>
                     <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'space-around'}}>
                        <button className="flex bg-blue-700/90 p-1.5 rounded w-5/12 justify-center">
                           <FacebookIcon sx={{ color: 'white', mr: 0.5 }} onClick={() => { handleSignFacebook(); } }/>
                           <Typography color="white">FACEBOOK</Typography>
                        </button>
                        <button className="flex bg-red-600/90 p-1.5 rounded w-5/12 justify-center">
                           <GoogleIcon sx={{ color: 'white', mr: 0.5 }} onClick={() => { handleSignFacebook(); } }/>
                           <Typography color="white">Google</Typography>
                        </button>
                     </Box>
                  </Box>
                  </form>
               </Card>
            </Grid>
            <Modal open={open} onClose={handleClose}>
               <Box sx={style}>
                  <Register />
               </Box>
            </Modal>
        </Box>
      </Suspense>
    )
  }