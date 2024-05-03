import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Menu, MenuItem, Select, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../Pages/UserContext";
const CustomerName = (props) => {

  const { selectedOption, handleOptionChange, details, setDetails } = props;
  const { setUserInfo, userInfo } = useContext(UserContext);
  const flag = !(userInfo.userDepartment == 'Marketing');
  console.log(flag);
  // console.log('Customer',userInfo.userDepartment)
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value
    });
  };
  const handleSelectChange = (e) => {
    const value = e.target.value;
    setDetails({
      ...details,
      category: value
    });

    handleOptionChange(value);
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
              }}
            >

              Customer Name <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField

              name="customerName"
              id="customerName"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={details?.customerName}
              onChange={handleInputChange}
              disabled={flag}
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
              }}
            >

              Customer Reference <span style={{ color: "red" }}>*</span>
            </Typography>
            <Select

              name="customerReference"
              id="customerReference"
              label="Enter Details "
              variant="outlined"
              fullWidth
              size="small"
              value={details?.customerReference}
              onChange={handleInputChange}
              disabled={flag}
            // defaultValue=""
            >
              <MenuItem value='Existing'>Existing</MenuItem>
              <MenuItem value='New'>New</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
              }}
            >

              Contact Person <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField

              name="contact"
              id="contact"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={details?.contact}
              onChange={handleInputChange}
              disabled={flag}
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
              }}
            >

              Delivery Address <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField

              name="delivery"
              id="delivery"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={details?.delivery}
              onChange={handleInputChange}
              disabled={flag}
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
              }}
            >

              Enquiry Date <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField

              name="enquiryDate"
              id="enquiryDate"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              onChange={handleInputChange}
              value={details?.enquiryDate}
              disabled={flag}
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
              }}
            >

              Design Data Path <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField

              name="path"
              id="path"
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              onChange={handleInputChange}
              value={details?.path}
              disabled={flag}
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
              }}
            >

              Category <span style={{ color: "red" }}>*</span>
            </Typography>
            <Select

              name="category"
              id="category"
              label="Category"
              variant="outlined"
              fullWidth
              size="small"
              value={details?.category}
              onChange={handleSelectChange}
              disabled={flag}
              defaultValue=""
            >
              <MenuItem value="RFQ">Request For Quotation</MenuItem>
              <MenuItem value="ECN">Engineering Change Node</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default CustomerName;
