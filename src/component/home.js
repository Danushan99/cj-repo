import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import MultiSelect from "./MultiSelect.js";

const steps = [
    { label: 'Step 1', options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 2', value: 'option2' },
    ] },
    { label: 'Step 2', options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 2', value: 'option2' },
    ] },
    { label: 'Step 3', options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 2', value: 'option2' },
    ] },
    { label: 'Step 4', options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 2', value: 'option2' },
    ] },
  ];
  
function Home() {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedValues, setSelectedValues] = useState([]);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSelect = (values) => {
      setSelectedValues(values);
    };
  
    return (
      <div>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
  
        <div>
          {activeStep === steps.length ? (
            <div>
              <p>All steps completed</p>
              <p>Selected Values: {JSON.stringify(selectedValues)}</p>
            </div>
          ) : (
            <div>
              <p>Step {activeStep + 1}</p>
              <MultiSelect options={steps[activeStep].options} onSelect={handleSelect} />
  
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
  
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };
  

export default Home;
