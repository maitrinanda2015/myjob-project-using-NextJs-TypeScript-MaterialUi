import { useRouter } from "next/router";
import { useState } from "react";
import * as React from "react";
import {
  Stack,
  Grid,
  Typography,
  Box,
  Card,
  TextField,
  Button,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const customTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "350px",
          borderColor: "#BEBEBE", // Set border color here
          borderWidth: "1px", // Set border width here
          borderStyle: "solid", // Set border style here
          borderRadius: "10px", // Add border radius here
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

const Login: React.FC = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let i = event.target.value.length - 1;
    console.log("ascii value", event.target.value.charCodeAt(i));
    if (
      event.target.value.charCodeAt(i) > 64 &&
      event.target.value.charCodeAt(i) < 91
    ) {
      return;
    } else if (
      event.target.value.charCodeAt(i) > 96 &&
      event.target.value.charCodeAt(i) < 123
    ) {
      return;
    } else setPhoneNumber(event.target.value);
  };

  const handleLogin = () => {
    // Check if the phone number contains exactly 10 numbers
    if (phoneNumber.length === 10 && /^\d+$/.test(phoneNumber)) {
      // Redirect to the second page if the phone number is valid
      router.push("/userotp");
    } else {
      // Display an error message or perform any other action if the phone number is invalid
      alert("Please enter a valid 10-digit phone number");
    }
  };

  return (
    <Box sx={{ overflow: "hidden", height: "100vh", width: "100%" }}>
      <Stack>
        <Grid container>
          <Grid item xs={12} sm={6}  sx={{ width: "765px" }}>
          <Box>
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
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: "300px",
                width: "450px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "190px",
                left: "780px",
                borderRadius: "5px",
              }}
            >
              <Card
                component="form"
                sx={{
                  width: "90%",
                  height: "230px",
                  textAlign: "center",
                  p: 2,
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <Typography
                    color="#2F415E"
                    sx={{
                      whiteSpace: "nowrap",
                      fontFamily: "Poppins",
                      fontSize: "26px",
                      paddingRight: "88px",
                    }}
                  >
                    Login in now to continue
                  </Typography>
                  <ThemeProvider theme={customTheme}>
                    <Box
                      sx={{
                        display: "grid",
                        paddingLeft: "25px",
                        paddingTop: "19px",
                        gridTemplateColumns: { sm: "1fr 1fr 1fr" },
                        gap: 2,
                      }}
                    >
                      <TextField
                        id="phone-number" // Added an id to identify the input field
                        label="Enter phone number"
                        variant="filled"
                        // type='number'
                        sx={{
                          "& .MuiInputLabel-root": {
                            paddingLeft: "48px",
                            fontSize: "12px",
                            color: "#BEBEBE",
                          },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img
                                src="Call (1).svg"
                                alt="Phone Icon"
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  paddingBottom: "2px",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        value={phoneNumber} // Bind the value to the state variable
                        onChange={handlePhoneNumberChange} // Handle input change
                      />
                    </Box>
                  </ThemeProvider>
                </div>

                <Button
                  variant="contained"
                  onClick={handleLogin}
                  sx={{
                    textAlign: "center",
                    height: "55px",
                    width: "355px",
                    textTransform: "none",
                    backgroundColor: "#268AFF",
                    borderRadius: "10px",
                    paddingBottom: "5px",
                    marginRight: "2px",
                    marginTop: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      color: "#FFFFFF",
                    }}
                  >
                    Login
                  </Typography>
                </Button>

                <Typography
                  sx={{
                    paddingRight: "80px",
                    paddingTop: "14px",
                    fontFamily: "Poppins",
                    color: "#ACACAC",
                  }}
                >
                  Don't have an account?
                </Typography>

                <Typography
                  color="primary"
                  sx={{
                    fontFamily: "Poppins",
                    position: "absolute",
                    top: "237px",
                    left: "266px",
                    fontSize: "20px",
                  }}
                >
                  Register
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Login;
