import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider } from '@mui/material';

function createData(field, risk) {
    return { field, risk };
}

const data = {
    customer: {
        name: "ASHIRWAD JEWELLERY TRADING L.L.C",
        legal_Name_Sanction: createData("ASHIRWAD JEWELLERY TRADING L.L.C", 1),
        country_Of_Incorporation: createData("UNITED ARAB EMIRATES", 2),
        operation_Countries: createData("UNITED ARAB EMIRATES", 2),
        countries_Source_Of_Funds: createData("UNITED ARAB EMIRATES", 2),
        business_Activity: createData("NON-MANUFACTURED PRECIOUS METAL TRADING, PEARLS AND PRECIOUS STONE", 3),
        source_Of_Funds: createData("Business Proceeds", 2),
        license_Type: createData("COMMERCIAL License", 1),
        customer_Type: createData("LEGAL ENTITIES", 1),
        license_Category: createData("LLC", 2),
        jurisdiction: createData("MAIN LAND", 1),
    },
    shareholder: {
        name: "MEHTA DISHANT VIPULKUMAR",
        dual_Nationality: createData("NO", 1),
        nationality: createData("INDIA", 2),
        pep: createData("NO", 1),
        source_Of_Funds: createData("Business Proceeds", 2),
        occupation: createData("GOLD AND PRECIOUS METAL CASTING", 3),
        country_Of_Residence: createData("UNITED ARAB EMIRATES", 2),
        full_Name_Sanction: createData("MEHTA DISHANT VIPULKUMAR", 1),
    }
};

function CustomerResidualRisk() {
    return (
        <Box sx={{ mt: 2, ml: 1 }}>
            <Paper elevation={10} sx={{ mb: 2, width: '60%', pr: 8, color: 'darkblue', background: 'lightgrey' }}>
                <Typography><b><i>CUSTOMER RESIDUAL RISK</i></b></Typography>
            </Paper>
            <Box sx={{ p: 2, ml: 1 }}>
                <Paper elevation={10} sx={{ mb: 2, width: '55%', pr: 8, color: 'darkblue', background: 'lightgrey' }}>
                    <Typography>
                        <i>CUSTOMER --{'>'} {data.customer.name} - (CUSTOMER)</i>
                    </Typography>
                </Paper>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ background: 'rgb(240, 240, 240)' }}>
                                <TableCell>RBA TYPE</TableCell>
                                <TableCell>RBA FIELD</TableCell>
                                <TableCell align='right'>RISK</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.entries(data.customer).map(([key, value], index) => (
                                key !== 'name' && (
                                    <TableRow key={index}>
                                        <TableCell>{key.replace(/_/g, ' ').toUpperCase()}</TableCell>
                                        <TableCell>{value.field}</TableCell>
                                        <TableCell align='right'>{value.risk}</TableCell>
                                    </TableRow>
                                )
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Paper elevation={10} sx={{ my: 2, width: '55%', pr: 8, color: 'darkblue', background: 'lightgrey' }}>
                    <Typography>
                        <i>SHAREHOLDER [NATURAL PERSONS] --{'>'} {data.shareholder.name} - (SHAREHOLDER [NATURAL PERSONS])</i>
                    </Typography>
                </Paper>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ background: 'rgb(240, 240, 240)' }}>
                                <TableCell>RBA TYPE</TableCell>
                                <TableCell>RBA FIELD</TableCell>
                                <TableCell align='right'>RISK</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.entries(data.shareholder).map(([key, value], index) => (
                                key !== 'name' && (
                                    <TableRow key={index}>
                                        <TableCell>{key.replace(/_/g, ' ').toUpperCase()}</TableCell>
                                        <TableCell>{value.field}</TableCell>
                                        <TableCell align='right'>{value.risk}</TableCell>
                                    </TableRow>
                                )
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display='flex' flexDirection='row' justifyContent='flex-end' sx={{ width: '100%' }}>
                    <Box sx={{ pt: 1 }}>
                        <Typography textAlign='right'>
                            (Total Sum of Risk (Customer + Relation) / Total No. of Risk) <b>ONBOARDING RISK :&nbsp;</b>
                        </Typography>
                        <Typography textAlign='right'>
                            Mitigation Score :&nbsp;
                        </Typography>
                        <Typography textAlign='right'>
                            (Onboarding Risk * Mitigation Score) <b>RESIDUAL RISK :&nbsp;</b>
                        </Typography>
                    </Box>
                    <Box width='20%' sx={{ mr: 1 }}>
                        <Divider sx={{ mt: 1, border: '1px solid', borderColor: 'blue', width: '100%' }} />
                        <Typography textAlign='right'><b>1.706</b></Typography>
                        <Typography textAlign='right'><b>0</b></Typography>
                        <Divider sx={{ border: '1px solid', borderColor: 'blue', width: '100%' }} />
                        <Typography textAlign='right'><b>1.706</b></Typography>
                        <Divider sx={{ border: '1px solid', borderColor: 'blue', width: '100%' }} />
                        <Divider sx={{ mt: 0.5, border: '1px solid', borderColor: 'blue', width: '100%' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CustomerResidualRisk;
