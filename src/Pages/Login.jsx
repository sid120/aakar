import logo from "../assets/img/Logo.png";
import hexagons from "../assets/img/login_hexagons@2x.png";
import cloud from "../assets/img/login_cloud-storage.png";
import styles from "../assets/styles/Login.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate,Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {

  const URL = "http://localhost:4000/login";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { setUserInfo,userInfo } = useContext(UserContext);
  const [formData, setForm] = useState({});

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  async function uploadingData(URL, data) {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const userData = await response.json();
        setUserInfo(userData);
        console.log(userInfo);
        console.log(userData.userEmail);
        if (userData.userEmail === "admin123") {
          toast.success("Login Successful as Admin!!");
          navigate("/approval");
        } else {
          toast.success("Login Successful!!");
          navigate("/dash");
        }
      } else {
        toast.error("Invalid Login");
        console.log("Invalid");
      }
    } catch (e) {
      console.log("Error:", e);
      toast.error("Invalid Login");
    }
  }
  


  function onFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
    uploadingData(URL, formData);
  }

  useEffect(() => {
    setForm({
      email: "",
      password: "",
    });
  }, []);

  




  return (
    <div className={styles.frameLogin}>
      <div className={styles.div}>
        <img className={styles.image} alt="Logo" src={logo} />
        <div className={styles.overlap}>
          <img className={styles.hexagons} alt="Hexagons" src={hexagons} />
          <img
            className={styles.cloudStorageImage}
            alt="Cloud storage icon"
            src={cloud}
          />
          <div className={styles.ellipse} />
        </div>
        <div className={styles.ellipse2} />
        <div className={styles.ellipse3} />
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            "@media screen and (min-width: 64em)": {
              marginLeft: 15,
            },
            display: "flex",
            alignItems: "left",
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
            <Typography component="h1" variant="h5" sx={{ color: "white" }}>
              Log In
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "white" },
                  },
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleEvent}

              />
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { border: 0.5, borderColor: "white" },
                  },
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "Password"}
                id="password"
                autoComplete="Password"
                onChange={handleEvent}
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#1565C0" }}
                onClick={onFormSubmit}
              >
                Log In
              </Button>

            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

    