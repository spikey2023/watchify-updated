import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  pwError,
  pwNoError,
  emailInvalid,
  emailTaken,
  updateCurrEmailInput,
  setGenreError,
} from "../features/register";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import GenreCheckboxes from "./GenreCheckboxes";

function verifyEmailFormat(string) {
  //verifies the entered email is in some form of "<x>@<y>.<z>"
  const step1 = string.split("@");
  if (step1.length !== 2 || step1[0].length < 1 || step1[1].length < 2)
    return false;
  const step2 = step1[1].split(".");
  if (step2.length < 2) return false;
  for (let i = 0; i < step2.length; i++) {
    if (step2[i].length === 0) return false;
  }
  return true;
}

async function registerUser(data) {
  try {
    const user = await axios.post("/api/user", data);
    return user;
  } catch (error) {
    console.log(error);
  }
}

export default function Register() {
  const dispatch = useDispatch();
  const pwsNotMatch = useSelector((state) => state.register.pwError);
  const emailState = useSelector((state) => state.register.emailError);
  const lastEmailEntered = useSelector(
    (state) => state.register.currEmailInput
  );
  const genreError = useSelector((state) => state.register.genreError);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function checkEmail(event) {
    const emailStr = event.target.value;
    //This code includes an API call that I don't want to make if the text in the
    //email box hasn't changed since last time this function was called
    if (emailStr !== lastEmailEntered && emailStr) {
      dispatch(updateCurrEmailInput(emailStr));
      if (!verifyEmailFormat(emailStr)) {
        dispatch(emailInvalid());
        return false;
      }
      try {
        const user = await axios.get(`/api/user/${emailStr}`);
        if (user.data) {
          dispatch(emailTaken());
        }
      } catch (error) {
        console.log(error);
      }
    } else if (emailStr !== lastEmailEntered && !emailStr) {
      dispatch(updateCurrEmailInput(emailStr));
    }
  }
  function emailHelperText() {
    switch (emailState) {
      case "invalid":
        return "Please enter a valid email address";
      case "taken":
        return "This email address is already in use";
      default:
        return "The email address you'll use to log in!";
    }
  }
  async function handleSubmit(event) {
    //prevent page from refreshing
    event.preventDefault();

    //grab the inputs from the form
    const data = {
      username: event.target[0].value,
      email: event.target[2].value,
      password: event.target[4].value,
      confirmPw: event.target[7].value,
      genres: [],
    };

    for (let i = 10; i <= 28; i++) {
      //in the event.target array, indices 10-28 are the checkboxes for genres
      if (event.target[i].checked) {
        data.genres.push(event.target[i].value);
      }
    }

    //validate data (only checking that password was typed correctly in both fields right now)
    if (data.password !== data.confirmPw) {
      dispatch(pwError());
    } else {
      dispatch(pwNoError());
    }
    if (data.genres.length < 2) {
      dispatch(setGenreError(true));
    } else {
      dispatch(setGenreError(false));
    }
    if (emailState === "none" && !pwsNotMatch && data.genres.length >= 2) {
      delete data.confirmPw;
      const newUser = await registerUser(data);
      console.log(newUser);
      //Some kind of logInNewUser() function needs to go here
    }
  }

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h1 style={{ paddingTop: "20px", fontFamily: "Sans-Serif" }}>
          Register for Watchify!
        </h1>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ "& .MuiTextField-root": { m: 1, width: "90%" } }}
        >
          <TextField
            required={true}
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            helperText="Tell us what we should call you!"
          />
          <TextField
            required={true}
            id="email-address"
            label="Email Address"
            variant="outlined"
            helperText={emailHelperText()}
            onBlur={checkEmail}
            error={emailState === "invalid" || emailState === "taken"}
          />
          <FormControl
            sx={{ m: 1, width: "90%" }}
            variant="outlined"
            required={true}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-error"
              type={showPassword ? "text" : "password"}
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
            <FormHelperText>
              {pwsNotMatch
                ? "Entered passwords do not match"
                : "A secret word or phrase that only you know!"}
            </FormHelperText>
          </FormControl>
          <FormControl
            sx={{ m: 1, width: "90%" }}
            variant="outlined"
            required={true}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
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
            <FormHelperText>
              {pwsNotMatch
                ? "Entered passwords do not match"
                : "Make sure you typed your password correctly!"}
            </FormHelperText>
          </FormControl>
          <hr style={{ marginLeft: 30, marginRight: 30 }} />
          <h3 style={{ fontFamily: "Sans-Serif", marginLeft: 20 }}>
            To help us recommend movies, please tell us at least 2 genres you
            enjoy:
          </h3>
          <FormControl sx={{ marginBottom: "1rem" }}>
            <GenreCheckboxes />
            <FormHelperText
              error={genreError}
              sx={{ marginLeft: "2rem", marginTop: "-0.5rem" }}
            >
              Select at least 2 genres you enjoy!
            </FormHelperText>
          </FormControl>
          <Button variant="contained" color="success" type="submit">
            Register!
          </Button>
        </Box>
      </div>
    </div>
  );
}
