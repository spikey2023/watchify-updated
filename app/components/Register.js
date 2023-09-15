import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkPws, registerUser } from '../reducers/register';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

async function registration(data){
    await axios.post("/api/user", data);
}

export function Register(){
    const dispatch = useDispatch();
    const pwsNotMatch = useSelector( (state => state.register.pwsNotMatch));

    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    async function handleSubmit(event){
        //prevent page from refreshing
        event.preventDefault();

        //grab the inputs from the form
        const data = {
            username: event.target[0].value,
            email: event.target[2].value,
            password: event.target[4].value,
            confirmPw: event.target[7].value
        }

        //validate data (only checking that password was typed correctly in both fields right now)
        dispatch(checkPws(data));
        delete data.confirmPw;
        console.log(`Name: ${event.target[0].value}\n`, `Email: ${event.target[2].value}\n`,`Password: ${event.target[4].value}\n`, `Confirm Pass: ${event.target[7].value}`);
        dispatch(registerUser(data));
    }

    return <div>
        <h1>Register for Watchify!</h1>
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}sx={{'& .MuiTextField-root': { m: 1, width: '90%' },}}>
            <TextField required id="outlined-basic" label="User Name" variant="outlined" helperText="Tell us what we should call you!"/>
            <TextField required id="email-address" label="Email Address" variant="outlined" helperText="The email address you'll use to log in!"/> 
            <FormControl sx={{ m: 1, width: '90%' }} variant="outlined" required>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password-error"
                    type={showPassword ? 'text' : 'password'}
                    error={pwsNotMatch}
                    endAdornment={
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
                    }
                    label="Password"
                />
                <FormHelperText>{pwsNotMatch ? "Entered passwords do not match" : "A secret word or phrase that only you know!"}</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, width: '90%' }} variant="outlined" required>
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    error={pwsNotMatch}
                    endAdornment={
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
                    }
                    label="Confirm Password"
                />
                <FormHelperText>{pwsNotMatch ? "Entered passwords do not match" : "Make sure you typed your password correctly!"}</FormHelperText>
            </FormControl>
            <Button variant="contained" color="success" type="submit">Register!</Button>
        </Box>
    </div>
}