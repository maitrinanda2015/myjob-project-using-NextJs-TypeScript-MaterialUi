import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            width: '350px',
            borderColor: '#BEBEBE',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '10px',
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            borderRadius: '10px',
            '&::before, &::after': {
              borderBottom: 'none',
            },
            '&.Mui-focused:after': {
              borderBottom: 'none',
              backgroundColor: 'transparent',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: 'none',
            },
            '& .MuiFilledInput-root': {
              backgroundColor: 'transparent',
            },
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: 'none',
            },
            '&.Mui-focused:after': {
              borderBottom: 'none',
            },
          },
        },
      },
    },
  });

export default function CustomizedInputsStyleOverrides() {
  const outerTheme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr 1fr' },
        gap: 2,
      }}
    >
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField
          label="Enter phone number"
          variant="filled"
          sx={{
            '& .MuiInputLabel-root': {
              paddingLeft: '48px',
              paddingBottom: '8px',
              fontSize: '12px',
              color: '#BEBEBE',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="3 User.svg"
                  alt="Phone Icon"
                  style={{
                    width: '24px',
                    height: '24px',
                    paddingBottom: '2px',
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </ThemeProvider>
    </Box>
  );
}
