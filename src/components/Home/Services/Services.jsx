import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Service from "./Service";

function Services() {
  let theme = useTheme();

  let servicesItems = [
    {
      icon: <Inventory2OutlinedIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />,
      heading: "منتجات مضمونه",
      body: "مدفوعات آمنة أقساط تصل إلى 12 شهرًا",
    },

    {
      icon: <CachedOutlinedIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />,
      heading: "مدفوعات آمنة",
      body: "مدفوعات آمنة أقساط تصل إلى 12 شهرًا",
    },

    {
      icon: (
        <MonetizationOnOutlinedIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
      ),
      heading: "شحن مجاني",
      body: "مدفوعات آمنة أقساط تصل إلى 12 شهرًا",
    },
  ];

  return (
    <Box>
      <Container>
        <Paper sx={{ p: 4, my: 10 }}>
          <Grid container spacing={2}>
            {servicesItems.map((servicesItem, index) => (
                <Service
                  key={index}
                  index={index}
                  icon={servicesItem.icon}
                  heading={servicesItem.heading}
                  body={servicesItem.body}
                />
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Services;
