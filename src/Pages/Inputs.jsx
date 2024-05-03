import React from "react";
import Rfq from "./Rfq"; 
import Ecn from "./Ecn"; 

const Inputs = ({ selectedOption, inputDetails, setInputDetails, updateRfqDetails }) =>  {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputDetails({
      ...inputDetails,
      [name]: value
    });
  };

  if (selectedOption === "RFQ") {
    return <Rfq inputDetails = {inputDetails} setInputDetails={setInputDetails} handleInputChange={handleInputChange} updateRfqDetails = {updateRfqDetails}/>;
  } else if (selectedOption === "ECN" ) {
    return <Ecn inputDetails = {inputDetails} setInputDetails={setInputDetails} handleInputChange={handleInputChange}/>;
  } else {
    return null; 
  }
};

export default Inputs;
