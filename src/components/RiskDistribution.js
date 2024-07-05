import React from 'react';
import { Box, Divider, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const data = [
    { rbaType: "CUSTOMER RESIDUAL RISK", rbaField: "1.706", percentage: "100%", risk: "1.706" }
];

function RiskDistribution() {
    return (
        <Box sx={{ my: 2, ml: 1 }}>
            <Paper elevation={10} sx={{ mb: 2, width: '60%', pr: 8, color: 'darkblue', background: 'lightgrey' }}>
                <Typography><b><i>RISK DISTRIBUTION</i></b></Typography>
            </Paper>
            <Box sx={{ p: 2, ml: 1 }}>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ background: 'rgb(240, 240, 240)' }}>
                                <TableCell>RBA TYPE</TableCell>
                                <TableCell>RBA FIELD</TableCell>
                                <TableCell>(%)</TableCell>
                                <TableCell align='right'>RISK</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.rbaType}</TableCell>
                                    <TableCell>{row.rbaField}</TableCell>
                                    <TableCell>{row.percentage}</TableCell>
                                    <TableCell align='right'>{row.risk}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display='flex' flexDirection='row' justifyContent='flex-end' sx={{ width: '100%' }}>
                    <Box sx={{ pt: 1 }}>
                        <Typography textAlign='right'>
                            (Sum of Distributed Risk) <b>OVERALL RISK :&nbsp;</b>
                        </Typography>
                    </Box>
                    <Box width='20%' sx={{ mr: 1 }}>
                        <Divider sx={{ mt: 1, border: '1px solid', borderColor: 'blue', width: '100%' }} />
                        <Typography textAlign='right'><b>{data[0].risk}</b></Typography>
                        <Divider sx={{ border: '1px solid', borderColor: 'blue', width: '100%' }} />
                        <Divider sx={{ mt: 0.5, border: '1px solid', borderColor: 'blue', width: '100%' }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box sx={{ mt: 2, background: 'lightgrey', width: '100%', px: 0.5 }}>
                    <Typography><b>RISK METHODOLOGY</b></Typography>
                    <Typography variant='body2' sx={{ color: 'white', background: 'red' }}><pre>High Risk         | MORE THAN 3.1</pre></Typography>
                    <Typography variant='body2' sx={{ color: 'white', background: 'darkviolet' }}><pre>Medium High Risk  | 2.1 {'<'}= 3.1</pre></Typography>
                    <Typography variant='body2' sx={{ color: 'white', background: 'olive' }}><pre>Medium Risk       | 1.1 {'<'}= 2.1</pre></Typography>
                    <Typography variant='body2' sx={{ color: 'white', background: 'darkgreen' }}><pre>Low Risk          | {'<'}= 1.1</pre></Typography>
                </Box>
                <Box sx={{ mt: 2, ml: 4, background: 'lightgrey', display: 'flex', flexDirection: 'row' }}>
                    <Typography variant='body2' sx={{ textAlign: 'left' }}>
                        <b><i>
                            <span style={{ color: 'maroon', fontSize: 18 }}>*Note :-&nbsp;</span> For legal customers, the system includes a profile with the shareholder who has the highest level of risk.<br />
                            <span style={{ color: 'maroon' }}>**</span>If De-Risked, Then De-Risk Parameter will be Club Risk Rating, Else If one or more individual risk scores is 4(Override) and Not Mitigated, the Club Risk Rating will be overridden to High Risk, Else Club Risk Rating is Calculated Based on Risk Score as per the set score range.
                        </i></b>
                    </Typography>
                    <Box sx={{ color: 'darkblue', width: '300%', mt: 4 }}>
                        <Typography sx={{ mt: 2, textAlign: 'right' }}>
                            <pre>CUSTOMER PROFILE RISK:        <b>{data[0].risk}</b></pre>
                        </Typography>
                        <Typography sx={{ mt: 2, textAlign: 'right' }}>
                            <pre>CLUB RISK RATING:  <b>MEDIUM RISK</b></pre>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default RiskDistribution;
