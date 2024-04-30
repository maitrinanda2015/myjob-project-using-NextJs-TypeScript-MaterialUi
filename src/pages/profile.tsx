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
  marginRight: "200px",
  "&:hover": {
    backgroundColor: "#4BBF74", // Set the hover background color same as the default background color
  },
});

const Profile: React.FC = () => {
  return (
    <Box sx={{ overflow: "hidden", height: "55vw", width: "1340px" }}>
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
                height: "850px",
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
                fontSize: "18px",
                zIndex: 2,
              }}
            >
              Good Morning
              <img
                src="image 297.svg" // Replace with the path to your second image
                alt=""
                style={{
                  position: "absolute",
                  top: 5,
                  left: 115,
                  height: "20px",
                  width: "auto",
                  zIndex: 1,
                }}
              />
            </Typography>
            <Typography
              color="#FFFFFF"
              fontFamily="Poppins"
              sx={{
                position: "absolute",
                top: 112,
                left: 30,
                fontSize: "25px",
                zIndex: 2,
              }}
            >
              Volkswagon India
              <img
                src="Group.svg" // Replace with the path to your second image
                alt=""
                style={{
                  position: "absolute",
                  top: 230,
                  left: -4,
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
                  top: 295,
                  left: -5,
                  height: "55px",
                  width: "153px",
                  zIndex: 1,
                  borderRadius: "12px",
                }}
              />
            </Typography>
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
                    bottom: 510,
                    left: 40,
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    color: "#263238",
                  }}
                >
                  Profile
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    color: "#130F26",
                    paddingBottom: "80px",
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
                    marginBottom: "75px",
                  }}
                />
                <img
                  src="Ellipse 1.svg"
                  alt="Notification"
                  style={{
                    height: "40px",
                    width: "auto",
                    marginLeft: "20px", // Add some left margin for spacing between the typography and the image
                    marginBottom: "75px",
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
                    marginBottom: "70px",
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
                        height: "90px",
                        width: "auto",
                        // marginRight: "200px", // Add some right margin for spacing
                        marginTop: "85px",
                        position: "absolute",
                        left: "0", // Align the image to the left
                        paddingLeft: "40px",
                      }}
                    />
                    <img
                      src="Ellipse 69.svg"
                      alt="Notification"
                      style={{
                        height: "25px",
                        width: "auto",
                        // marginRight: "200px", // Add some right margin for spacing
                        marginTop: "125px",
                        position: "absolute",
                        left: "0", // Align the image to the left
                        paddingLeft: "110px",
                      }}
                    />
                    <img
                      src="Image.svg"
                      alt="Notification"
                      style={{
                        height: "14px",
                        width: "auto",
                        // marginRight: "200px", // Add some right margin for spacing
                        marginTop: "130px",
                        position: "absolute",
                        left: "0", // Align the image to the left
                        paddingLeft: "116px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  paddingLeft: "170px",
                  color: "#263238",
                  paddingTop:"15px"
                  // Add any other styling properties here
                }}
              >
                Volkswagen India
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  paddingLeft: "190px",
                  color: "#263238",
                  // Add any other styling properties here
                }}
              >
                Profile 82% complete
              </Typography>
              <img
                src="Group 1202.svg"
                alt="Percentage"
                style={{
                  height: "15px",
                  width: "auto",
                  top: 182,
                  position: "absolute",
                  // paddingBottom: "30px",

                  right: 765,

                  // paddingTop: "5px", // Adjust as needed for vertical alignment
                  // paddingRight: "700px", // Adjust as needed for horizontal alignment
                }}
              />
            </Box>

            <Box>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      height: "200px",
                      width: "405px",
                      bgcolor: "#FFFFFF",
                      borderRadius: "12px",
                      marginLeft: "40px",
                      border: "1px",
                      marginTop: "33px",
                    }}
                  >
                    <div
                      style={{
                        height: "49px",
                        backgroundColor: "#DFF0FF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src="Profile (1).svg"
                        alt="Organization Logo"
                        style={{
                          height: "30px",
                          paddingBottom: "4px",
                          paddingLeft: "18px",
                          width: "auto",
                        }}
                      />

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            color: "#000000",
                            paddingRight: "108px",
                            paddingLeft: "5px",
                            paddingBottom: "5px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          color="initial"
                        >
                          Organization details
                        </Typography>

                        <img
                          src="Edit.svg"
                          alt="Edit"
                          style={{
                            height: "16px",
                            paddingRight: "10px",
                            paddingBottom: "8px",
                            width: "auto",
                            paddingLeft: "10px",
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            color: "#0A7BE7",
                            paddingRight: "15px",
                            paddingBottom: "5px",
                          }}
                        >
                          Edit
                        </Typography>
                      </div>
                    </div>

                    <Typography
                      sx={{
                        fontSize: "18px",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                        color: "#545454",
                      }}
                    >
                      Org.Name:{" "}
                      <span style={{ marginLeft: "25px" }}>My JOB Limited</span>
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "18px",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                        color: "#545454",
                      }}
                    >
                      Your name:{" "}
                      <span style={{ marginLeft: "20px" }}>Rahul Kumar</span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                        color: "#545454",
                      }}
                    >
                      Email:{" "}
                      <span style={{ marginLeft: "60px" }}>
                        organization@gmail.com
                      </span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                        color: "#545454",
                      }}
                    >
                      Contact no:{" "}
                      <span style={{ marginLeft: "20px" }}>9556266575</span>
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card
                    sx={{
                      height: "400px",
                      width: "494px",
                      bgcolor: "#FFFFFF",
                      borderRadius: "10px",
                      // padding: "10px",
                      marginLeft: "30px", // Move the card to the right
                      marginRight: "10px", // Adjust the right margin as needed
                      marginTop: "33px",
                    }}
                  >
                    <div
                      style={{
                        height: "49px",
                        backgroundColor: "#DFF0FF",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between", // Align items with space between
                      }}
                    >
                      <img
                        src="Document.svg"
                        alt="Document Logo"
                        style={{
                          height: "30px",
                          // Adjust as needed
                          paddingBottom: "1px",
                          paddingLeft: "20px",
                          width: "auto",
                        }}
                      />
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            color: "#000000",
                            paddingRight: "289px", // Adjust as needed
                            paddingLeft: "5px", // Adjust to move the text to the left
                            paddingBottom: "3px", // Adjust as needed
                            whiteSpace: "nowrap", // Keeps the text in one line
                            overflow: "hidden", // Prevents text overflow
                            textOverflow: "ellipsis", // Shows ellipsis if text overflows
                          }}
                          color="initial"
                        >
                          Upload certificate
                        </Typography>
                      </div>
                    </div>

                    <Box>
                      <div
                        style={{
                          height: "59px",
                          backgroundColor: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",

                          paddingLeft: "120px",
                          // borderRadius:"9px"
                          // Align items with space between
                        }}
                      >
                        <div
                          style={{
                            width: "350px",
                            height: "49px",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "10px",
                            backgroundColor: "#F8F8F8",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "20px",
                              color: "#000000",
                              paddingRight: "185px", // Adjust as needed
                              paddingLeft: "25px", // Adjust to move the text to the left
                              paddingBottom: "18px", // Adjust as needed
                              whiteSpace: "nowrap", // Keeps the text in one line
                              overflow: "hidden", // Prevents text overflow
                              // textOverflow: "ellipsis", // Shows ellipsis if text overflows
                            }}
                            color="initial"
                          >
                            GST Certificate
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#AEAEAE",
                              position: "absolute",
                              paddingLeft: "25px",
                              paddingTop: "25px",
                            }}
                          >
                            not uploaded
                          </Typography>

                          <img
                            src="Delete.svg"
                            alt="Document Logo"
                            style={{
                              height: "20px",
                              // Adjust as needed
                              paddingBottom: "2px",
                              // paddingLeft: "30px",
                              paddingRight: "15px",
                              width: "auto",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#F8F8F8",
                          width: "10px", // Adjust width as needed
                          height: "49px", // Adjust height as needed
                          display: "flex",
                          alignItems: "center",
                          borderTopLeftRadius: "15px",
                          borderBottomLeftRadius: "15px",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                          justifyContent: "space-between",
                          paddingLeft: "40px",
                          position: "absolute", // Position the div absolutely
                          top: 277, // Align to the top of the container
                          left: 560, // Align to the left of the container
                        }}
                      >
                        <img
                          src="Document (1).svg"
                          alt="Document Logo"
                          style={{
                            height: "20px",
                            paddingBottom: "15px",
                            width: "auto",
                            marginLeft: "-25px", // Move the image to the left
                            position: "absolute",
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "10px",
                            color: "#F1655C",
                            paddingTop: "20px",
                            marginLeft: "-30px", // Move the typography to the left
                          }}
                        >
                          Upload
                        </Typography>
                      </div>

                      <div
                        style={{
                          height: "59px",
                          backgroundColor: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "120px",
                          justifyContent: "space-between", // Align items with space between
                          marginTop: "-1.1px",
                        }}
                      >
                        <div
                          style={{
                            width: "350px",
                            height: "49px",
                            display: "flex",
                            backgroundColor: "#F8F8F8",
                            borderRadius: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "20px",
                              color: "#000000",
                              paddingRight: "185px", // Adjust as needed
                              paddingLeft: "25px", // Adjust to move the text to the left
                              paddingBottom: "18px", // Adjust as needed
                              whiteSpace: "nowrap", // Keeps the text in one line
                              overflow: "hidden", // Prevents text overflow
                              // textOverflow: "ellipsis", // Shows ellipsis if text overflows
                            }}
                            color="initial"
                          >
                            Pan Card
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#AEAEAE",
                              position: "absolute",
                              paddingLeft: "25px",
                              paddingTop: "25px",
                            }}
                          >
                            Created 14 February 2022
                          </Typography>
                          <img
                            src="Delete (1).svg"
                            alt="Document Logo"
                            style={{
                              height: "20px",
                              // Adjust as needed
                              paddingBottom: "2px",
                              paddingLeft: "30px",
                              width: "auto",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#F8F8F8",
                          width: "10px", // Adjust width as needed
                          height: "49px", // Adjust height as needed
                          display: "flex",
                          alignItems: "center",
                          borderTopLeftRadius: "15px",
                          borderBottomLeftRadius: "15px",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                          justifyContent: "space-between",
                          paddingLeft: "40px",
                          position: "absolute", // Position the div absolutely
                          top: 334, // Align to the top of the container
                          left: 560, // Align to the left of the container
                        }}
                      >
                        <img
                          src="Document (2).svg"
                          alt="Document Logo"
                          style={{
                            height: "20px",
                            paddingBottom: "15px",
                            width: "auto",
                            marginLeft: "-25px", // Move the image to the left
                            position: "absolute",
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "10px",
                            color: "#A5A9BA",
                            // paddingRight:"50px",
                            // marginRight:"550px",
                            paddingTop: "20px",
                            marginLeft: "-35px", // Move the typography to the left
                          }}
                        >
                          Uploaded
                        </Typography>
                      </div>
                      <div
                        style={{
                          height: "59px",
                          backgroundColor: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "120px",
                          justifyContent: "space-between", // Align items with space between
                          marginTop: "-1.1px",
                        }}
                      >
                        <div
                          style={{
                            width: "350px",
                            height: "49px",
                            display: "flex",
                            backgroundColor: "#F8F8F8",
                            borderRadius: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "20px",
                              color: "#000000",
                              paddingRight: "185px", // Adjust as needed
                              paddingLeft: "25px", // Adjust to move the text to the left
                              paddingBottom: "18px", // Adjust as needed
                              whiteSpace: "nowrap", // Keeps the text in one line
                              overflow: "hidden", // Prevents text overflow
                              // textOverflow: "ellipsis", // Shows ellipsis if text overflows
                            }}
                            color="initial"
                          >
                            FSSAI Licence
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#AEAEAE",
                              position: "absolute",
                              paddingLeft: "25px",
                              paddingTop: "25px",
                            }}
                          >
                            Created 14 February 2022
                          </Typography>
                          <img
                            src="Delete (1).svg"
                            alt="Document Logo"
                            style={{
                              height: "20px",
                              // Adjust as needed
                              paddingBottom: "2px",
                              paddingRight: "15px",
                              width: "auto",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#F8F8F8",
                          width: "10px", // Adjust width as needed
                          height: "49px", // Adjust height as needed
                          display: "flex",
                          alignItems: "center",
                          borderTopLeftRadius: "15px",
                          borderBottomLeftRadius: "15px",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                          justifyContent: "space-between",
                          paddingLeft: "40px",
                          position: "absolute", // Position the div absolutely
                          top: 392, // Align to the top of the container
                          left: 560, // Align to the left of the container
                        }}
                      >
                        <img
                          src="Document (2).svg"
                          alt="Document Logo"
                          style={{
                            height: "20px",
                            paddingBottom: "15px",
                            width: "auto",
                            marginLeft: "-25px", // Move the image to the left
                            position: "absolute",
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "10px",
                            color: "#A5A9BA",
                            // paddingRight:"50px",
                            // marginRight:"550px",
                            paddingTop: "20px",
                            marginLeft: "-35px", // Move the typography to the left
                          }}
                        >
                          Uploaded
                        </Typography>
                      </div>
                      <div
                        style={{
                          height: "59px",
                          backgroundColor: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "120px",
                          justifyContent: "space-between", // Align items with space between
                          marginTop: "-1.1px",
                        }}
                      >
                        <div
                          style={{
                            width: "350px",
                            height: "49px",
                            display: "flex",
                            backgroundColor: "#F8F8F8",
                            borderRadius: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "20px",
                              color: "#000000",
                              paddingRight: "185px", // Adjust as needed
                              paddingLeft: "25px", // Adjust to move the text to the left
                              paddingBottom: "18px", // Adjust as needed
                              whiteSpace: "nowrap", // Keeps the text in one line
                              overflow: "hidden", // Prevents text overflow
                              // textOverflow: "ellipsis", // Shows ellipsis if text overflows
                            }}
                            color="initial"
                          >
                            Company incorp.Certificate
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#AEAEAE",
                              position: "absolute",
                              paddingLeft: "25px",
                              paddingTop: "25px",
                            }}
                          >
                            Created 14 February 2022
                          </Typography>
                          <img
                            src="Delete (1).svg"
                            alt="Document Logo"
                            style={{
                              height: "20px",
                              // Adjust as needed
                              paddingBottom: "2px",
                              // paddingLeft: "30px",
                              paddingRight: "15px",
                              width: "auto",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#F8F8F8",
                          width: "10px", // Adjust width as needed
                          height: "49px", // Adjust height as needed
                          display: "flex",
                          alignItems: "center",
                          borderTopLeftRadius: "15px",
                          borderBottomLeftRadius: "15px",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                          justifyContent: "space-between",
                          paddingLeft: "40px",
                          position: "absolute", // Position the div absolutely
                          top: 450, // Align to the top of the container
                          left: 560, // Align to the left of the container
                        }}
                      >
                        <img
                          src="Document (2).svg"
                          alt="Document Logo"
                          style={{
                            height: "20px",
                            paddingBottom: "15px",
                            width: "auto",
                            marginLeft: "-25px", // Move the image to the left
                            position: "absolute",
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "10px",
                            color: "#A5A9BA",
                            // paddingRight:"50px",
                            // marginRight:"550px",
                            paddingTop: "20px",
                            marginLeft: "-35px", // Move the typography to the left
                          }}
                        >
                          Uploaded
                        </Typography>
                      </div>
                      <div
                        style={{
                          height: "59px",
                          backgroundColor: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "120px",
                          justifyContent: "space-between", // Align items with space between
                          marginTop: "-1.1px",
                        }}
                      >
                        <div
                          style={{
                            width: "350px",
                            height: "49px",
                            display: "flex",
                            backgroundColor: "#F8F8F8",
                            borderRadius: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "20px",
                              color: "#000000",
                              paddingRight: "185px", // Adjust as needed
                              paddingLeft: "25px", // Adjust to move the text to the left
                              paddingBottom: "18px", // Adjust as needed
                              whiteSpace: "nowrap", // Keeps the text in one line
                              overflow: "hidden", // Prevents text overflow
                              // textOverflow: "ellipsis", // Shows ellipsis if text overflows
                            }}
                            color="initial"
                          >
                            Shop & establisment certi...
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#AEAEAE",
                              position: "absolute",
                              paddingLeft: "25px",
                              paddingTop: "25px",
                            }}
                          >
                            Created 14 February 2022
                          </Typography>
                          <img
                            src="Delete (1).svg"
                            alt="Document Logo"
                            style={{
                              height: "20px",
                              // Adjust as needed
                              paddingBottom: "2px",
                              // paddingLeft: "50px",
                              paddingRight: "15px",
                              width: "auto",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#F8F8F8",
                          width: "10px", // Adjust width as needed
                          height: "49px", // Adjust height as needed
                          display: "flex",
                          alignItems: "center",
                          borderTopLeftRadius: "15px",
                          borderBottomLeftRadius: "15px",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                          justifyContent: "space-between",
                          paddingLeft: "40px",
                          position: "absolute", // Position the div absolutely
                          top: 508, // Align to the top of the container
                          left: 560, // Align to the left of the container
                        }}
                      >
                        <img
                          src="Document (2).svg"
                          alt="Document Logo"
                          style={{
                            height: "20px",
                            paddingBottom: "15px",
                            width: "auto",
                            marginLeft: "-25px", // Move the image to the left
                            position: "absolute",
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "10px",
                            color: "#A5A9BA",
                            // paddingRight:"50px",
                            // marginRight:"550px",
                            paddingTop: "20px",
                            marginLeft: "-35px", // Move the typography to the left
                          }}
                        >
                          Uploaded
                        </Typography>
                      </div>
                      <div
                        style={{
                          height: "59px",
                          backgroundColor: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "120px",
                          justifyContent: "space-between", // Align items with space between
                          marginTop: "-1.1px",
                        }}
                      >
                        <div
                          style={{
                            width: "350px",
                            height: "49px",
                            display: "flex",
                            backgroundColor: "#F8F8F8",
                            borderRadius: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "20px",
                              color: "#000000",
                              paddingRight: "185px", // Adjust as needed
                              paddingLeft: "25px", // Adjust to move the text to the left
                              paddingBottom: "18px", // Adjust as needed
                              whiteSpace: "nowrap", // Keeps the text in one line
                              overflow: "hidden", // Prevents text overflow
                              // textOverflow: "ellipsis", // Shows ellipsis if text overflows
                            }}
                            color="initial"
                          >
                            MSME registration certificate
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              color: "#AEAEAE",
                              position: "absolute",
                              paddingLeft: "25px",
                              paddingTop: "25px",
                            }}
                          >
                            Created 14 February 2022
                          </Typography>
                          <img
                            src="Delete (1).svg"
                            alt="Document Logo"
                            style={{
                              height: "20px",
                              // Adjust as needed
                              paddingBottom: "2px",
                              // paddingLeft: "50px",
                              paddingRight: "15px",
                              width: "auto",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#F8F8F8",
                          width: "10px", // Adjust width as needed
                          height: "49px", // Adjust height as needed
                          display: "flex",
                          alignItems: "center",
                          borderTopLeftRadius: "15px",
                          borderBottomLeftRadius: "15px",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                          justifyContent: "space-between",
                          paddingLeft: "40px",
                          position: "absolute", // Position the div absolutely
                          top: 566, // Align to the top of the container
                          left: 560, // Align to the left of the container
                        }}
                      >
                        <img
                          src="Document (2).svg"
                          alt="Document Logo"
                          style={{
                            height: "20px",
                            paddingBottom: "15px",
                            width: "auto",
                            marginLeft: "-25px", // Move the image to the left
                            position: "absolute",
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "10px",
                            color: "#A5A9BA",
                            // paddingRight:"50px",
                            // marginRight:"50px",
                            paddingTop: "20px",
                            marginLeft: "-35px", // Move the typography to the left
                          }}
                        >
                          Uploaded
                        </Typography>
                      </div>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Profile;
