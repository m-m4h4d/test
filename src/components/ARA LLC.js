import React from "react";
import './App.css';
import {
  Container,
  Box,
  Typography,
  Divider,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
  TableHead,
  tableCellClasses
} from "@mui/material";

const data = {
  TradeLicenseInfo: {
    businessActivity: "Accounting",
    tradeLicenseNo: "123456",
    countryOfIncorporation: "Argentina",
    licensingAuthority: "qwwqe",
    incorporationDate: "2024-07-11T00:00:00.000Z",
    licenseExpiry: "2024-07-12T00:00:00.000Z",
  },
  contactInfo: {
    contactType: "Telephone",
    contactCountry: "Brazil",
    contactNumber: "321321321321",
    emailAddress: "email@gmail.com",
    POBox: "20345",
    website: "http://www.website.com",
  },
  financialInfo: {
    bankName: "bank name",
    accountNo: "64665645",
    accountName: "Account Name",
    iban: "IBAN no",
    bicSwift: "BIC/Swift",
    currency: "usd",
    yearOfRelationship: "2019",
    branch: "Islamabad",
    annualBusiness: "200000",
    totalShareCapital: "100000",
    totalShareHolderEquity: "100000",
    totalAssets: "100000",
    totalAnnualSales: "10000",
  },
  _id: "668f95f4e8ed886eea89ada1",
  fullLegalName: "New Customer",
  riskProfile: "CRP Pending",
  registeredAddress: "Registered Address",
  businessAddress: "Business address ",
  taxNo: "87687686",
  jurisdiction: "FREE ZONE",
  sourceOfFunds: "LOANS",
  shareHolders: [
    {
      idDoc: {
        type: "ID",
        issueCountry: "Albania",
        number: "665+6565",
        issueDate: "2024-12-31T00:00:00.000Z",
        expiryDate: "2023-12-31T00:00:00.000Z",
      },
      contactInfo: {
        contactType: "Telephone",
        contactCountry: "Austria",
        contactNumber: "2013565",
      },
      fullLegalName: "kjsdkjdfhk",
      doB: "2024-12-31T00:00:00.000Z",
      residentialStatus: "Non Resident",
      occupation: "Occupation1",
      dualNationality: "No",
      percentShares: "22",
      ubo: true,
      uboReason: "SHARE HOLDING",
      uboDate: "2024-07-01T00:00:00.000Z",
      isAuthorizedSignatory: false,
      _id: "668f95f4e8ed886eea89ada2",
    },
  ],
  addedDate: "1901-01-01T00:00:00.000Z",
  lastModified: "1901-01-01T00:00:00.000Z",
  company: "64c07b5bb8ead8bf27b144ba",
  createdAt: "2024-07-11T08:21:08.714Z",
  updatedAt: "2024-07-11T08:21:08.714Z",
  __v: 0,
};

function createData(field, risk) {
  return { field, risk };
}

const rows = {
  customer: {
    name: data.fullLegalName,
    legal_Name_Sanction: createData(data.fullLegalName, 1),
    country_Of_Incorporation: createData(data.TradeLicenseInfo.countryOfIncorporation, 2),
    country_Of_Residence: createData(data.contactInfo.contactCountry, 2),
    business_Address: createData(data.businessAddress, 2),
    business_Activity: createData(data.TradeLicenseInfo.businessActivity, 3),
    source_Of_Funds: createData(data.sourceOfFunds, 2),
    licensing_Authority: createData(data.TradeLicenseInfo.licensingAuthority, 1),
    customer_Type: createData(data.riskProfile, 1),
    trade_License_No: createData(data.TradeLicenseInfo.tradeLicenseNo, 2),
    jurisdiction: createData(data.jurisdiction, 1),
  },
  shareholder: data.shareHolders.map((shareholder, index) => ({
    name: shareholder.fullLegalName,
    dual_Nationality: createData(shareholder.dualNationality, 1),
    nationality: createData(shareholder.contactInfo.contactCountry, 2),
    document_Type: createData(shareholder.idDoc.type, 1),
    source_Of_Funds: createData(shareholder.uboReason, 2),
    occupation: createData(shareholder.occupation, 3),
    country_Of_Residence: createData(shareholder.idDoc.issueCountry, 2),
    full_Name_Sanction: createData(shareholder.fullLegalName, 1),
  })),
};

