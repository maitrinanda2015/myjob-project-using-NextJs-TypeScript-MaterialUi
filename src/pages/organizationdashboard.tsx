import React from "react";
import {
  Stack,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Card,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router"; // Import useRouter from Next.js
import { useState } from "react";


const customTheme = (outerTheme: any) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            // marginLeft: "25px",
            borderColor: "#BEBEBE", // Set border color here
            borderWidth: "1px", // Set border width here
            borderStyle: "solid ", // Set border style here
            borderRadius: "15px", // Add border radius here
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
              backgroundColor: "none",
            },
            "&:hover": {
              backgroundColor: "none",
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




const StyledButton = styled(Button)({
  backgroundColor: "#4BBF74",
  height: "43px",
  width: "100px",
  borderBottomRightRadius: "5px",
  borderTopRightRadius: "5px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  paddingRight: "10px",
  marginRight: "200px",
  "&:hover": {
    backgroundColor: "#4BBF74", // Set the hover background color same as the default background color
  },
});

const Organizationdashboard: React.FC = () => {
const outerTheme = useTheme();
  const router = useRouter(); // Use useRouter hook from Next.js
  const [jobTitle, setjobTitle] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  const [vacancy, setvacancy] = useState("");
  const [experience, setexperience] = useState("");
  const [manPower, setmanPower] = useState("");
  const [location, setlocation] = useState("");
  const [minsSalary, setminsSalary] = useState("");
  const [maxSalary, setmaxSalary] = useState("");


  const handleBoxClick = () => {
    // Redirect to the job details page when the box is clicked
    router.push('/jobdetailspage'); // Replace '/job-details' with the actual path of your job details page
  };


  const handleNextClick = () => {
    // Implement your validation logic here
    // For simplicity, I'm assuming basic validations
    if (
      jobTitle.trim() === "" ||
      jobDescription.trim() === "" ||
      vacancy.trim() === "" ||
      experience.trim() === "" ||
      manPower.trim() === "" ||
      location.trim() === "" ||
      minsSalary.trim() === "" ||
      maxSalary.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Validation for organization name (only characters and numbers)
    if (!/^[a-zA-Z\s]*$/.test(jobTitle)) {
      alert("Job title should contain only characters.");
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(jobDescription)) {
      alert("Job description should contain only characters.");
      return;
    }

    if (!/^\d{1,3}$/.test(vacancy)) {
      alert("Vacancy should be a number with maximum 3 digits.");
      return;
    }

    if (!/^\d+\syears?$/.test(experience)) {
      alert("Experience should be a number followed by 'years'. Example: '2 years'.");
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(manPower)) {
      alert("Man power should contain only characters.");
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(location)) {
      alert("Location should contain only characters.");
      return;
    }

    if (!/^\d+$/.test(minsSalary)) {
      alert("Min salary should contain only numbers.");
      return;
    }

    if (!/^\d+$/.test(maxSalary)) {
      alert("Max salary should contain only numbers.");
      return;
    }

    // If all validations pass, redirect to the profile
    router.push("/profile");
  };
  return (
    <Box sx={{ maxHeight: "100%", width: "100%" }}>
      <Stack>
        <Grid container position="relative">
          {/* First grid */}
          <Grid item xs={2.5}>
            <Box
              sx={{
                backgroundImage: 'url("Profile.svg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100%",
                position: "absolute",
                width: "270px",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            ></Box>

            {/* Second image */}
            <img
              src="Vector.svg" // Replace with the path to your second image
              alt=""
              style={{
                position: "absolute",
                top: 30,
                left: 35,
                height: "20px",
                width: "auto",
                zIndex: 1,
              }}
            />
            {/* Typography */}
            <Typography
              color="#FFFFFF"
              fontFamily="Montserrat"
              sx={{
                position: "absolute",
                top: 24,
                left: 60,
                fontSize: "22px",
                zIndex: 2,
              }}
            >
              MYJOB
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: 80,
                color: "#FFFFFF",
                fontFamily: "Poppins",
                left: 30,
                fontSize: "16px",
                zIndex: 2,
              }}
            >
              Good Morning
              <img
                src="image 297.svg" // Replace with the path to your second image
                alt=""
                style={{
                  position: "absolute",
                  top: 2,
                  left: 105,
                  height: "20px",
                  width: "auto",
                  zIndex: 1,
                }}
              />
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: 104,
                fontFamily: "Poppins",
                color: "#FFFFFF",
                left: 30,
                fontSize: "24px",
                zIndex: 2,
              }}
            >
              Volkswagon India
            </Typography>

            <Stack>
              <img
                src="Group.svg" // Replace with the path to your second image
                alt=""
                style={{
                  position: "absolute",
                  top: 350,
                  left: 25,
                  height: "50px",
                  width: "auto",
                  zIndex: 1,
                }}
              />
              <img
                src="g10.svg" // Replace with the path to your second image
                alt=""
                style={{
                  position: "absolute",
                  top: 410,
                  left: 25,
                  height: "55px",
                  width: "173px",
                  zIndex: 1,
                  borderRadius: "12px",
                }}
              />
            </Stack>

            <Typography
              color="#FFFFFF"
              fontFamily="Poppins"
              sx={{
                position: "absolute",
                top: 300,
                left: 30,
                fontSize: "18px",
                zIndex: 2,
              }}
            >
              Download our app from
            </Typography>
          </Grid>

          {/* Second grid */}
          <Grid
            item
            xs={8.5}
            sx={{
              position: "relative",
              width: "calc(100% - 500px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                // display: "flex",
                height: "85px",
                width: "1060px",
                paddingBottom: "30px", // Adjusted paddingBottom
              }}
            >
              <Box
                component="form"
                noValidate
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  top: "18px", // Adjust the vertical position as needed
                  left: "30px", // Adjust the horizontal position as needed
                  width: "750px", // Adjust the width as needed
                }}
              >
                <TextField
                  variant="standard"
                  placeholder="Search"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#C6C6C6" }} />
                      </InputAdornment>
                    ),
                    sx: {
                      height: "44px",
                      paddingLeft: "20px",
                      color: "#CBCBCB",
                      backgroundColor: "#FFFFFF",
                      width: "500px",
                      //   borderRadius: "5px",
                      borderTopLeftRadius: "5px",
                      borderBottomLeftRadius: "5px",
                      //   border: "1px solid #E4E4E",
                    }, // Adjusted width for visibility and added border
                  }}
                  sx={{ flex: 1 }} // Added flex to expand the TextField
                />
                <StyledButton>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                    }}
                  >
                    Search
                  </Typography>
                </StyledButton>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  height: "100%",
                  backgroundColor: "#F4F4F4",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    color: "#130F26",
                    // paddingTop: "10px",
                    paddingLeft: "760px",
                  }}
                >
                  Explore
                </Typography>

                <img
                  src="Notification.svg"
                  alt="Notification"
                  style={{
                    height: "20px",
                    width: "auto",
                    marginLeft: "20px", // Add some left margin for spacing between the typography and the image
                    // marginBottom: "60px",
                  }}
                />
                <img
                  src="Ellipse 1.svg"
                  alt="Notification"
                  style={{
                    height: "40px",
                    width: "auto",
                    marginLeft: "20px", // Add some left margin for spacing between the typography and the image
                    // marginBottom: "60px",
                  }}
                />

                <Box
                  sx={{
                    height: "33px",

                    backgroundColor: "#DADADA",
                    display: "flex",
                    alignItems: "center",

                    // position:"absolute",
                    // left:850,
                    // border: "3px ",
                    paddingRight: "20px",

                    // marginLeft:"800px",
                    // marginBottom: "60px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      color: "#130F26",
                      // Add any other styling properties here
                      paddingLeft: "25px",
                    }}
                  >
                    Bijay Ranjan
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Stack>
              <Box sx={{ paddingLeft: "20px", paddingBottom: "30px" }}>
                <img
                  src="Frame 9.svg" // Replace with the path to your second image
                  alt=""
                  style={{
                    height: "249px",
                    width: "1000px",
                  }}
                />
              </Box>

              <Stack sx={{ marginTop: "15px", marginLeft: "10px" }}>
                <Grid container spacing={0}>
                  <Grid item xs={12} md={6} sm={12} lg={6}>
                    <Box
                      sx={{
                        height: "1400px",
                        width: "500px",

                        border: "1px solid #EBEBEB",
                        marginLeft: "10px",
                      }}
                    >
                      <Box
                      onClick={handleBoxClick}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          width: "425px",
                          height: "220px",
                          border: "1px solid #EBEBEB",
                          borderRadius: "10px",
                          marginLeft: "17px",
                          marginTop: "15px",
                          padding: "20px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Ellipse 27.svg"
                            alt="Notification"
                            style={{
                              height: "40px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <div>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "18px",
                                color: "#545454",
                              }}
                            >
                              Sr, Software Engineer
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "14px",
                                color: "#5454",
                              }}
                            >
                              Volkswagon Ind.LTD
                            </Typography>
                          </div>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Location (1).svg"
                            alt="Notification"
                            style={{
                              height: "25px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            Remote,India
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Wallet.svg"
                            alt="Notification"
                            style={{
                              height: "20px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            ₹ 5,72,000 - 10,72,000 Yearly
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Work (1).svg"
                            alt="Notification"
                            style={{
                              height: "20px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            2+ years Experience in Enginnering/web development
                          </Typography>
                        </Box>
                        <div
                          style={{
                            height: "21px",
                            width: "90px",
                            borderRadius: "10px",
                            backgroundColor: "#DFF0FF",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#1F61B4",
                              paddingLeft: "12px",
                              paddingTop: "1px",
                            }}
                          >
                            022 Opening
                          </Typography>
                        </div>
                        <div
                          style={{
                            height: "21px",
                            width: "130px",
                            borderRadius: "10px",
                            backgroundColor: "#EAEAEA",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "120px",
                            marginTop: "-40px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#7E7E7E",
                              paddingLeft: "22px",
                              paddingTop: "1px",
                            }}
                          >
                            Direct recruitment
                          </Typography>
                        </div>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            color: "#89A4C5",
                            marginLeft: "auto",
                            marginTop: "-20px",
                            // marginBottom:"20px"
                          }}
                        >
                          4d ago
                        </Typography>
                      </Box>
                      <Box
                      onClick={handleBoxClick}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          width: "425px",
                          height: "220px",
                          border: "1px solid #EBEBEB",
                          borderRadius: "10px",
                          marginLeft: "17px",
                          marginTop: "15px",
                          padding: "20px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Ellipse 27.svg"
                            alt="Notification"
                            style={{
                              height: "40px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <div>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "18px",
                                color: "#545454",
                              }}
                            >
                              Sr, Software Engineer
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "14px",
                                color: "#5454",
                              }}
                            >
                              Volkswagon Ind.LTD
                            </Typography>
                          </div>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Location (1).svg"
                            alt="Notification"
                            style={{
                              height: "25px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            Remote,India
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Wallet.svg"
                            alt="Notification"
                            style={{
                              height: "20px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            ₹ 5,72,000 - 10,72,000 Yearly
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Work (1).svg"
                            alt="Notification"
                            style={{
                              height: "20px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            2+ years Experience in Enginnering/web development
                          </Typography>
                        </Box>
                        <div
                          style={{
                            height: "21px",
                            width: "90px",
                            borderRadius: "10px",
                            backgroundColor: "#DFF0FF",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#1F61B4",
                              paddingLeft: "12px",
                              paddingTop: "1px",
                            }}
                          >
                            022 Opening
                          </Typography>
                        </div>
                        <div
                          style={{
                            height: "21px",
                            width: "130px",
                            borderRadius: "10px",
                            backgroundColor: "#EAEAEA",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "120px",
                            marginTop: "-40px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#7E7E7E",
                              paddingLeft: "22px",
                              paddingTop: "1px",
                            }}
                          >
                            Direct recruitment
                          </Typography>
                        </div>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            color: "#89A4C5",
                            marginLeft: "auto",
                            marginTop: "-20px",
                            // marginBottom:"20px"
                          }}
                        >
                          4d ago
                        </Typography>
                      </Box>
                      <Box
                      onClick={handleBoxClick}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          width: "425px",
                          height: "220px",
                          border: "1px solid #EBEBEB",
                          borderRadius: "10px",
                          marginLeft: "17px",
                          marginTop: "15px",
                          padding: "20px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Ellipse 27.svg"
                            alt="Notification"
                            style={{
                              height: "40px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <div>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "18px",
                                color: "#545454",
                              }}
                            >
                              Sr, Software Engineer
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "14px",
                                color: "#5454",
                              }}
                            >
                              Volkswagon Ind.LTD
                            </Typography>
                          </div>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Location (1).svg"
                            alt="Notification"
                            style={{
                              height: "25px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            Remote,India
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Wallet.svg"
                            alt="Notification"
                            style={{
                              height: "20px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            ₹ 5,72,000 - 10,72,000 Yearly
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Work (1).svg"
                            alt="Notification"
                            style={{
                              height: "20px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            2+ years Experience in Enginnering/web development
                          </Typography>
                        </Box>
                        <div
                          style={{
                            height: "21px",
                            width: "90px",
                            borderRadius: "10px",
                            backgroundColor: "#DFF0FF",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#1F61B4",
                              paddingLeft: "12px",
                              paddingTop: "1px",
                            }}
                          >
                            022 Opening
                          </Typography>
                        </div>
                        <div
                          style={{
                            height: "21px",
                            width: "130px",
                            borderRadius: "10px",
                            backgroundColor: "#EAEAEA",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "120px",
                            marginTop: "-40px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#7E7E7E",
                              paddingLeft: "22px",
                              paddingTop: "1px",
                            }}
                          >
                            Direct recruitment
                          </Typography>
                        </div>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            color: "#89A4C5",
                            marginLeft: "auto",
                            marginTop: "-20px",
                            // marginBottom:"20px"
                          }}
                        >
                          4d ago
                        </Typography>
                      </Box>
                      <Box
                      onClick={handleBoxClick}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          width: "425px",
                          height: "220px",
                          border: "1px solid #EBEBEB",
                          borderRadius: "10px",
                          marginLeft: "17px",
                          marginTop: "15px",
                          padding: "20px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Ellipse 27.svg"
                            alt="Notification"
                            style={{
                              height: "40px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <div>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "18px",
                                color: "#545454",
                              }}
                            >
                              Sr, Software Engineer
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "14px",
                                color: "#5454",
                              }}
                            >
                              Volkswagon Ind.LTD
                            </Typography>
                          </div>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Location (1).svg"
                            alt="Notification"
                            style={{
                              height: "25px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            Remote,India
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Wallet.svg"
                            alt="Notification"
                            style={{
                              height: "20px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            ₹ 5,72,000 - 10,72,000 Yearly
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Work (1).svg"
                            alt="Notification"
                            style={{
                              height: "20px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            2+ years Experience in Enginnering/web development
                          </Typography>
                        </Box>
                        <div
                          style={{
                            height: "21px",
                            width: "90px",
                            borderRadius: "10px",
                            backgroundColor: "#DFF0FF",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#1F61B4",
                              paddingLeft: "12px",
                              paddingTop: "1px",
                            }}
                          >
                            022 Opening
                          </Typography>
                        </div>
                        <div
                          style={{
                            height: "21px",
                            width: "130px",
                            borderRadius: "10px",
                            backgroundColor: "#EAEAEA",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "120px",
                            marginTop: "-40px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#7E7E7E",
                              paddingLeft: "22px",
                              paddingTop: "1px",
                            }}
                          >
                            Direct recruitment
                          </Typography>
                        </div>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            color: "#89A4C5",
                            marginLeft: "auto",
                            marginTop: "-20px",
                            // marginBottom:"20px"
                          }}
                        >
                          4d ago
                        </Typography>
                      </Box>
                      <Box
                      onClick={handleBoxClick}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          width: "425px",
                          height: "220px",
                          border: "1px solid #EBEBEB",
                          borderRadius: "10px",
                          marginLeft: "17px",
                          marginTop: "15px",
                          padding: "20px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Ellipse 27.svg"
                            alt="Notification"
                            style={{
                              height: "40px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <div>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "18px",
                                color: "#545454",
                              }}
                            >
                              Sr, Software Engineer
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "14px",
                                color: "#5454",
                              }}
                            >
                              Volkswagon Ind.LTD
                            </Typography>
                          </div>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Location (1).svg"
                            alt="Notification"
                            style={{
                              height: "25px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            Remote,India
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Wallet.svg"
                            alt="Notification"
                            style={{
                              height: "20px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            ₹ 5,72,000 - 10,72,000 Yearly
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src="Work (1).svg"
                            alt="Notification"
                            style={{
                              height: "20px",
                              width: "auto",
                              marginRight: "20px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#545454",
                            }}
                          >
                            2+ years Experience in Enginnering/web development
                          </Typography>
                        </Box>
                        <div
                          style={{
                            height: "21px",
                            width: "90px",
                            borderRadius: "10px",
                            backgroundColor: "#DFF0FF",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#1F61B4",
                              paddingLeft: "12px",
                              paddingTop: "1px",
                            }}
                          >
                            022 Opening
                          </Typography>
                        </div>
                        <div
                          style={{
                            height: "21px",
                            width: "130px",
                            borderRadius: "10px",
                            backgroundColor: "#EAEAEA",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "120px",
                            marginTop: "-40px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#7E7E7E",
                              paddingLeft: "22px",
                              paddingTop: "1px",
                            }}
                          >
                            Direct recruitment
                          </Typography>
                        </div>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "12px",
                            color: "#89A4C5",
                            marginLeft: "auto",
                            marginTop: "-20px",
                            // marginBottom:"20px"
                          }}
                        >
                          4d ago
                        </Typography>
                      </Box>
                      ;
                    </Box>
                  </Grid>

                  {/* Second Grid */}
                  <Grid item xs={12} md={6} sm={12} lg={6}>
                    <Box
                      sx={{
                        width: "100%",
                        marginLeft: "70px",
                        border: "1px solid #EBEBEB",
                        p: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "#OOOOOO",
                          paddingBottom: "20px",
                        }}
                      >
                        Create Employee request
                      </Typography>

                      <Box>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                          <TextField
                            label="Job title"
                            variant="filled"
                            value={jobTitle} // Set value to the state variable
                      onChange={(e) => setjobTitle(e.target.value)} // Handle change and update state
                            fullWidth
                            sx={{
                              "& .MuiInputLabel-root": {
                                paddingLeft: "8px",
                                fontSize: "15px",
                                color: "#BEBEBE",
                              },
                            }}
                          />
                        </ThemeProvider>
                      </Box>

                      <Box mt={2} />

                      <Box>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                          <TextField
                            label="Job Description"
                            variant="filled"
                            fullWidth
                            multiline
                            value={jobDescription} // Set value to the state variable
                      onChange={(e) => setjobDescription(e.target.value)} // Handle change and update state
                            
                            rows={4}
                            maxRows={4}
                            sx={{
                              "& .MuiInputLabel-root": {
                                paddingLeft: "8px",
                                fontSize: "15px",
                                color: "#BEBEBE",
                              },
                            }}
                          />
                        </ThemeProvider>
                      </Box>

                      <Box mt={2} />
                      <Box sx={{ display: "flex" }}>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                          <TextField
                            label="Vacancy"
                            variant="filled"
                            fullWidth
                            value={vacancy} // Set value to the state variable
                      onChange={(e) => setvacancy(e.target.value)} // Handle change and update state
                            sx={{
                              "& .MuiInputLabel-root": {
                                paddingLeft: "8px",
                                fontSize: "15px",
                                color: "#BEBEBE",
                              },
                            }}
                          />
                        </ThemeProvider>
                        <Box ml={2} />
                        <ThemeProvider theme={customTheme(outerTheme)}>
                          <TextField
                            label="Experience"
                            variant="filled"
                            fullWidth
                            value={experience} // Set value to the state variable
                      onChange={(e) => setexperience(e.target.value)} // Handle change and update state
                            sx={{
                              "& .MuiInputLabel-root": {
                                paddingLeft: "8px",
                                fontSize: "15px",
                                color: "#BEBEBE",
                              },
                            }}
                          />
                        </ThemeProvider>
                      </Box>

                      <Box mt={2} />

                      <Box>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                          <TextField
                            label="Manpower type"
                            variant="filled"
                            fullWidth
                            value={manPower} // Set value to the state variable
                      onChange={(e) => setmanPower(e.target.value)} // Handle change and update state
                            sx={{
                              "& .MuiInputLabel-root": {
                                paddingLeft: "8px",
                                fontSize: "15px",
                                color: "#BEBEBE",
                              },
                            }}
                          />
                        </ThemeProvider>
                      </Box>

                      <Box mt={2} />

                      <Box>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                          <TextField
                            label="Location"
                            variant="filled"
                            fullWidth
                            value={location} // Set value to the state variable
                      onChange={(e) => setlocation(e.target.value)} // Handle change and update state
                            sx={{
                              "& .MuiInputLabel-root": {
                                paddingLeft: "8px",
                                fontSize: "15px",
                                color: "#BEBEBE",
                              },
                            }}
                          />
                        </ThemeProvider>
                      </Box>

                      <Box mt={2} />

                      <Box sx={{ display: "flex" }}>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                          <TextField
                            label="Mins salary"
                            variant="filled"
                            fullWidth
                            value={minsSalary} // Set value to the state variable
                      onChange={(e) => setminsSalary(e.target.value)} // Handle change and update state
                            sx={{
                              "& .MuiInputLabel-root": {
                                paddingLeft: "8px",
                                fontSize: "15px",
                                color: "#BEBEBE",
                              },
                            }}
                          />
                        </ThemeProvider>
                        <Box ml={2} />
                        <ThemeProvider theme={customTheme(outerTheme)}>
                          <TextField
                            label="Max salary"
                            variant="filled"
                            fullWidth
                            value={maxSalary} // Set value to the state variable
                      onChange={(e) => setmaxSalary(e.target.value)} // Handle change and update state
                            sx={{
                              "& .MuiInputLabel-root": {
                                paddingLeft: "8px",
                                fontSize: "15px",
                                color: "#BEBEBE",
                              },
                            }}
                          />
                        </ThemeProvider>
                      </Box>

                      <Box
                        sx={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          mt: 2,
                        }}
                      >
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={handleNextClick}
                          sx={{
                            color: "#268AFF",
                            height:"50px",
                            borderRadius:"17px"
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              color: "#FFFFFF",
                              textTransform: "capitalize",
                            }}
                          >
                            Create employee request
                          </Typography>
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Organizationdashboard;
