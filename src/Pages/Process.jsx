import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import HorizontalLinearStepper from "../Components/Stepper";
import CustomerName from "./CustomerName";
import RiskAnalysis from "./RiskAnalysis";
import DesignFoundry from "./Design";
import { Stack } from "@mui/material";
import Machine from "./machine";
import styles from "../assets/styles/Form.module.css";
import Inputs from "./Inputs";
import NewProductDev from "./NewProduct";
import Quality from "./Quality";
import Summary from "./Summary";
import NavBar from "../Components/NavBar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Process = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const activeStepFromQuery = parseInt(searchParams.get("step"), 10) || 0;
  const selectedOptionFromQuery = searchParams.get("option") || "";
  const [activeStep, setActiveStep] = useState(activeStepFromQuery);
  const [skipped, setSkipped] = useState(new Set());
  const [selectedOption, setSelectedOption] = useState(selectedOptionFromQuery);
  const [details, setDetails] = useState({
    customerName: '',
    customerReference: '',
    contact: '',
    delivery: '',
    enquiryDate: '',
    path: '',
    category: ''
  }
  );
  const [inputDetails, setInputDetails] = useState({});
  const [designDetails, setDesignDetails] = useState({
    enquiry: '',
    weight: '',
    casting: '',
    area: '',
    dieCasting: '',
    impressions: '',
    rawMaterial: '',
    dieCost: '',
    coreCost: '',
    dieLife: '',
    diePeriod: '',
    shots: '',
    cores: '',
    sandWeight: '',
    remarks: 'NA',
  }
  );
  const [riskDetails, setRiskDetails] = useState({
    enquiry: '',
    risk: '',
    requirement: '',
    application: '',
    internal: '',
    environment: '',
    environment_remarks: 'NA',
    investment: '',
    investment_remarks: 'NA',
    manufacturing: '',
    manufacturing_remarks: 'NA',
    technical: '',
    technical_remarks: 'NA',
    estimation: '',
    estimation_remarks: 'NA',
    regret: '',
    regret_remarks: 'NA',
    remarks: 'NA',
  }
  );
  const [machineDetails, setMachineDetails] = useState({
    enquiry: '',
    machine: [{}],
    remarks: 'NA',
  })
  const [qualityDetails, setQualityDetails] = useState({
    enquiry: '',
    gaugesCost: '',
    leakCost: '',
    washingCost: '',
    capCost: '',
    packagingType: '',
    packagingCost: '',
    remarks: 'NA',

  });
  const [npdDetails, setNpdDetails] = useState({
    enquiry: '',
    investment: '',
    partFeasible: '',
    remarks: 'NA',
  });
  useEffect(() => {
    if (id !== undefined) {
      fetch(`http://localhost:4000/customers/${id}`)
        .then((res, err) => {
          return res.json();
        })
        .then((data) => {
          if (data !== null) {
            setDetails(data);
            setSelectedOption(data.category);
          }
        })
        .catch((err) => {
          console.log(err);
        });


      if (selectedOption === 'RFQ') {
        fetch(`http://localhost:4000/rfqs/${id}`)
          .then((res, err) => {
            return res.json();
          })
          .then((data) => {
            if (data !== null) {
              setInputDetails(data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        fetch(`http://localhost:4000/ecns/${id}`)
          .then((res, err) => {
            return res.json();
          })
          .then((data) => {
            if (data !== null) {
              setInputDetails(data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }


      fetch(`http://localhost:4000/risks/${id}`)
        .then((res, err) => {
          return res.json();
        })
        .then((data) => {
          if (data !== null) {
            setRiskDetails(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });


      fetch(`http://localhost:4000/designs/${id}`)
        .then((res, err) => {
          return res.json();
        })
        .then((data) => {
          if (data !== null) {
            setDesignDetails(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });


      fetch(`http://localhost:4000/machines/${id}`)
        .then((res, err) => {
          return res.json();
        })
        .then((data) => {
          if (data !== null) {
            setMachineDetails(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });


      fetch(`http://localhost:4000/qualities/${id}`)
        .then((res, err) => {
          return res.json();
        })
        .then((data) => {
          if (data !== null) {
            setQualityDetails(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });


      fetch(`http://localhost:4000/npds/${id}`)
        .then((res, err) => {
          return res.json();
        })
        .then((data) => {
          if (data !== null) {
            setNpdDetails(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedOption])
  useEffect(() => {
    if (selectedOption === 'RFQ') {
      setInputDetails({
        name: '',
        partMach: '',
        partCast: '',
        finishWeight: '',
        castingWeight: '',
        details: '',
        enquiry: '',
        quantity: '',
        life: '',
        processRequired: '',
        alloy: '',
        machined: '',
        blasting: '',
        productQc: '',
        surfaceTreatment: [{}],
        materials: '',
        pressure: '',
        impregnation: '',
        treatment: '',
        packaging: '',
        custom: '',
        delivery: '',
        works: '',
        tonnage: '',
        remarks: 'NA'
      });
    } else {
      setInputDetails({
        enquiry: '',
        partName: '',
        number: '',
        weight: '',
        projectName: '',
        ecnType: ''
      });
    }
  }, [selectedOption]);
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleSkip = () => {
    const nextStep = activeStep + 1;
    if (nextStep >= 0) {
      if (id !== undefined && id !== 'undefined') {
        navigate(`/details/${id}/?step=${activeStep}&option=${selectedOption}`);
      } else {
        navigate(`/details/?step=${activeStep}&option=${selectedOption}`);
      }
      setActiveStep(nextStep);
    }
  };

  const handleNext = () => {
    let isStepValid = true;
    let stepDetails = null;
    let name = null;
    if (activeStep === 0) {
      if (
        Object.values(details).some((value) => value === '') ||
        Object.values(details).some((value) => value === undefined)
      ) {
        isStepValid = false;
      }
      else {
        stepDetails = details;
        name = 'customer';
      }
    } else if (activeStep === 1) {

      if (
        ((selectedOption === 'RFQ' && Object.values(inputDetails).some((value) => value === ''))) ||
        (selectedOption !== 'RFQ' && Object.values(inputDetails).some((value) => value === ''))
      ) {
        isStepValid = false;
      }
      else {
        if (selectedOption === 'RFQ') {

          if ((inputDetails.surfaceTreatment.length === 0)) {
            isStepValid = false;
          }
        }
        stepDetails = inputDetails;
        if (selectedOption === 'RFQ') {
          name = 'rfq';
        }
        else {
          name = 'ecn';
        }

      }
    } else if (activeStep === 2) {
      if (
        Object.values(riskDetails).some((value) => value === '') ||
        Object.values(riskDetails).some((value) => value === undefined)
      ) {
        isStepValid = false;
      }
      else {
        name = 'risk';
        stepDetails = riskDetails;
      }
    } else if (activeStep === 3) {
      if (
        Object.values(designDetails).some((value) => value === '') ||
        Object.values(designDetails).some((value) => value === undefined)
      ) {
        isStepValid = false;
      }
      else {
        name = 'design';
        stepDetails = designDetails;
      }
    } else if (activeStep === 4) {
      if (
        Object.values(machineDetails).some((value) => value === '') ||
        machineDetails.machine[0].cycleTime === null) {
        isStepValid = false;
      }
      else {
        name = 'machine';
        stepDetails = machineDetails;
      }
    } else if (activeStep === 5) {
      if (
        Object.values(qualityDetails).some((value) => value === '') ||
        Object.values(qualityDetails).some((value) => value === undefined)
      ) {
        isStepValid = false;
      }
      else {
        name = 'quality';
        stepDetails = qualityDetails;
      }
    } else if (activeStep === 6) {
      if (
        Object.values(npdDetails).some((value) => value === '') ||
        Object.values(npdDetails).some((value) => value === undefined)
      ) {
        isStepValid = false;
      }
      else {
        name = 'npd';
        stepDetails = npdDetails;
      }
    }

    if (isStepValid) {
      console.log(name);
      console.log(stepDetails);
      if (name === 'customer') {
        fetch(`http://localhost:4000/${name}/new`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(stepDetails),
          credentials: 'include',
        }).then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response failed")
          }
        }).then(data => {
          const enquiry = data.enquiryNo;
          setInputDetails({
            ...inputDetails,
            enquiry: enquiry
          });
          setRiskDetails({
            ...riskDetails,
            enquiry: enquiry
          });
          setDesignDetails({
            ...designDetails,
            enquiry: enquiry
          });
          setMachineDetails({
            ...machineDetails,
            enquiry: enquiry
          });
          setQualityDetails({
            ...qualityDetails,
            enquiry: enquiry
          });
          setNpdDetails({
            ...npdDetails,
            enquiry: enquiry
          });
        }).catch(error => {
          console.error("Error:", error);
          toast.error("Network response failed"); // Notify user of network error
        });
      } else {
        fetch(`http://localhost:4000/${name}/new`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(stepDetails),
          credentials: 'include',
        }).catch(error => {
          console.error("Error:", error);
          toast.error("Network response failed"); // Notify user of network error
        });
      }

      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      const nextStep = activeStep + 1;
      navigate(`/details/${id}/?step=${nextStep}&option=${selectedOption}`);
      setActiveStep(nextStep);
      setSkipped(newSkipped);
    } else {
      console.log(riskDetails)
      toast.error("Please fill all fields.");
    }
  };

  const handleBack = () => {
    const previousStep = activeStep - 1;
    if (previousStep >= 0) {
      if (id !== undefined && id !== 'undefined') {
        navigate(`/details/${id}/?step=${activeStep}&option=${selectedOption}`);
      } else {
        navigate(`/details/?step=${activeStep}&option=${selectedOption}`);
      }
      setActiveStep(previousStep);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (id !== undefined && id !== 'undefined') {
      navigate(`/details/${id}/?step=${activeStep}&option=${selectedOption}`);
    } else {
      navigate(`/details/?step=${activeStep}&option=${selectedOption}`);
    }
  };
  useEffect(() => {
    if (id !== undefined && id !== 'undefined') {
      navigate(`/details/${id}/?step=${activeStep}&option=${selectedOption}`);
    } else {
      navigate(`/details/?step=${activeStep}&option=${selectedOption}`);
    }
  }, [id, activeStep, selectedOption, navigate]);
  const updateMachineDetails = (index, key, value) => {
    const updatedMachine = [...machineDetails.machine];
    updatedMachine[index] = { ...updatedMachine[index], [key]: value };

    setMachineDetails({
      ...machineDetails,
      machine: updatedMachine,
    });
  };
  const updateRfqDetails = (index, key, value) => {
    const updatedRfq = [...inputDetails.surfaceTreatment];
    updatedRfq[index] = { ...updatedRfq[index], [key]: value };

    setInputDetails({
      ...inputDetails,
      surfaceTreatment: updatedRfq,
    });
  };
  return (
    <div className={styles.process}>
      <NavBar />
      <HorizontalLinearStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <div className={styles.designForm}>
        {activeStep === 0 && (
          <CustomerName
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            details={details}
            setDetails={setDetails}
          />
        )}
        {activeStep === 1 &&
          <Inputs
            selectedOption={selectedOption}
            inputDetails={inputDetails}
            setInputDetails={setInputDetails}
            updateRfqDetails={updateRfqDetails}

          />}
        {activeStep === 2 &&
          <RiskAnalysis
            riskDetails={riskDetails}
            setRiskDetails={setRiskDetails}
          />}
        {activeStep === 3 &&
          <DesignFoundry
            designDetails={designDetails}
            setDesignDetails={setDesignDetails}
          />}
        {activeStep === 4 &&
          <Machine
            machineDetails={machineDetails}
            setMachineDetails={setMachineDetails}
            updateMachineDetails={updateMachineDetails}
          />}
        {activeStep === 5 && (
          <Quality
            qualityDetails={qualityDetails}
            setQualityDetails={setQualityDetails}
          />
        )}
        {activeStep === 6 && (
          <NewProductDev
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            npdDetails={npdDetails}
            setNpdDetails={setNpdDetails}
          />
        )}
        {activeStep === 7 ? (

          <div>
            <Summary />
            <Stack
              direction="column"
              alignItems="center"
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  navigate("/dash");
                }}
              >
                Go to Dashboard
              </Button>
            </Stack>
          </div>
        ) : (
          <div>
            <React.Fragment>
              <Stack
                direction="row"
                spacing={5}
                justifyContent="center"
                mt={4}
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
                <Button variant="contained" size="large" onClick={handleSkip}
                  disabled={activeStep === 0 || activeStep === 1} >
                  Skip
                </Button>
                <Button variant="contained" size="large" onClick={handleNext}>
                  Continue
                </Button>
              </Stack>
            </React.Fragment>
           
          </div>
        )}
        
      </div>
      

    </div>
  );
};

export default Process;
