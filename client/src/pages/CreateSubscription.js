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
      paper: "#1e1e1e",
    },
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
    setSubscription({
      ...subscription,
      [name]: value,
    });
  };

  const sendSub = async (e) => {
    e.preventDefault();

    console.log("fired");
    const uid = window.localStorage.userID;
    subscription.createdBy = uid;
    console.log(subscription);
    try {
      const response = await axios.post(
        "http://localhost:3001/subscriptions/",
        { subscription: subscription }
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.default",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            width: 400,
            backgroundColor: "background.paper",
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" textAlign="center" mb={3}>
            Create Subscription
          </Typography>

          <Box component="form" onSubmit={sendSub} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Name"
              name="name"
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Cost"
              type="number"
              name="cost"
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Date of Renewal"
              name="dateOfRenewal"
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Tag"
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
                borderRadius: 2,
                textTransform: "none",
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
