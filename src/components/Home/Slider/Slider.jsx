import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import firstSlide from "../../../assets/slider-1.jpg";
import secondSlide from "../../../assets/slider-2.jpg";
import lastSlide from "../../../assets/slider-3.jpg";
import Slide from "./Slide";
import { Box } from "@mui/material";

function Slider() {
  let slides = [
    {
      img: lastSlide,
      heading: "أفضل التخفيضات 2023",
      body: `متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي
        بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل
        بالتخفيضات على المنتجات`,
    },

    {
      img: secondSlide,
      heading: "أفضل التخفيضات 2023",
      body: `متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي
          بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل
          بالتخفيضات على المنتجات`,
    },

    {
      img: firstSlide,
      heading: "أفضل التخفيضات 2023",
      body: `متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي
          بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل
          بالتخفيضات على المنتجات`,
    },
  ];

  return (
    <Box className="slider">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={1000} 
        effect="slide" // Choose a slide effect (e.g., "slide", "fade", "coverflow")
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide img={slide.img} heading={slide.heading} body={slide.body} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Slider;
