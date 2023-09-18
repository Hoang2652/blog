'use client'
import dynamic from 'next/dynamic'
import React, { useState, Fragment } from 'react';
const IconButton = dynamic(() => import("@mui/material/IconButton"));
const InputAdornment = dynamic(() => import("@mui/material/InputAdornment"));
const TextField = dynamic(() => import("@mui/material/TextField"));
const Visibility = dynamic(() => import("@mui/icons-material/Visibility"));
const VisibilityOff = dynamic(() => import("@mui/icons-material/VisibilityOff"));
const FormControl = dynamic(() => import("@mui/material/FormControl"));
const Box = dynamic(() => import("@mui/material/Box"));
const Dash = dynamic(() => import("@/components/dash"));

function Register() {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return ( 
        <Fragment>
        <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Register</h3>
        <Dash />
        <form className='text-center'>
            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                <TextField
                    id="register-userName"
                    label="User Name"
                    name="userName"
                    multiline
                    maxRows={1}
                    size="small"
                    
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                <TextField
                    id="register-email"
                    label="Email"
                    name="email"
                    multiline
                    maxRows={1}
                    size="small"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                <TextField
                    id="register-password"
                    type={showPassword ? 'text' : 'password'}
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
                    name="password"
                    label="Password"
                    size="small"
                />
                <div className="text"></div>
                <div className="indicator">
                    <span className="weak"></span>
                    <span className="medium"></span>
                    <span className="strong"></span>
                </div>
            </FormControl>
            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                <TextField
                    id="register-password-confirm"
                    type={showPassword ? 'text' : 'password'}
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
                    label="Confirm Password"
                    size="small"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                <TextField
                    id="register-yourName"
                    label="Your Name"
                    name="name"
                    multiline
                    maxRows={1}
                    size="small"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                <TextField
                    id="register-phone"
                    label="Phone"
                    name="phone"
                    multiline
                    maxRows={1}
                    size="small"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                <TextField
                    id="register-address"
                    label="Address"
                    name="address"
                    multiline
                    maxRows={1}
                    size="small"
                />
            </FormControl>
            <Box sx={{ textAlign: 'center' }}>
                <button 
                    className='text-white rounded bg-blue-700/90 uppercase p-2.5 font-bold text-sm'
                    type="submit" 
                    >
                        Register
                </button>
            </Box>
        </form>
        </Fragment>
    );
}

export default Register;