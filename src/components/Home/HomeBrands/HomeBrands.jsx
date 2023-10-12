import { Box, Container, Typography } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import brand from "../../../assets/brand1.png";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BrandCard from "../../Brands/BrandCard";
import { STATUS } from "../../../utils/status";
import Loader from "../../Utility/Loader";
import HomeBrandsHook from "../../../Logic/Home/HomeBrandsHook";

function HomeBrands({ title, desc, btnText, path }) {
  let [brands, brandsStatus, brandsError] = HomeBrandsHook();

  return (
    <Box sx={{ my: 5 }}>
      <Container>
        <MainTitle title={title} desc={desc} btnText={btnText} path={path} />

        {brandsStatus === STATUS.LOADING ? (
          <Loader />
        ) : brandsStatus === STATUS.FAILED ? (
          <Box
            sx={{
              width: "100%",
              padding: "2rem",
              background: "#F8F8F8",
              textAlign: "center",
              borderRadius: "4px",
            }}
          >
            <Typography variant="h5">{brandsError}</Typography>
          </Box>
        ) : brands.data?.length === 0 ? (
          <Box
            sx={{
              width: "100%",
              padding: "2rem",
              background: "#F8F8F8",
              textAlign: "center",
              borderRadius: "4px",
            }}
          >
            <Typography variant="h5">لا يوجد تصنيفات</Typography>
          </Box>
        ) : (
          <Swiper
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },

              1200: {
                slidesPerView: 5,
              },
            }}
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
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {brands.data?.slice(0, 6).map((brand) => (
              <SwiperSlide
                key={brand._id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <BrandCard brand={brand.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </Box>
  );
}

export default HomeBrands;
