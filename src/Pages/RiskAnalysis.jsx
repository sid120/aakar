import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState, useContext } from "react";
import { UserContext } from "./UserContext";
const RiskAnalysis = (props) => {

  const { riskDetails, setRiskDetails } = props;
  const { userInfo } = useContext(UserContext);
  const flag = !(userInfo.userDepartment === 'Senior Management');
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRiskDetails({
      ...riskDetails,
      [name]: value
    });
  };


  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 8,
        mb: 2,
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="on"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
            >
              {" "}
              Is There Any Risk Associated?{" "}
              <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="risk"
              id="risk"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.risk}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
            >
              Manufacturing Requirement <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="requirement"
              id="requirement"
              label="Enter Details  "
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.requirement}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
            >
              Application <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField
              name="application"
              id="application"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.application}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
            >
              Internal Estimation <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              name="internal"
              id="internal"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.internal}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.25rem",
                padding: "0.3rem",
              }}
            >
              Risk
            </Typography>
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.15rem",
                  padding: "0.3rem",
                }}
              >
                Environmental: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="environment"
                disabled={flag}
                value={riskDetails?.environment}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={flag} />
                <FormControlLabel value="NO" control={<Radio />} label="No" disabled={flag} />
              </RadioGroup>
            </FormControl>

            <TextField
              name="environment_remarks"
              id="environment_remarks"
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.environment_remarks}
              onChange={handleInputChange}

            />
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.1rem",
                  padding: "0.3rem",
                }}
              >
                Investment: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="investment"
                value={riskDetails?.investment}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={flag} />
                <FormControlLabel value="NO" control={<Radio />} label="No" disabled={flag} />
              </RadioGroup>
            </FormControl>
            <TextField
              name="investment_remarks"
              id="investment_remarks"
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.investment_remarks}
              onChange={handleInputChange}
            />

            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.1rem",
                  padding: "0.3rem",
                }}
              >
                Manufacturing: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="manufacturing"
                value={riskDetails?.manufacturing}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={flag} />
                <FormControlLabel value="NO" control={<Radio />} label="No" disabled={flag} />
              </RadioGroup>
            </FormControl>
            <TextField
              name="manufacturing_remarks"
              id="manufacturing_remarks"
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.manufacturing_remarks}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.25rem",
                padding: "0.3rem",
              }}
            >
              Guidelines
            </Typography>
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.15rem",
                  padding: "0.3rem",
                }}
              >
                Technical Feasibility: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="technical"
                value={riskDetails?.technical}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={flag} />
                <FormControlLabel value="NO" control={<Radio />} label="No" disabled={flag} />
              </RadioGroup>
            </FormControl>

            <TextField
              name="technical_remarks"
              id="technical_remarks"
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.technical_remarks}
              onChange={handleInputChange}
            />
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.1rem",
                  padding: "0.3rem",
                }}
              >
                Estimation: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="estimation"
                value={riskDetails?.estimation}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={flag} />
                <FormControlLabel value="NO" control={<Radio />} label="No" disabled={flag} />
              </RadioGroup>
            </FormControl>
            <TextField
              name="estimation_remarks"
              id="estimation_remarks"
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.estimation_remarks}
              onChange={handleInputChange}
            />

            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "450",
                  fontSize: "1.1rem",
                  padding: "0.3rem",
                }}
              >
                Regret: <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="regret"
                value={riskDetails?.regret}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={flag} />
                <FormControlLabel value="NO" control={<Radio />} label="No" disabled={flag} />
              </RadioGroup>
            </FormControl>
            <TextField
              id="regret_remarks"
              name="regret_remarks"
              label="Add Remarks"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.regret_remarks}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
              }}
            >
              Remarks
            </Typography>
            <TextField
              name="remarks"
              id="remarks_extra"
              label="Enter Remarks"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={riskDetails?.remarks}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default RiskAnalysis;