function App() {
  const user = {
    customer: {
      uid: data._id,
      name: data.fullLegalName,
      dateOfIncorporation: data.TradeLicenseInfo.incorporationDate,
      countryOfIncorporation: data.TradeLicenseInfo.countryOfIncorporation,
    },
  };

  const info = [
    {
      rbaType: "CUSTOMER RESIDUAL RISK",
      rbaField: "1.706",
      percentage: "100%",
      risk: "1.706",
    },
  ];

  return (
    <Container sx={{ m: 0, p: 0, width: '100%' }}>
      <Box>
        <Typography variant="h6" align="left">
          <b>ARA JEWELLERY LLC</b>
        </Typography>
        <Typography variant="body2" align="left">
          Office # 402, Dubai Diamond Plaza, Gold Souk Deira
        </Typography>
        <Typography variant="body2" align="left">
          +971 4 3305259
        </Typography>
        <Typography variant="body2" align="left">
          arajewellltd@gmail.com
        </Typography>
        <Divider sx={{ my: 1, border: "1px solid" }} />

        <Paper elevation={10} sx={{ mb: 1, width: "100%", pr: 8 }}>
          <Typography variant="body2">
            <b>
              <i>
                CUSTOMER DETAILS ={">"} UID : {user.customer.uid} | NAME :{" "}
                {user.customer.name} | DATE OF INCORPORATION :{" "}
                {user.customer.dateOfIncorporation} | COUNTRY OF INCORPORATION :{" "}
                {user.customer.countryOfIncorporation}
              </i>
            </b>
          </Typography>
        </Paper>

        <Box sx={{ ml: 1 }}>
          <Paper
            elevation={10}
            sx={{
              width: "90%",
              pr: 8,
              color: "darkblue",
              background: "lightgrey",
            }}
          >
            <Typography variant="body2">
              <i>CUSTOMER RESIDUAL RISK</i>
            </Typography>
          </Paper>
          <Box sx={{ px: 2, py: 0.5, ml: 1 }}>
            <Paper
              elevation={10}
              sx={{
                mb: 1,
                width: "80%",
                pr: 8,
                color: "darkblue",
                background: "lightgrey",
              }}
            >
              <Typography variant="body2">
                <i>
                  CUSTOMER --{">"} {data.fullLegalName} - (CUSTOMER)
                </i>
              </Typography>
            </Paper>
            <TableContainer>
              <Table size="small" sx={{ [`& .${tableCellClasses.root}`]: { p: 0 } }}>
                <TableHead>
                  <TableRow sx={{ background: "rgb(240, 240, 240)" }}>
                    <TableCell>RBA TYPE</TableCell>
                    <TableCell>RBA FIELD</TableCell>
                    <TableCell align="right">RISK</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(rows.customer).map(
                    ([key, value], index) =>
                      key !== "name" && (
                        <TableRow key={index}>
                          <TableCell>
                            {key.replace(/_/g, " ").toUpperCase()}
                          </TableCell>
                          <TableCell>{value.field}</TableCell>
                          <TableCell align="right">{value.risk}</TableCell>
                        </TableRow>
                      )
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {rows.shareholder.map((shareholder, idx) => (
              <div>
                <Paper
                  elevation={10}
                  sx={{
                    my: 1,
                    width: "80%",
                    pr: 8,
                    color: "darkblue",
                    background: "lightgrey",
                  }}
                >
                  <Typography variant="body2">
                    <i>
                      SHAREHOLDER [NATURAL PERSONS] --{">"} {rows.shareholder[0].name}{" "} - (SHAREHOLDER [NATURAL PERSONS])
                    </i>
                  </Typography>
                </Paper>
                <TableContainer>
                  <Table size="small" sx={{ [`& .${tableCellClasses.root}`]: { p: 0 } }}>
                    <TableHead>
                      <TableRow sx={{ background: "rgb(240, 240, 240)" }}>
                        <TableCell>RBA TYPE</TableCell>
                        <TableCell>RBA FIELD</TableCell>
                        <TableCell align="right">RISK</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <React.Fragment key={idx}>
                        {Object.entries(shareholder).map(
                          ([key, value], index) =>
                            key !== "name" && (
                              <TableRow key={index}>
                                <TableCell>
                                  {key.replace(/_/g, " ").toUpperCase()}
                                </TableCell>
                                <TableCell>{value.field}</TableCell>
                                <TableCell align="right">{value.risk}</TableCell>
                              </TableRow>
                            )
                        )}
                      </React.Fragment>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              sx={{ width: "100%" }}
            >
              <Table size="small" sx={{ [`& .${tableCellClasses.root}`]: { borderBottom: "none", p: 0 } }}>
                <TableRow sx={{ border: 'none' }}>
                  <TableCell>
                    <Typography textAlign="right">
                      (Total Sum of Risk (Customer + Relation) / Total No. of Risk){" "}
                      <b>ONBOARDING RISK :&nbsp;</b>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Divider
                      sx={{
                        mt: 1,
                        border: "1px solid",
                        borderColor: "blue",
                        width: "100%",
                      }}
                    />
                    <Typography textAlign="right">
                      <b>1.706</b>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ border: 'none' }}>
                  <TableCell>
                    <Typography textAlign="right">
                      Mitigation Score :&nbsp;
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography textAlign="right">
                      <b>0</b>
                    </Typography>
                    <Divider
                      sx={{
                        border: "1px solid",
                        borderColor: "blue",
                        width: "100%",
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow sx={{ border: 'none' }}>
                  <TableCell>
                    <Typography textAlign="right">
                      (Onboarding Risk * Mitigation Score){" "}
                      <b>RESIDUAL RISK :&nbsp;</b>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography textAlign="right">
                      <b>1.706</b>
                    </Typography>
                    <Divider
                      sx={{
                        border: "1px solid",
                        borderColor: "blue",
                        width: "100%",
                      }}
                    />
                    <Divider
                      sx={{
                        mt: 0.5,
                        border: "1px solid",
                        borderColor: "blue",
                        width: "100%",
                      }}
                    />
                  </TableCell>
                </TableRow>
              </Table>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 1, ml: 1 }}>
          <Paper
            elevation={10}
            sx={{
              mb: 1,
              width: "60%",
              pr: 8,
              color: "darkblue",
              background: "lightgrey",
            }}
          >
            <Typography variant="body2">
              <b>
                <i>RISK DISTRIBUTION</i>
              </b>
            </Typography>
          </Paper>
          <Box sx={{ px: 2, ml: 1 }}>
            <TableContainer>
              <Table size="small" sx={{ [`& .${tableCellClasses.root}`]: { p: 0 } }}>
                <TableHead>
                  <TableRow sx={{ background: "rgb(240, 240, 240)" }}>
                    <TableCell>RBA TYPE</TableCell>
                    <TableCell>RBA FIELD</TableCell>
                    <TableCell>(%)</TableCell>
                    <TableCell align="right">RISK</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {info.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.rbaType}</TableCell>
                      <TableCell>{row.rbaField}</TableCell>
                      <TableCell>{row.percentage}</TableCell>
                      <TableCell align="right">{row.risk}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              sx={{ width: "100%" }}
            >
              <Table size="small" sx={{ [`& .${tableCellClasses.root}`]: { borderBottom: "none", p: 0 } }}>
                <TableRow sx={{ border: 'none' }}>
                  <TableCell>
                    <Typography textAlign="right">
                      (Sum of Distributed Risk) <b>OVERALL RISK :&nbsp;</b>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Divider
                      sx={{
                        mt: 1,
                        border: "1px solid",
                        borderColor: "blue",
                        width: "100%",
                      }}
                    />
                    <Typography textAlign="right">
                      <b>{info[0].risk}</b>
                    </Typography>
                    <Divider
                      sx={{
                        border: "1px solid",
                        borderColor: "blue",
                        width: "100%",
                      }}
                    />
                    <Divider
                      sx={{
                        mt: 0.5,
                        border: "1px solid",
                        borderColor: "blue",
                        width: "100%",
                      }}
                    />
                  </TableCell>
                </TableRow>
              </Table>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ mt: 1, background: "lightgrey", width: "100%", px: 0.5 }}>
              <Typography variant="body2">
                <b>RISK METHODOLOGY</b>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", background: "red" }}
              >
                High Risk | MORE THAN 3.1
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", background: "darkviolet" }}
              >
                Medium High Risk | 2.1 {"<"}= 3.1
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", background: "olive" }}
              >
                Medium Risk | 1.1 {"<"}= 2.1
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", background: "darkgreen" }}
              >
                Low Risk | {"<"}= 1.1
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 1,
                ml: 4,
                background: "lightgrey",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography variant="body2" sx={{ textAlign: "left" }}>
                <i>
                  <span style={{ color: "maroon" }}>
                    <b>*Note :-&nbsp;</b>
                  </span>{" "}
                  For legal customers, the system includes a profile with the
                  shareholder who has the highest level of risk.
                  <span style={{ color: "maroon" }}><b>**</b></span>If De-Risked,
                  Then De-Risk Parameter will be Club Risk Rating, Else If one
                  or more individual risk scores is 4(Override) and Not
                  Mitigated, the Club Risk Rating will be overridden to High
                  Risk, Else Club Risk Rating is Calculated Based on Risk
                  Score as per the set score range.
                </i>
              </Typography>
              <Box sx={{ color: "darkblue", width: "300%", mt: 2 }}>
                <Typography variant="body2" sx={{ mt: 1, textAlign: "right" }}>
                  CUSTOMER PROFILE RISK: <b>{info[0].risk}</b>
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, textAlign: "right" }}>
                  CLUB RISK RATING: <b>MEDIUM RISK</b>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider>&nbsp; ***** END OF CUSTOMER ***** &nbsp;</Divider>
      </Box>
      <div className="footer">
        <div className="footer-text">
          <span className="pageNumber"></span>
          <span className="totalPages"></span>
        </div>
      </div>
    </Container>
  );
}

export default App;
