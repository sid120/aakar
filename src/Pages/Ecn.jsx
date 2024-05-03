import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Ecn = ({ inputDetails, setInputDetails, handleInputChange }) => {

  const { userInfo } = useContext(UserContext);
  const flag = !(userInfo.userDepartment === 'Marketing');
  return (
    <div>
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
                ECN Enquiry No<span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                disabled
                name="enquiry"
                id="enquiry"
                label="Enter Details  "
                variant="outlined"
                fullWidth
                size="small"
                value={inputDetails?.enquiry}
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
                Part Name <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="partName"
                id="partName"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.partName}
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
                Part Number - Finish <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="number"
                id="number"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.number}
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
                Finish Weight <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="weight"
                id="weight"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.weight}
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
                Project Name/Other Details <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="projectName"
                id="projectName"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.projectName}
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
                What Type Of ECN (Change in) <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="ecnType"
                id="ecnType"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.ecnType}
                onChange={handleInputChange}
              />
            </Grid>
            {/* <Button
              variant="contained"
              color="primary"
              size="large"
              textAlign="centre"
              sx={{ margin: "auto", marginTop: 2 }}
            >
              Approve
            </Button> */}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Ecn;
