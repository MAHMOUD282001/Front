import { Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function BrandCard({ brand, id }) {
  //Solve Error Of Image In Backend When Update

  let firstPart = brand?.slice(0, 29);

  let secondPart = brand?.slice(29, 58);

  let img =
    firstPart === secondPart ? brand?.slice(29) : brand;

  return (
    <Link to={`/brandProducts/${id}`}>
      <img
        src={img}
        style={{
          width: "200px",
          height: "150px",
          objectFit: "cover",
          borderRadius: 3,
        }}
      />
    </Link>
  );
}

export default BrandCard;
