import React from 'react';
import { Container, Box, Typography, Divider } from '@mui/material';
import CustomerDetails from './components/CustomerDetails';
import CustomerResidualRisk from './components/CustomerResidualRisk';
import RiskDistribution from './components/RiskDistribution';

function App() {
  return (
    <Container sx={{ pb: 10, mb: 10 }}>
      <Box sx={{ my: 4, p: 2 }}>
          <Typography variant="h4" align="left"><b>ARA JEWELLERY LLC</b></Typography>
          <Typography variant='body2' align="left">Office # 402, Dubai Diamond Plaza, Gold Souk Deira</Typography>
          <Typography variant='body2' align="left">+971 4 3305259</Typography>
          <Typography variant='body2' align="left">arajewellltd@gmail.com</Typography>
          <Divider sx={{ my: 1, border: '2px solid' }} />
          <CustomerDetails />
          <CustomerResidualRisk />
          <RiskDistribution />
          <Divider>&nbsp; ***** END OF CUSTOMER ***** &nbsp;</Divider>
      </Box>
    </Container>
  );
}

export default App;
