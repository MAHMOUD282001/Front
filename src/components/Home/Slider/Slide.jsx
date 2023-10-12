import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Box, Button, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";

function Slide({ img, heading, body }) {
  
  return (
    <>
      <div className="slider-overlay"></div>
      <img src={img} loading="lazy"/>
      <Box sx={{ position: "absolute", color: "#fff", width: "70%" }}>
        <Typography variant="h2" sx={{ fontWeight: "600" }}>
          {heading}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          {body}
        </Typography>
      </Box>
    </>
  );
}

export default Slide;
