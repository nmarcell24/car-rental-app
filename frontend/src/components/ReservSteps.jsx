import {
  Box,
  Button,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  CheckCircle,
  CheckCircleOutline,
  CheckCircleOutlined,
} from "@mui/icons-material";

const steps = ["Select time & location", "Summary", "Finish"];

export const ReservSteps = ({ car, specLogos, specs, setOpen }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="p-8">
      <Stepper activeStep={activeStep} className="pb-3">
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === 0 ? (
        <div className="px-6">
          <h1 className="text-2xl font-bold my-5">Select the date</h1>
          <div className="flex gap-5">
            <DatePicker label="From" />
            <DatePicker label="To" />
          </div>
          <h1 className="text-2xl font-bold my-5">
            Select the pick up location
          </h1>
          <div>
            <Select label="Age">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </div>
      ) : activeStep === 1 ? (
        <div className="px-6">
          <div className="flex gap-5">
            <section>
              <h1 className="text-3xl font-bold  mt-5">{car.brand}</h1>
              <img src={car.imageUrl.slice(1)} />
              <div className="grid grid-cols-2 gap-2">
                {specs.map((spec, index) => (
                  <div key={index} className="border p-2 rounded-lg">
                    <span className="font-semibold">
                      {specLogos[index]} {/*{spec.label}: */}
                    </span>
                    {spec.value}
                  </div>
                ))}
              </div>
            </section>
            <Timeline sx={{ maxWidth: "min-content", border: 1 }}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h1 className="font-bold">Pick-up</h1>
                  <h2 className="w-30">Ohio, 4244 Bingamon Road</h2>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <h1 className="font-bold">Drop-off</h1>
                  <h2 className="w-30">Nebraska, 4272 Clousson Road</h2>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <section>
              <h1 className="text-3xl font-bold  mt-5">Price summary</h1>
            </section>
          </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </div>
      ) : activeStep === 2 ? (
        <div>
          <div className="flex flex-col items-center justify-center">
            <CheckCircle sx={{ color: "green", fontSize: "10rem"}} />
            <h1 className="text-2xl font-bold mb-8">Order Confirmed !</h1>
            <p>Thank you for choosing Rento! Your car rental order has been successfully confirmed.</p>
            <p>Order number: #984762547</p>
          </div>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Box>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
