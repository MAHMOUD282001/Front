import { Box } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <Box
      className="loader"
      sx={{
        textAlign: "center",
        mt: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </Box>
  );
}

export default Loader;
