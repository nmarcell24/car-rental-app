import { Alert, Snackbar } from "@mui/material";
import React from "react";

const ErrorSnackbar = ({ error, onClose }) => {
  return (
    <Snackbar
      open={Boolean(error)}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity="error" variant="filled" sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
