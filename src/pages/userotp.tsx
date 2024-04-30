import React, { useState, useEffect } from "react";
import router from "next/router";

import { Stack, Grid, Typography, Box, Card, Button } from "@mui/material";
import OtpInput from "react-otp-input";

const Userotp: React.FC = () => {
  const [OTP, setOTP] = useState("");

  const handleVerifyOTP = () => {
    // Assuming OTP verification logic here
    if (OTP.length === 6) {
      // Handle OTP verification
      console.log("OTP verified:", OTP);
      // Proceed with further actions
      router.push("/organizationsignup");
    } else {
      console.log("Invalid OTP");
    }
  };
  const [timer, setTimer] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval);
          return prevTimer;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Runs only once after the initial render

  return (
    <Box sx={{ overflow: "hidden", height: "100vh", width: "1340px" }}>
      <Stack>
        <Grid container>
          <Grid item xs={6} sx={{ position: "relative", width: "765px" }}>
            {/* Your existing code for the left side */}
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
              sx={{
                position: "absolute",
                color: "#FFFFFF",
                fontSize: "24px",
                top: 390,
                left: 105,
              }}
            >
              Empowering company and the candidate by
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                color: "#FFFFFF",
                fontSize: "24px",
                top: 425,
                left: 135,
              }}
            >
              {/* Empowering company and the candidate by */}
              Placing right talent in the right place.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                color: "#FFFFFF",
                height: "500px",
                width: "480px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                backgroundColor: "#FFFFFF",
                position: "absolute",
                top: "0px",
                left: "780px",
                borderRadius: "5px",
              }}
            >
              <Card
                component="form"
                sx={{
                  width: "452px",
                  height: "300px",
                  textAlign: "center",
                  p: 2,
                }}
                noValidate
                autoComplete="off"
              >
                <Typography
                  variant="h5"
                  paddingRight={35}
                  color="#2F415E"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Enter OTP
                </Typography>

                <Typography
                  variant="h6"
                  color="#ACACAC"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    paddingLeft: "31px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Please Enter the OTP that has been sent to your given phone{" "}
                  <br /> number 70****42
                </Typography>

                {/* Otp Input */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <OtpInput
                    value={OTP}
                    onChange={(otp) => setOTP(otp)}
                    numInputs={6}
                    // renderSeparator={<span>-</span>}
                    // focusStyle={{ border: "1px solid red" }}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                      // color: "black",
                      width: 40,
                      height: 40,
                      marginLeft: 8,
                      marginTop: "10px",

                      padding: 10,
                      borderRadius: "10px",
                      border: "1px solid #E4E4E4",
                      // boxShadow: "inset 4px 4px 12px rgba(0, 0, 0, 0.08)",
                    }}
                  />
                  <div style={{ textAlign: "center", marginTop: "35px",marginLeft:"10px" }}>
                     {timer < 10 ? `00:0${timer}` : `00:${timer}`}
                  </div>
                </Box>

                <Typography
                  variant="body1"
                  color="#ACACAC"
                  sx={{
                    position: "absolute",
                    top: "395px", // Adjust top position as needed
                    left: "115px", // Adjust left position as needed
                    fontSize: "18px", // Set font size as needed
                  }}
                >
                  Didn't receive the code?
                </Typography>

                {/* <Typography
                  variant="body1"
                  color="#ACACAC"
                  sx={{
                    position: "absolute",
                    top: "365px", // Adjust top position as needed
                    left: "215px", // Adjust left position as needed
                    fontSize: "18px", // Set font size as needed
                  }}
                >
                  00.01
                </Typography> */}

                {/* Resend Typography */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: "395px",
                    left: "320px",
                    fontSize: "16px",
                    fontFamily: "Manrope",
                    color: "#F85049",
                  }}
                >
                  Resend
                </Typography>

                {/* Verify & Proceed Button */}

                <Box sx={{ paddingTop: "75px" }}>
                  <Button
                    variant="contained"
                    onClick={handleVerifyOTP}
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "16px",

                      textAlign: "center",
                      textTransform: "none",
                      width: "390px",
                      height: 50,
                      backgroundColor: "#268AFF",
                      borderRadius: "16px",
                      // marginBottom: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        // position: "absolute",
                        top: "390px",
                        left: "320px",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                        color: "#FFFFFF",
                      }}
                    >
                      Verify & proceed
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

export default Userotp;
