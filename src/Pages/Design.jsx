import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "./UserContext";
const DesignFoundry = (props) => {

  const { designDetails, setDesignDetails } = props;
  const { userInfo } = useContext(UserContext);
  const flag = !(userInfo.userDepartment === 'Design' || userInfo.userDepartment === 'Foundry');
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDesignDetails({
      ...designDetails,
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

              Finished Weight (Machined) (Kg) <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField

              name="weight"
              id="weight"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.weight}
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
              Net Raw Casting Weight (Kg) <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="casting"
              id="casting"
              label="Enter Details  "
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.casting}
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

              Surface Area - In mm Square <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="area"
              id="area"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.area}
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
              Die-Casting Process <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="dieCasting"
              id="dieCasting"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.dieCasting}
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
              No. Of Impressions Or Cavities <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="impressions"
              id="impressions"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.impressions}
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

              Alternative Raw Material Suggested By Aakar <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="rawMaterial"
              id="rawMaterial"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.rawMaterial}
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

              Die Cost (Rs Lakhs) <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="dieCost"
              id="dieCost"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.dieCost}
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

              Core Box Cost <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="coreCost"
              id="coreCost"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.coreCost}
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

              Expected Die Life (Shots) <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="dieLife"
              id="dieLife"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.dieLife}
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
              Die Manufacturing Period In Weeks <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="diePeriod"
              id="diePeriod"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.diePeriod}
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

              Number Of Shots/Hour <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="shots"
              id="shots"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.shots}
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

              No. Of Sand Cores Required <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="cores"
              id="cores"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.cores}
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

              Total Sand Weight (Kg) <span style={{ color: "red" }}>*</span>
            </Typography>

            <TextField

              name="sandWeight"
              id="sandWeight"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.sandWeight}
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
              label="Enter Remarks"
              name="remarks"
              id="remarks"
              variant="outlined"
              fullWidth
              size="small"
              disabled={flag}
              value={designDetails?.remarks}
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
  );
};

export default DesignFoundry;
