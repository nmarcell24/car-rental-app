import { Box, Button, Divider, Step, StepLabel, Stepper } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";
import { CheckCircle } from "@mui/icons-material";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import axios from "axios";
import { useUserContext } from "../hooks/useUserContext";
import ErrorSnackbar from "./ErrorSnackBar";

const steps = ["Select time", "Summary", "Finish"];

export const ReservSteps = ({ car, specLogos, specs, setOpen }) => {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "day"));
  const [activeStep, setActiveStep] = useState(0);
  const [isValidImage, setIsValidImage] = useState(true);
  const [error, setError] = useState("");
  const { currentUser } = useUserContext();
  let diff =
    dayjs(endDate).diff(startDate, "day") === 0
      ? 1
      : dayjs(endDate).diff(startDate, "day");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      axios
        .post("/api/loan/create", {
          carId: car.id,
          startDate: startDate.format("YYYY-MM-DD"),
          endDate: endDate.format("YYYY-MM-DD"),
          totalPrice: car.priceCategoryId * diff,
          userId: currentUser.id,
        })
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
          setError(
            err?.response?.data?.message ||
              "An error occurred while loaning the car."
          );
        });
    }
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
          <div className="flex flex-col gap-5 md:flex-row">
            <DatePicker
              label="From"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              minDate={dayjs()}
              disablePast
            />
            <span className="hidden md:flex items-center text-2xl"> - </span>
            <DatePicker
              label="To"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              minDate={dayjs()}
              error={endDate.isBefore(startDate, "day")}
              helperText={
                endDate.isBefore(startDate, "day")
                  ? "End date cannot be before start date"
                  : ""
              }
            />
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

            <Button
              onClick={handleNext}
              disabled={endDate.isBefore(startDate, "day")}
            >
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
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 h-full">
            {/* Car content */}
            <section className="bg-white p-8 rounded-2xl flex-grow">
              <h1 className="text-3xl font-bold">{car.brand}</h1>
              <img
                src={
                  isValidImage
                    ? car.imageUrl && car.imageUrl.slice(1)
                    : "/images/placeholder.svg"
                }
                onError={() => setIsValidImage(false)}
                className="w-full object-contain max-h-64 my-4"
              />
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

            {/* Price summary */}
            <section className="flex flex-col gap-3 flex-grow">
              <section className="bg-white p-8 rounded-2xl flex flex-col justify-between h-full">
                <div>
                  <h1 className="text-3xl font-bold">Price summary</h1>
                  <div className="flex items-center justify-between mt-4">
                    <h2 className="text-xl">Price / day</h2>
                    <h1 className="font-bold">{car.priceCategoryId}Ft</h1>
                  </div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl">Amount</h2>
                    <h1 className="font-bold">{diff} day</h1>
                  </div>
                  <Divider sx={{ marginY: "2rem" }} />
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Total:</h2>
                    <h1 className="font-bold text-2xl">
                      {car.priceCategoryId * diff}
                      Ft
                    </h1>
                  </div>
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

      <ErrorSnackbar error={error} onClose={() => setError("")} />
    </div>
  );
};
