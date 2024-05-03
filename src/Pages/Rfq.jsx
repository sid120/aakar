import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MenuItem, Select, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import React from "react";
const Rfq = (props) => {
  const { inputDetails, setInputDetails, handleInputChange, updateRfqDetails } = props
  const { userInfo } = useContext(UserContext);
  const flag = !(userInfo.userDepartment === 'Marketing');
  // console.log(flag,userInfo.userDepartment,userInfo);
  useEffect(() => {
    if (inputDetails.finishWeight && inputDetails.quantity) {
      const calculatedTonnage = (inputDetails.finishWeight * inputDetails.quantity) / 1000;
      setInputDetails((prevInputDetails) => ({
        ...prevInputDetails,
        tonnage: calculatedTonnage.toFixed(2)
      }));
    } else {
      setInputDetails((prevInputDetails) => ({
        ...prevInputDetails,
        tonnage: ''
      }));
    }
  }, [inputDetails.finishWeight, inputDetails.quantity, setInputDetails]);

  const handleFinishWeightChange = (event) => {
    handleInputChange(event);
    const inputValue = event.target.value;
    if (inputValue === "") {
      setInputDetails((prevInputDetails) => ({
        ...prevInputDetails,
        finishWeight: inputValue,
      }));
      return;
    }
    if (/^\d*\.?\d+$/.test(inputValue)) {
      setInputDetails((prevInputDetails) => ({
        ...prevInputDetails,
        finishWeight: inputValue,
      }));
    } else {
      inputDetails.finishWeight = "";
    }
  };

  const handleQuantityChange = (event) => {
    handleInputChange(event);
    const inputValue = event.target.value;
    if (inputValue === "") {
      setInputDetails((prevInputDetails) => ({
        ...prevInputDetails,
        quantity: inputValue,
      }));
      return;
    }
    if (/^\d*\.?\d+$/.test(inputValue)) {
      setInputDetails((prevInputDetails) => ({
        ...prevInputDetails,
        quantity: inputValue,
      }));
    }
  };


  const [entityCount, setEntityCount] = useState(1);

  useEffect(() => {
    setEntityCount(inputDetails.surfaceTreatment.length);
  }, [inputDetails]);

  const handleAddEntity = () => {
    if (entityCount < 7) {
      setEntityCount(entityCount + 1);
    }
  };

  const handleRemoveEntity = () => {
    if (entityCount > 1) {
      setEntityCount(entityCount - 1);
      setInputDetails((prevDetails) => {
        const updatedRfq = [...prevDetails.surfaceTreatment];
        updatedRfq.pop();
        return { ...prevDetails, surfaceTreatment: updatedRfq };
      });
    }
  };
  const renderPlusIcon = entityCount < 4;
  const renderMinusIcon = entityCount > 1;
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

                Part Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField

                name="name"
                id="name"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.name}
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

                Part Number - MACH <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField

                name="partMach"
                id="partMach"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.partMach}
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

                Part Number - CAST <span style={{ color: "red" }}>*</span>
              </Typography>


              <TextField
                name="partCast"
                id="partCast"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.partCast}
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

                name="finishWeight"
                id="finishWeight"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.finishWeight}
                onChange={handleFinishWeightChange}
                type="number"
                inputProps={{ step: "0.01" }}
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
                Raw Casting Weight <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="castingWeight"
                id="weight"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.castingWeight}
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

                name="details"
                id="details"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.details}
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
                Rfq Enquiry No <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                disabled
                name="enquiry"
                id="enquiry"
                label=" Enter Details"
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

                Quantity Per Annum (Nos) <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField

                name="quantity"
                id="quantity"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.quantity}
                onChange={handleQuantityChange}
                type="number"
                inputProps={{ step: "0.01" }}
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

                Product Life (In Years) <span style={{ color: "red" }}>*</span>
              </Typography>


              <TextField

                name="life"
                id="life"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.life}
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
                {" "}
                Process Required (HPDC, LPDC, GDC) <span style={{ color: "red" }}>*</span>
              </Typography>

              <Select
                name="processRequired"
                id="processRequired"
                label="Category"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                onChange={handleInputChange}
                value={inputDetails?.processRequired}
              >
                <MenuItem value="HPDC">HPDC</MenuItem>
                <MenuItem value="LPDC">LPDC</MenuItem>
                <MenuItem value="GDC">GDC</MenuItem>
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
                  padding: "0.3rem",
                }}
              >
                {" "}
                Aluminum Alloy Specification <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField

                name="alloy"
                id="alloy"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.alloy}
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
                Requirements(Raw/Machined) <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                name="machined"
                id="machined"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.machined}
                onChange={handleInputChange}
                defaultValue=''
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

                Shot Blasting <span style={{ color: "red" }}>*</span>
              </Typography>


              <TextField
                name="blasting"
                id="blasting"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.blasting}
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

                Specific Product & QC Requirements <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                name="productQc"
                id="productQc"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.productQc}
                onChange={handleInputChange}
              />
            </Grid>
            {[...Array(entityCount)].map((_, index) => (
              <React.Fragment key={index}>
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
                    Surface Treatment <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Select
                    name={`surfaceTreatment_${index}`}
                    label="Enter Details"
                    variant="outlined"
                    fullWidth
                    size="small"
                    disabled={flag}
                    value={inputDetails?.surfaceTreatment[index]?.treatment || ""}
                    onChange={(e) => updateRfqDetails(index, "treatment", e.target.value)}
                  >
                    <MenuItem value='Anodizing'>Anodizing</MenuItem>
                    <MenuItem value='Chromotising'>Chromotising</MenuItem>
                    <MenuItem value='Powder Coating'>Powder Coating</MenuItem>
                    <MenuItem value='Other'>Other</MenuItem>
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
                    Treatment Specification<span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    name={`specification_${index}`}
                    id={`specification_${index}`}
                    label="Enter Details"
                    variant="outlined"
                    fullWidth
                    size="small"
                    disabled={flag}
                    value={inputDetails?.surfaceTreatment[index]?.specification || ""}
                    onChange={(e) => updateRfqDetails(index, "specification", e.target.value)}
                  />
                </Grid>
              </React.Fragment>
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

                Bought Out Materials Details <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="materials"
                id="materials"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.materials}
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
                Leak Testing & Pressure Requirement <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="pressure"
                id="pressure"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.pressure}
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
                Impregnation Required? <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField
                name="impregnation"
                id="impregnation"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.impregnation}
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
                {" "}
                Heat Treatment Required?<span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField

                name="treatment"
                id="treatment"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.treatment}
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

                Packaging Type <span style={{ color: "red" }}>*</span>
              </Typography>

              <Select
                name="packaging"
                id="packaging"
                label="Category"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                onChange={handleInputChange}
                value={inputDetails?.packaging}
              >
                <MenuItem value="Corrugated">Corrugated</MenuItem>
                <MenuItem value="PP">PP</MenuItem>
                <MenuItem value="Plastic">Plastic</MenuItem>
                <MenuItem value="Exports">Exports</MenuItem>
                <MenuItem value="Custom">Custom</MenuItem>
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
                  padding: "0.3rem",
                }}
              >
                Specify If Custom Packaging  <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="custom"
                id="custom"
                label=" Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.custom}
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

                Delivery Location & Basis <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="delivery"
                id="delivery"
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                value={inputDetails?.delivery}
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

                Inco-Terms <span style={{ color: "red" }}>*</span>
              </Typography>
              <Select

                name="works"
                id="works"
                label="Category"
                variant="outlined"
                fullWidth
                size="small"
                disabled={flag}
                onChange={handleInputChange}
                value={inputDetails?.works}
              >
                <MenuItem value="EXW">EXW (Ex-works)</MenuItem>
                <MenuItem value="DAP">DAP (Delivery At Place)</MenuItem>
                <MenuItem value="FOB">FOB (Free on Board)</MenuItem>
                <MenuItem value="FCA">FCA (Free Carrier)</MenuItem>
                <MenuItem value="FAS">FAS (Free Alongside Ship)</MenuItem>
                <MenuItem value="CFR">CFR (Cost and Freight)</MenuItem>
                <MenuItem value="CIF">CIF (Cost, Insurance and Freight)</MenuItem>
                <MenuItem value="CPT">CPT (Carriage Paid To)</MenuItem>
                <MenuItem value="CIP">CIP (Carriage and Insurance Paid To)</MenuItem>
                <MenuItem value="DPU">DPU (Delivered At Place Unloaded)</MenuItem>
                <MenuItem value="DDP">DDP (Delivered Duty Paid)</MenuItem>
                <MenuItem value="DDU">DDU (Delivered Duty Unpaid)</MenuItem>
                <MenuItem value="OTHER">OTHER</MenuItem>
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
                  padding: "0.3rem",
                }}
              >

                Annual Tonnage - MT <span style={{ color: "red" }}>*</span>
              </Typography>

              <TextField

                name="tonnage"
                id="tonnage"
                variant="outlined"
                fullWidth
                size="small"
                disabled
                style={{
                  color: 'darkgray',
                  borderColor: 'darkgray',
                }}
                value={inputDetails?.tonnage}
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
                value={inputDetails?.remarks}
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

export default Rfq;