import React from 'react'
import MainTitle from '../Utility/MainTitle'
import { Box, Grid, Typography } from '@mui/material'
import BrandCard from './BrandCard';
import { STATUS } from '../../utils/status';
import Loader from '../Utility/Loader';
import { Container } from '@material-ui/core';


function AllBrandsPageContent({brands, brandsStatus}) {
  return (
    <Box>
      <Container maxWidth={"lg"}>
        <MainTitle
          title={"تسوق حسب الفئات"}
          desc={"تسوق احدث المنتجات المميزة المضافة جديد"}
        />
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
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
              <Typography variant="h5">
                حدثت مشكله اثناء تحميل التصنيفات
              </Typography>
            </Box>
          ) : brands.data?.length > 0 ? (
            brands.data.map((brand) => (
              <Grid
                key={brand._id}
                item
                lg={2}
                md={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BrandCard
                  brand={brand.image}
                />
              </Grid>
            ))
          ) : (
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
          )}
        </Grid>
      </Container>
    </Box>
  )
}

export default AllBrandsPageContent