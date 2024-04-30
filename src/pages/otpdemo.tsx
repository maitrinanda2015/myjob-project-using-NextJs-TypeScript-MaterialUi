// pages/index.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import { Box, Button, Typography } from '@mui/material';
import OtpInput from 'react-otp-input';

const Otpdemo: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
  const [verificationStatus, setVerificationStatus] = useState<string>('');

  const handleChange = (otp: string) => {
    setOtp(otp);
  };

  const handleSubmit = () => {
    console.log('Submitted OTP:', otp);
    if (otp === '123456') { // Replace '123456' with the actual OTP sent to the user
      setVerificationStatus('OTP verified successfully!');
    } else {
      setVerificationStatus('Invalid OTP. Please try again.');
    }
  };

  return (
    

      <Box p={4}>
        <Typography variant="h3" gutterBottom>
          OTP Verification
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Please enter the OTP sent to your phone number.
        </Typography>

        <Box mt={4}>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            // separator={<span>&nbsp;&nbsp;</span>}
            // isInputNum={true}
            shouldAutoFocus={true}
          />
        </Box>

        <Box mt={4}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Verify OTP
          </Button>
        </Box>

        <Box mt={2}>
          <Typography variant="body1">{verificationStatus}</Typography>
        </Box>
      </Box>
    
  );
};

export default Otpdemo;
