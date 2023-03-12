import React from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
const MyWarningSnackBar = ({ handleCloseAlert, errorYearMsg }) => {
  return (
    <Snackbar
      open={errorYearMsg}
      autoHideDuration={2000}
      onClose={handleCloseAlert}
    >
      <Alert
        sx={{
          position: "fixed",
          bottom: "15px",
          left: "15px",
          textAlign: "left",
          width: "20%",
        }}
        variant="filled"
        severity="warning"
      >
        <AlertTitle>Warning</AlertTitle>
        Year should be empty or more than 1980
      </Alert>
    </Snackbar>
  );
};

export default MyWarningSnackBar;
