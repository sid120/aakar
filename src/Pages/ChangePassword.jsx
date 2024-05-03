import React, { useState, useEffect, useContext } from "react";
import styles from "../assets/styles/change.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { UserContext } from "./UserContext";
import NavBar from "../Components/NavBar";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
 
  const [showNote, setShowNote] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [newshowPassword, setnewShowPassword] = useState(false);
  const [conshowPassword, setconShowPassword] = useState(false);
  const toggleNote = () => {
    setShowNote(!showNote);
  };
  const { setUserInfo,userInfo } = useContext(UserContext);
  const [formData, setForm] = useState({

  });
  const [isPassValid, setIsPassValid] = useState(true);
  const [isNewValid, setIsNewValid] = useState(true);
  const [IsRePassValid, setIsRePassValid] = useState(true);
  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  function isPass(val) {
    const isValid = val.trim().length > 0;
    setIsPassValid(isValid);
    return isValid;
  }
  function isNew(val) {
    var regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const isValid = regex.test(val) && val.trim().length > 0;
    setIsNewValid(isValid);
    return isValid;
  }

  function isRePassword(pass, repass) {
    const isValid = pass === repass;
    setIsRePassValid(isValid);
    return isValid;
  }

  const URL = "http://localhost:4000/updatepassword";
  async function uploadingData(url, data) {
    try {
      const respones = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((e) => console.log("Error : ", e));
      const json = await respones.json();
      console.log(respones.status);
      if (respones.status === 200) {
        //Login Success
        console.log("Success");
      } else {
        //Login Invalid
        console.log("Invalid");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }
  

  async function onFormSubmit(e) {
    e.preventDefault();
    var pass = isPass(formData.oldPassword);
    var newpass = isNew(formData.newPassword);
    var repass = isRePassword(formData.newPassword, formData.confirm_password)
    if (pass && newpass && repass) {
      console.log(formData);
      uploadingData(URL, formData);
      toast.success(" Password Changed Successfully  ");

      
     } else {
      console.log(formData);
      console.log("Fail");
      toast.error(" Length must be between (8) to (16) characters.\n• ");
      toast.error(" Must include minimum of one special character.\n• ");
      toast.error(" Must include minimum one uppercase character.\n• ");
      toast.error(" Must include minimum of one numeric character.\n• ");

    }
  };

  useEffect(() => {
    setForm({
      email:userInfo.userEmail,
      oldPassword: "",
      newPassword: "",
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          "@media screen and (min-width: 64em)": { margincentre: 15 },
          display: "flex",
          alignItems: "centre",
        }}
      >
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: "#18234F", fontWeight: "600" }}>
            Change Password
          </Typography>
          <Box
            component="form"
            onSubmit={onFormSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "540",
                fontSize: "1.2rem",
                paddingTop: "1rem",
              }}
            >
              Enter old password <span style={{ color: "red" }}>*</span>
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "#18234F" },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "#18234F" },
                  },
                }}
                fullWidth
                id="oldPassword"
                name="oldPassword"
                autoFocus
                onChange={handleEvent}
                type={showPassword ? "text" : "Password"}
                helperText={isPassValid ? "" : "This field is required"}
                error={!isPassValid}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "540",
                fontSize: "1.2rem",
                paddingTop: "1rem",
              }}
            >
              Enter New password <span style={{ color: "red" }}>*</span>

              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "#18234F" },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "#18234F" },
                  },
                }}
                fullWidth
                name="newPassword"
                id="newPassword"
                onChange={handleEvent}
                onClick={toggleNote}
                type={newshowPassword ? "text" : "Password"}
                helperText={isNewValid ? "" : "Password not matching criteria"}
                error={!isNewValid}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => setnewShowPassword(!newshowPassword)}
                      edge="end"
                    >
                      {newshowPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "540",
                fontSize: "1.2rem",
                paddingTop: "1rem",
              }}
            >
              Confirm New password <span style={{ color: "red" }}>*</span>
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "#18234F" },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "#18234F" },
                  },
                }}
                fullWidth
                name="confirm_password"
                id="confirm_password"
                onChange={handleEvent}
                helperText={IsRePassValid ? "" : "Password doesn't match with new password"}
                error={!IsRePassValid}
                type={conshowPassword ? "text" : "Password"}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => setconShowPassword(!conshowPassword)}
                      edge="end"
                    >
                      {conshowPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
            </Typography>
            {showNote && (
              <div style={{ marginTop: 10, color: "red" }}>
                {/* Password Policy */}
                {/* Length must be between (8) to (16) characters. <br />
                Must include minimum one uppercase character <br />
                Must include minimum of one special character <br />
                Must include minimum of one numeric character */}
              </div>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#1565C0" }}
            >
              Submit
            </Button>




          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ChangePassword;
