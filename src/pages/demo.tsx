import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search"; // Import the Search icon

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#FFFFFF", // Set the background color to white
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px 10px 40px", // Increased padding to accommodate the icon
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: "none",
      borderColor: theme.palette.primary.main,
      outline: "none",
    },
  },
}));

const StyledButton = styled(Button)({
  backgroundColor: "#4BBF74",
  height: "43px",
  width: "100px",
  borderBottomRightRadius: "5px",
  borderTopRightRadius: "5px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  paddingRight: "10px",
  "&:hover": {
    backgroundColor: "#4BBF74", // Set the hover background color same as the default background color
  },
});

export default function CustomizedInputsStyled() {
  return (
    <Box component="form" noValidate sx={{ display: "flex", alignItems: "center" }}>
      <FormControl variant="standard" sx={{ position: "relative" }}>
        <BootstrapInput
          sx={{ color: "#CBCBCB" }}
          defaultValue="Search"
          id="Search"
          startAdornment={<SearchIcon sx={{ color: "#C6C6C6", marginLeft: "12px" }} />}
        />
      </FormControl>
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
  );
}
