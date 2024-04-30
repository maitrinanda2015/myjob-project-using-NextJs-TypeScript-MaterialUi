import React from "react";
import { useState } from "react";
import {
  Stack,
  Grid,
  Typography,
  Box,
  Card,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router"; // Import useRouter from Next.js

const customTheme = (outerTheme: any) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "350px",
            height: "55px",
            marginLeft: "25px",
            borderColor: "#BEBEBE", // Set border color here
            borderWidth: "1px", // Set border width here
            borderStyle: "solid ", // Set border style here
            borderRadius: "15px", // Add border radius here
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent", // Change the background color here
            borderRadius: "10px", // Add border radius here
            "&::before, &::after": {
              borderBottom: "none",
            },
            "&.Mui-focused:after": {
              borderBottom: "none",
              backgroundColor: "transparent",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root": {
              backgroundColor: "transparent",
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "none",
            },
            "&.Mui-focused:after": {
              borderBottom: "none",
            },
          },
        },
      },
    },
  });

const Organizationsignup = () => {
  const outerTheme = useTheme();
  const router = useRouter(); // Use useRouter hook from Next.js
  const [organizationName, setOrganizationName] = useState("");
  const [yourName, setYourName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleNextClick = () => {
    // Implement your validation logic here
    // For simplicity, I'm assuming basic validations
    if (
      organizationName.trim() === "" ||
      yourName.trim() === "" ||
      contactNumber.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Validation for organization name (only characters and numbers)
    if (!/^[a-zA-Z0-9\s]*$/.test(organizationName)) {
      alert("Organization name should contain only characters and numbers.");
      return;
    }

    // Validation for your name (only characters)
    if (!/^[a-zA-Z\s]*$/.test(yourName)) {
      alert("Your name should contain only characters.");
      return;
    }

    // Validation for contact number (only numbers)
    if (!/^[6-9]\d{9}$/.test(contactNumber)) {
      alert(
        "Contact number should start with a digit between 6 to 9 and contain exactly 10 digits in total."
      );
      return;
    }

    // Validation for email (characters, numbers, and any domain)
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert(
        "Invalid email format. It should be in the format user@example.com."
      );
      return;
    }

    // If all validations pass, redirect to Profile.tsx
    router.push("/organizationdashboard");
  };

  return (
    <Box sx={{ overflow: "hidden", height: "100vh", width: "1340px" }}>
      <Stack>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ position: "relative", width: "765px" }}
          >
            <img
              src="Organization signup.svg"
              alt=""
              style={{ width: "100%" }}
            />

            {/* Photo to be placed over the existing photo */}
            <img
              src="Vector.svg" // Replace with the path to your overlay photo
              alt="Vector"
              style={{
                position: "absolute",
                top: 210,
                left: 300,
                width: "97px",
                height: "100px",
              }}
            />
            <Typography
              color={"whitesmoke"}
              fontSize={"28px"}
              variant="body1"
              sx={{ position: "absolute", top: 320, left: 295 }}
            >
              MYJOB
            </Typography>

            {/* Typography under the second image */}
            <Typography
              color={"whitesmoke"}
              fontSize={"24px"}
              variant="body1"
              sx={{ position: "absolute", top: 390, left: 105 }}
            >
              Empowering company and the candidate by
            </Typography>
            <Typography
              color={"whitesmoke"}
              fontSize={"24px"}
              variant="body1"
              sx={{ position: "absolute", top: 420, left: 145 }}
            >
              Placing right talent in the right place.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                color: "#FFFFFF",
                height: "500px", // Increase height
                display: "flex",
                flexDirection: "column", // Adjust to stack items vertically
                justifyContent: "flex-end", // Align items at the bottom
                backgroundColor: "#FFFFFF",
                position: "absolute",
                top: "20px", // Adjust top position
                left: "780px",
                borderRadius: "5px",
              }}
            >
              <Card
                component="form"
                sx={{
                  width: "400px", // Increase width to match TextField width
                  height: "420px", // Increase height
                  textAlign: "center", // Center text horizontally
                  p: 2, // Padding
                  // position: "relative",
                }}
                noValidate
                autoComplete="off"
              >
                {/* Typography moved to the top */}
                <Typography
                  color="#2F415E"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "26px",
                    fontWeight: 600,
                    lineHeight: "35px",
                    letterSpacing: "-0.005em",
                    textAlign: "left",
                    marginTop: "-5px", // Adjust top margin as needed
                    // paddingRight: "150px",
                    paddingBottom: "5px",
                    paddingLeft: "25px",
                  }}
                >
                  Enter Organization Details
                </Typography>

                {/* Additional typography below */}
                <Typography
                  color="#ACACAC"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    // marginBottom: "1px", // Adjust top margin as needed
                    paddingLeft: "25px",
                  }}
                >
                  Tell us some information about your organization to <br />{" "}
                  continue.
                </Typography>

                <Box sx={{ paddingTop: "10px" }}>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      label="Enter Organization name"
                      variant="filled"
                      value={organizationName} // Set value to the state variable
                      onChange={(e) => setOrganizationName(e.target.value)} // Handle change and update state
                      sx={{
                        width: 350,
                        mb: 2,
                        "& .MuiInputLabel-root": {
                          paddingLeft: "48px",
                          fontSize: "12px",
                          color: "#BEBEBE",
                        },
                        marginBottom: "10px",
                        marginRight: "80px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img
                              src="3 User.svg"
                              alt="Phone Icon"
                              style={{
                                width: "24px",
                                height: "24px",
                                paddingBottom: "15px",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </ThemeProvider>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      label="Enter your name"
                      variant="filled"
                      value={yourName} // Set value to the state variable
                      onChange={(e) => setYourName(e.target.value)} // Handle change and update state
                      sx={{
                        width: 350,
                        mb: 2,
                        "& .MuiInputLabel-root": {
                          paddingLeft: "48px",
                          fontSize: "12px",
                          color: "#BEBEBE",
                        },
                        marginBottom: "10px",
                        marginRight: "80px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img
                              src="Profile (1).svg"
                              alt="Phone Icon"
                              style={{
                                width: "24px",
                                height: "24px",
                                paddingBottom: "15px",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </ThemeProvider>

                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      label="Enter contact number"
                      variant="filled"
                      value={contactNumber} // Set value to the state variable
                      onChange={(e) => setContactNumber(e.target.value)} // Handle change and update state
                      sx={{
                        width: 350,
                        mb: 2,
                        "& .MuiInputLabel-root": {
                          paddingLeft: "48px",
                          fontSize: "12px",
                          color: "#BEBEBE",
                        },
                        marginBottom: "10px",
                        marginRight: "80px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img
                              src="Stroke 1.svg"
                              alt="Phone Icon"
                              style={{
                                width: "24px",
                                height: "24px",
                                paddingBottom: "15px",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </ThemeProvider>

                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      label="Enter Email ID"
                      variant="filled"
                      value={email} // Set value to the state variable
                      onChange={(e) => setEmail(e.target.value)} // Handle change and update state
                      sx={{
                        width: 350,
                        mb: 2,
                        "& .MuiInputLabel-root": {
                          paddingLeft: "48px",
                          fontSize: "12px",
                          color: "#BEBEBE",
                        },
                        marginRight: "80px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img
                              src="Call (2).svg"
                              alt="Phone Icon"
                              style={{
                                width: "24px",
                                height: "24px",
                                paddingBottom: "15px",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </ThemeProvider>

                  <Button
                    onClick={handleNextClick} // Add onClick handler to handle the Next button click
                    variant="contained"
                    sx={{
                      color: "#268AFF",
                      height: "53px",
                      width: "354px",
                      borderRadius: "15px",
                      paddingRight: "70px",
                      marginTop: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        color: "#FFFFFF",
                        textTransform: "capitalize",
                        paddingLeft: "40px",
                      }}
                    >
                      Next
                    </Typography>
                  </Button>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Organizationsignup;
