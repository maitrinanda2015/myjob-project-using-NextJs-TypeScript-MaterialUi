import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box>
      <TextField
      multiline
      rows={3}
        sx={{
        //   height: "100px",
          width: "400px",
          border: "1px solid #EAEAEA", // Combined border style
          borderRadius: "10px", // Add border radius
          "& .MuiInputBase-root": {
            padding: 0, // Remove default padding
           
          },
        }}
        
        id="standard-basic"
        label="Job title"
        variant="standard"
        InputProps={{ disableUnderline: true }} // Add InputProps
        
      />
    </Box>
  );
}