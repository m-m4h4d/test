import React from 'react';
import { Typography, Paper } from '@mui/material';

function CustomerDetails() {
  const data = {
    customer: {
      uid: 1330000081,
      name: "ASHIRWAD JEWELLERY TRADING L.L.C",
      dateOfIncorporation: "2021-12-27",
      countryOfIncorporation: "UNITED ARAB EMIRATES",
    }
  };
  return (
    <Paper elevation={10} sx={{ mb: 2, width: '75%', pr: 8 }}>
      <Typography variant='h6'>
        <b><i>
          CUSTOMER DETAILS ={'>'} UID : {data.customer.uid} |
          NAME : {data.customer.name} |
          DATE OF INCORPORATION : {data.customer.dateOfIncorporation} |
          COUNTRY OF INCORPORATION : {data.customer.countryOfIncorporation}
        </i></b>
      </Typography>
    </Paper>
  );
}

export default CustomerDetails;
