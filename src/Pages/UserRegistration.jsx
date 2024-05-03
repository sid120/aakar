import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../Components/NavBar";
import { useEffect,useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import { Menu } from '@mui/material';

const defaultTheme = createTheme();

const UserRegistration = () => {
  const navigate = useNavigate();
  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const [formData, setForm] = useState({});
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [isDepartmentValid, setIsDepartmentValid] = useState(true);
  const [isRoleValid, setIsRoleValid] = useState(true);

  function isfirstName(val) {
    var reg = /^[a-zA-Z\s]+$/;
    const isValid = reg.test(val) && val.trim().length > 0;
    setIsNameValid(isValid);
    return isValid;
  }

  function isMail(val) {
    var mail = /^\w+([\.-]?\w+)*@aakarfoundry\.com$/;
    const isValid = mail.test(val);
    setIsEmailValid(isValid);
    return isValid;
  }

  function isNumber(val) {
    var phoneNo = /^\d{10}$/;
    const isValid = phoneNo.test(val);
    setIsNumberValid(isValid);
    return isValid;
  }

  function isDepartmentBox(val) {
    var regex = /^[a-zA-Z.-\s]*$/;
    const isValid = regex.test(val) && val.trim().length > 0;
    setIsDepartmentValid(isValid);
    return isValid;
  }

  function isRole(val) {
    var regex = /^[a-zA-Z.-\s]*$/;
    const isValid = regex.test(val) && val.trim().length > 0;
    setIsRoleValid(isValid);
    return isValid;
  }

  const URL = "http://localhost:4000/register/new";

  async function uploadData(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log("Error:", response.status);
      } else {
        const json = await response.json();
        console.log("Success:", json);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    var name = isfirstName(formData.name);
    var email = isMail(formData.email);
    var department = isDepartmentBox(formData.department);
    var number = isNumber(formData.number);
    var role = isRole(formData.role);

    if (name && email && department && number && role) {
      console.log(formData);
      uploadData(URL, formData);
      alert("Register Successful");
      navigate("/approval");
      setForm({
        name: "",
        email: "",
        number: "",
        department: "",
        role: "",
      });
    } else {
      alert("Register Unsuccessful");
    }
  }


  useEffect(() => {
    setForm({
      name: "",
      email: "",
      number: "",
      department: "",
      role: "",
    });
  }, []);

  
  return (
    <ThemeProvider theme={defaultTheme}>
    <NavBar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: "#18234F", fontWeight: "600" }}>
            Create User
          </Typography>
          <Box component="form" Validate sx={{ mt: 1 }}>


            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }} sx={{ color: "#18234F", fontWeight: "600" }}>
                  Full Name <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                 id="name"
                 label="Enter Details"
                 name="name"
                 autoComplete="name"
                 onChange={handleEvent}
                 autoFocus
                 helperText={isNameValid ? "" : "Invalid name"}
                 error={!isNameValid}
                 style={{ width: '100%' }}
                />
              </Grid>


              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}sx={{ color: "#18234F", fontWeight: "600" }}>
                  Email Address <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  id="email"
                  label="Enter Details"
                  name="email"
                  autoComplete="email"
                  onChange={handleEvent}
                  autoFocus
                  helperText={isEmailValid ? "" : "Invalid Email"}
                  error={!isEmailValid}
                />
              </Grid>


              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}sx={{ color: "#18234F", fontWeight: "600" }}>
                  Phone Number <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  name="number"
                  label="Enter Details"
                  type="text"
                  id="number"
                  onChange={handleEvent}
                  autoComplete=""
                  helperText={isNumberValid ? "" : "Invalid phone number."}
                  error={!isNumberValid}
                  style={{ width: '100%' }}
                />
              </Grid>


              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}sx={{ color: "#18234F", fontWeight: "600" }}>
                  Department <span style={{ color: "red" }}>*</span>
                </Typography>
                <Select
                  id="department"
                  name="department"
                  onChange={handleEvent}
                  value={formData.department}
                  label="Enter Details"
                  style={{ width: '100%' }}
                  defaultValue=""
                  helperText={isDepartmentValid ? "" : "Invalid Department number."}
                  error={!isDepartmentValid}
                >
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Machine">Machine</MenuItem>
                  <MenuItem value="Quality">Quality</MenuItem>
                  <MenuItem value="Design">Design</MenuItem>
                  <MenuItem value="Foundry">Foundry</MenuItem>
                  <MenuItem value="NPD">NPD</MenuItem>
                  <MenuItem value="Senior Management">Senior Management</MenuItem>
                </Select>
              </Grid>


              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}sx={{ color: "#18234F", fontWeight: "600" }}>
                  Role <span style={{ color: "red" }}>*</span>
                </Typography>
                <Select
                  id="role"
                  name="role"
                  onChange={handleEvent}
                  value={formData.role}
                  label="Enter Details"
                  style={{ width: '100%' }}
                  defaultValue=""
                  helperText={isRoleValid ? "" : "Invalid Role."}
                  error={!isRoleValid}
                >
                  <MenuItem value="CEO">CEO</MenuItem>
                  <MenuItem value="HOD">HOD</MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                </Select>
              </Grid>


            </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#1565C0" }}
            onClick={onFormSubmit}
          >
            Add User
          </Button>
          </Box>
        </Box>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
};

export default UserRegistration;