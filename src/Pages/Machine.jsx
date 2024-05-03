import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Machine = (props) => {
  const [entityCount, setEntityCount] = useState(1);
  const { machineDetails, setMachineDetails, updateMachineDetails } = props;
  const { userInfo } = useContext(UserContext);
  const flag = !(userInfo.userDepartment === 'Machine');
  useEffect(() => {
    setEntityCount(machineDetails.machine.length);
  }, [machineDetails]);

  const handleAddEntity = () => {
    if (entityCount < 7) {
      setEntityCount(entityCount + 1);
    }
  };

  const handleRemoveEntity = () => {
    if (entityCount > 1) {
      setEntityCount(entityCount - 1);
      setMachineDetails((prevDetails) => {
        const updatedMachine = [...prevDetails.machine];
        updatedMachine.pop();
        return { ...prevDetails, machine: updatedMachine };
      });
    }
  };
  const renderPlusIcon = entityCount < 7;
  const renderMinusIcon = entityCount > 1;
  const handleInputChange = (e) => {
    const value = e.target;
    setMachineDetails({
      ...machineDetails,
      remarks: value
    });
  }
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
          {[...Array(entityCount)].map((_, index) => (
            <Grid container spacing={4} key={index}>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    color: "#054470",
                    fontWeight: "650",
                    fontSize: "1.2rem",
                  }}
                >
                  Machine Type <span style={{ color: "red" }}>*</span>
                </Typography>
                <Select
                  name={`machineType_${index}`}
                  label="Enter Details"
                  variant="outlined"
                  fullWidth
                  size="small"
                  disabled={flag}
                  value={machineDetails?.machine[index]?.machineType || ""}
                  onChange={(e) => updateMachineDetails(index, "machineType", e.target.value)}
                >
                  <MenuItem value='CNC'>CNC</MenuItem>
                  <MenuItem value='VMC'>VMC</MenuItem>
                  <MenuItem value='HMC'>HMC</MenuItem>
                  <MenuItem value='As Cast'>As Cast</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    color: "#054470",
                    fontWeight: "650",
                    fontSize: "1.2rem",
                  }}
                >
                  Cycle Time<span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  name={`cycleTime_${index}`}
                  id={`cycleTime_${index}`}
                  label="Enter Details"
                  variant="outlined"
                  fullWidth
                  size="small"
                  disabled={flag}
                  value={machineDetails?.machine[index]?.cycleTime}
                  onChange={(e) => updateMachineDetails(index, "cycleTime", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    color: "#054470",
                    fontWeight: "650",
                    fontSize: "1.2rem",
                  }}
                >
                  Machining Fixture Cost<span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  name={`fixtureCost_${index}`}
                  id={`fixtureCost_${index}`}
                  label="Enter Details"
                  variant="outlined"
                  fullWidth
                  size="small"
                  disabled={flag}
                  value={machineDetails?.machine[index]?.fixtureCost || ""}
                  onChange={(e) => updateMachineDetails(index, "fixtureCost", e.target.value)}
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12} sm={12}>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
              {/* Plus and Minus Icons */}
              <IconButton onClick={handleAddEntity} disabled={!renderPlusIcon}>
                <AddIcon />
              </IconButton>
              <IconButton onClick={handleRemoveEntity} disabled={!renderMinusIcon}>
                <RemoveIcon />
              </IconButton>
            </Stack>
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

export default Machine;
