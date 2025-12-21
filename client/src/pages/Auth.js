import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import {
  ThemeProvider,
  createTheme,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#0f172a",
      paper: "#020617",
    },
  },
});

const Auth = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
        >
          <Login />
          <Register />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Auth;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/users/login",
        { username, password }
      );

      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card sx={{ width: 360 }}>
      <CardContent>
        <Typography variant="h5" mb={2}>
          Login
        </Typography>

        <Box component="form" onSubmit={onSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
            >
              Sign In
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/users/register",
        { username, password }
      );
      alert("Registration completed! Now login.");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card sx={{ width: 360 }}>
      <CardContent>
        <Typography variant="h5" mb={2}>
          Register
        </Typography>

        <Box component="form" onSubmit={onSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="outlined"
              size="large"
            >
              Create Account
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
