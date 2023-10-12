import { Typography, useTheme } from "@mui/material";
import React from "react";

function BrandCard({ brand }) {
  let theme = useTheme();

  return (
    <img
      src={brand}
      style={{
        width: "200px",
        height: "150px",
        objectFit: "cover",
        borderRadius: 3,
      }}
    />
  );
}

export default BrandCard;
