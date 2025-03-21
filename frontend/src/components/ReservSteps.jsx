import {
  Box,
  Button,
  Divider,
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
import { CheckCircle } from "@mui/icons-material";
import { motion } from "framer-motion";

const steps = ["Select time & location", "Summary", "Finish"];

export const ReservSteps = ({ car, specLogos, specs, setOpen }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="p-8 bg-[#F5F7F9]">
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
            <span className="flex items-center text-2xl"> - </span>
            <DatePicker label="To" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div>
              <h1 className="text-2xl font-bold my-5">
                Select the pick-up location
              </h1>
              <div>
                <Select label="Age" fullWidth>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold my-5">
                Select the drop-off location
              </h1>
              <div>
                <Select label="Age" fullWidth>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex pt-5">
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
          </div>
        </div>
      ) : activeStep === 1 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:px-6 h-full"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <section className="bg-white p-8 rounded-2xl flex-grow">
              <h1 className="text-3xl font-bold">{car.brand}</h1>
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
            <section className="flex flex-col gap-3">
              <Timeline className="bg-white p-8 rounded-2xl md:max-w-min">
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
              <section className="bg-white p-8 rounded-2xl">
                <h1 className="text-3xl font-bold">Price summary</h1>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl">Price / day</h2>
                  <h1 className="font-bold">{car.priceCategoryId}Ft</h1>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl">Amount</h2>
                  <h1 className="font-bold">2 day</h1>
                </div>
                <Divider sx={{ marginY: "2rem" }} />
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Total:</h2>
                  <h1 className="font-bold text-2xl">
                    {car.priceCategoryId * 2}Ft
                  </h1>
                </div>
                <Button
                  sx={{
                    backgroundColor: "#f1c656",
                    color: "white",
                    marginTop: "1rem",
                  }}
                  fullWidth
                  onClick={handleNext}
                >
                  Book now
                </Button>
              </section>
            </section>
          </div>
          <div className="flex pt-5">
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
          </div>
        </motion.div>
      ) : activeStep === 2 ? (
        <div>
          <motion.div
            className="flex flex-col items-center justify-center mt-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            >
              <CheckCircle sx={{ color: "green", fontSize: "10rem" }} />
            </motion.div>
            <motion.h1
              className="text-2xl font-bold mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Order Confirmed!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Thank you for choosing Rento! Your car rental order has been
              successfully confirmed.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Order number: #984762547
            </motion.p>
          </motion.div>

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
