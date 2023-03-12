import React from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
const MyErrorSnack = ({ errorSearchMsg, handleCloseAlert }) => {
  return (
    <Snackbar
      open={errorSearchMsg}
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
        severity="error"
      >
        <AlertTitle>Error</AlertTitle>
        Search cannot be empty
      </Alert>
    </Snackbar>
  );
};

export default MyErrorSnack;
