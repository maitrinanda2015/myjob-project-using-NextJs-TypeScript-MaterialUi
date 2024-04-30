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
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";


// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   "& .MuiInputBase-input": {
//     borderRadius: 4,
//     position: "relative",
//     backgroundColor: "#FFFFFF",
//     borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
//     fontSize: 16,
//     width: "1200px",

//     padding: "10px 12px 10px 40px", // Increased padding to accommodate the icon
//     transition: theme.transitions.create([
//       "border-color",
//       "background-color",
//       "box-shadow",
//     ]),
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//     "&:focus": {
//       boxShadow: "none",
//       borderColor: theme.palette.primary.main,
//       outline: "none",
//     },
//   },
// }));

const StyledButton = styled(Button)({
  backgroundColor: "#4BBF74",
  height: "43px",
  width: "100px",
  borderBottomRightRadius: "5px",
  borderTopRightRadius: "5px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  paddingRight: "10px",
  marginRight:"200px",
  "&:hover": {
    backgroundColor: "#4BBF74", // Set the hover background color same as the default background color
  },
});

const Jobdetailspage: React.FC = () => {
  return (
    <Box sx={{ overflow: "hidden", height: "100vh", width: "1340px" }}>
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
                height: "100vh",
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
              color="#FFFFFF"
              fontFamily="Poppins"
              sx={{
                position: "absolute",
                top: 80,
                left: 30,
                fontSize: "24px",
                zIndex: 2,
              }}
            >
              Hello,
              <br /> Bijaya Ranjan
              <img
                src="image 297.svg" // Replace with the path to your second image
                alt=""
                style={{
                  position: "absolute",
                  top: 45,
                  left: 145,
                  height: "20px",
                  width: "auto",
                  zIndex: 1,
                }}
              />
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
                height: "140px",
                width: "1200px",
                paddingBottom: "50px", // Adjusted paddingBottom
              }}
            >
              <Box
                component="form"
                noValidate
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  top: "15px", // Adjust the vertical position as needed
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
                      paddingLeft:"20px",
                      color: "#CBCBCB",
                      backgroundColor: "#FFFFFF",
                      width: "500px",
                    //   borderRadius: "5px",
                    borderTopLeftRadius:"5px",
                    borderBottomLeftRadius:"5px",
                    //   border: "1px solid #E4E4E",
                    marginLeft:"20px"
                    
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
                  height: "95%",
                  backgroundColor: "#F4F4F4",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: 80,
                    left: 50,
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    color: "#263238",
                  }}
                >
                  Job details
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    color: "#130F26",
                    paddingBottom: "60px",
                    paddingLeft: "740px",
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
                    marginBottom: "60px",
                  }}
                />
                <img
                  src="Ellipse 1.svg"
                  alt="Notification"
                  style={{
                    height: "40px",
                    width: "auto",
                    marginLeft: "20px", // Add some left margin for spacing between the typography and the image
                    marginBottom: "60px",
                  }}
                />

                <Box
                  sx={{
                    height: "35px",

                    backgroundColor: "#DADADA",
                    display: "flex",
                    alignItems: "center",

                    // position:"absolute",
                    // border: "3px ",
                    paddingRight: "30px",

                    // marginLeft:"800px",
                    marginBottom: "60px",
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

                  <Box>
                    <img
                      src="Ellipse 27.svg"
                      alt="Notification"
                      style={{
                        height: "50px",
                        width: "auto",
                        // marginRight: "200px", // Add some right margin for spacing
                        marginTop: "117px",
                        position: "absolute",
                        left: "0", // Align the image to the left
                        paddingLeft: "40px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Stack>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    paddingLeft: "100px",
                    paddingTop: "20px",
                    color: "#545454",
                    // Add any other styling properties here
                  }}
                >
                  Sr, Software Engineer
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    paddingLeft: "100px",
                    color: "#5454",
                    // Add any other styling properties here
                  }}
                >
                  Volkswagon Ind.LTD
                </Typography>
                <div
                  style={{
                    borderRadius: "10px",
                    
                    height: "20px",
                    width: "50px",
                    position:"absolute",
                    backgroundColor:"#E2F8D5",
                    left:300,
                    top:160
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      color: "#589334",
                      paddingLeft: "330px",
                      position: "absolute",
                      top: -1,
                      right:7

                    }}
                  >
                    Active
                  </Typography>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    marginLeft: "40px",

                    // marginRight: "40px",
                    border: "1px solid #E1E1E1", // Set border to 1px solid with color #E1E1E1
                    // Add any other desired styles here
                  }}
                ></div>
                <Box>
                  <div
                    style={{
                      height: "50px",
                      width: "50px",
                      backgroundColor: "#F3F3F3",
                      position: "absolute",
                      marginTop: "20px",
                      left: 40,
                      top: 235,
                      borderTopLeftRadius: "8px",
                      borderBottomLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  >
                    <img
                      src="Group 1043.svg"
                      alt="Group 1043"
                      style={{
                        height: "30px",
                        width: "auto",
                        // marginRight: "200px", // Add some right margin for spacing
                        marginTop: "10px",
                        position: "absolute",
                        paddingLeft: "9px",
                      }}
                    />
                  </div>

                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#979797",
                      fontSize: "14px",
                      paddingLeft: "110px",
                      paddingTop: "35px",
                    }}
                  >
                    Salary
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#000000",
                      fontSize: "16px",
                      paddingLeft: "110px",
                      paddingTop: "2px",
                    }}
                  >
                    ₹5,74,908
                  </Typography>
                </Box>
                <Box>
                  <div
                    style={{
                      height: "50px",
                      width: "50px",
                      backgroundColor: "#F3F3F3",
                      position: "absolute",
                      marginTop: "20px",
                      left: 230,
                      top: 235,
                      borderTopLeftRadius: "8px",
                      borderBottomLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  >
                    <img
                      src="2 Friends.svg"
                      alt="2 Friends"
                      style={{
                        height: "30px",
                        width: "auto",
                        // marginRight: "200px", // Add some right margin for spacing
                        marginTop: "10px",
                        position: "absolute",
                        paddingLeft: "9px",
                      }}
                    />
                  </div>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#979797",
                      fontSize: "14px",
                      paddingLeft: "300px",
                      position: "absolute",
                      top: 259,
                    }}
                  >
                    Opening
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#000000",
                      fontSize: "16px",
                      paddingLeft: "300px",
                      position: "absolute",
                      top: 280,
                    }}
                  >
                    22 posts
                  </Typography>
                </Box>
                <Box>
                  <div
                    style={{
                      height: "50px",
                      width: "50px",
                      backgroundColor: "#F3F3F3",
                      position: "absolute",
                      marginTop: "20px",
                      left: 430,
                      top: 235,
                      borderTopLeftRadius: "8px",
                      borderBottomLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  >
                    <img
                      src="Work.svg"
                      alt="2 Friends"
                      style={{
                        height: "30px",
                        width: "auto",
                        // marginRight: "200px", // Add some right margin for spacing
                        marginTop: "10px",
                        position: "absolute",
                        paddingLeft: "11px",
                      }}
                    />
                  </div>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#979797",
                      fontSize: "14px",
                      paddingLeft: "500px",
                      position: "absolute",
                      top: 259,
                    }}
                  >
                    Experience
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#000000",
                      fontSize: "16px",
                      paddingLeft: "500px",
                      position: "absolute",
                      top: 280,
                    }}
                  >
                    2+ years
                  </Typography>
                </Box>
                <Box>
                  <div
                    style={{
                      height: "50px",
                      width: "50px",
                      backgroundColor: "#F3F3F3",
                      position: "absolute",
                      marginTop: "20px",
                      left: 630,
                      top: 235,
                      borderTopLeftRadius: "8px",
                      borderBottomLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  >
                    <img
                      src="Location.svg"
                      alt="Location"
                      style={{
                        height: "30px",
                        width: "auto",
                        // marginRight: "200px", // Add some right margin for spacing
                        marginTop: "10px",
                        position: "absolute",
                        paddingLeft: "12px",
                      }}
                    />
                  </div>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#979797",
                      fontSize: "14px",
                      paddingLeft: "700px",
                      position: "absolute",
                      top: 259,
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#000000",
                      fontSize: "16px",
                      paddingLeft: "700px",
                      position: "absolute",
                      top: 280,
                    }}
                  >
                    Remote India
                  </Typography>
                </Box>

                <div
                  style={{
                    marginTop: "25px",
                    marginLeft: "40px",
                    border: "1px solid #E1E1E1", // Set border to 1px solid with color #E1E1E1
                    // Add any other desired styles here
                  }}
                ></div>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    color: "#979797",
                    paddingLeft: "50px",
                    paddingTop: "10px",
                    // Add any other desired styles here
                  }}
                >
                  Description
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "#545454",
                    paddingLeft: "50px",
                    paddingTop: "10px",
                    // Add any other desired styles here
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, repellat <br /> omnis nihil odio iste iure.
                </Typography>
                <div
                  style={{
                    marginTop: "15px",
                    marginLeft: "40px",
                    border: "1px solid #E1E1E1", // Set border to 1px solid with color #E1E1E1
                    // Add any other desired styles here
                  }}
                ></div>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    color: "#979797",
                    paddingLeft: "50px",
                    paddingTop: "10px",
                    // Add any other desired styles here
                  }}
                >
                  Manpower type
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "#545454",
                    paddingLeft: "50px",
                    paddingTop: "10px",
                    // Add any other desired styles here
                  }}
                >
                  Direct recruitment
                </Typography>
                <div
                  style={{
                    marginTop: "20px",
                    marginLeft: "40px",
                    border: "1px solid #E1E1E1", // Set border to 1px solid with color #E1E1E1
                    // Add any other desired styles here
                  }}
                ></div>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    color: "#979797",
                    paddingLeft: "50px",
                    paddingTop: "10px",
                    // Add any other desired styles here
                  }}
                >
                  Applicants applied
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "#545454",
                    paddingLeft: "50px",
                    paddingTop: "10px",
                    // Add any other desired styles here
                  }}
                >
                  1230
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Jobdetailspage;
