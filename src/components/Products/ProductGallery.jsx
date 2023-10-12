import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function ProductGallery({ images }) {
  
  return (
    <Box className="product-gallery">
      <Swiper
        slidesPerView={1}
        loop={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        speed={1000}
        effect="slide" // Choose a slide effect (e.g., "slide", "fade", "coverflow")
        grabCursor={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} style={{ height: "100%", width: "100%"}}>
            <img
              src={img}
              style={{ height: "100%", width: "100%", borderRadius: "5px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default ProductGallery;
