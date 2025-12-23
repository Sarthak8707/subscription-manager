import axios from "axios";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1c1c1c",
    },
    primary: {
      main: "#90caf9",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

const CreateSubscription = () => {
  const [subscription, setSubscription] = useState({
    name: "",
    cost: 0,
    tag: "",
    createdBy: "",
    dateOfRenewal: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendSub = async (e) => {
    e.preventDefault();

    const uid = window.localStorage.userID;

    const finalsub = {
      ...subscription,
      cost: Number(subscription.cost),
      dateOfRenewal: Number(subscription.dateOfRenewal),
      createdBy: uid,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/subscriptions/",
        { subscription: finalsub }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: "100%",
            maxWidth: 420,
            p: 4,
            backgroundColor: "background.paper",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight={600}
            mb={3}
          >
            Create Subscription
          </Typography>

          <Box
            component="form"
            onSubmit={sendSub}
            display="flex"
            flexDirection="column"
            gap={2.2}
          >
            <TextField
              label="Subscription Name"
              name="name"
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Monthly Cost"
              type="number"
              name="cost"
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Renewal Day (1–31)"
              name="dateOfRenewal"
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Category / Tag"
              name="tag"
              onChange={handleChange}
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                py: 1.2,
                fontSize: "1rem",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Create Subscription
            </Button>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default CreateSubscription;
