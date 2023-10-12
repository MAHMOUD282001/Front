import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import phone from "../../assets/phone.png";
import { Box, Container, Grid } from "@mui/material";
import {
  FacebookOutlined,
  Instagram,
  Phone,
  PhoneAndroid,
  Twitter,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <Box
      sx={{
        padding: "20px 0",
        width: "100%",
        background: "#000",
        lineHeight: 0,
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid
            item
            md={6}
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "#fff",
              }}
            >
              <div>الشروط والاحكام</div>
              <div>سيايه الخصوصيه</div>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "end",
              mt: { md: 0, xs: 3 },
            }}
          >
            <Box sx={{ cursor: "pointer" }}>
              <PhoneAndroid sx={{ color: "#fff" }} />
            </Box>
            <Box sx={{ cursor: "pointer" }}>
              <FacebookOutlined sx={{ color: "#fff" }} />
            </Box>
            <Box sx={{ cursor: "pointer" }} className="">
              <Instagram  sx={{ color: "#fff" }} />
            </Box>
            <Box sx={{ cursor: "pointer" }} className="">
              <Twitter  sx={{ color: "#fff" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
