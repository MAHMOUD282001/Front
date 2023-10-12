import React from "react";
import { Box, Container, Grid } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import UserAddressesCard from "./UserAddressesCard";
import CommonBtn from "../../Utility/CommonBtn";
import MainDashboardContent from "../../Utility/MainDashboardContent";




function UserAddresses() {

  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={"العناوين"} />

        <Grid container spacing={2}>
          <UserAddressesCard />
          <UserAddressesCard />
        </Grid>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          <CommonBtn
            width={"150px"}
            height={"56px"}
            text={"اضافه عنوان جديد"}
            path={"/user/addAddress"}
          />
        </Box>
      </Container>
    </MainDashboardContent>
  );
}

export default UserAddresses;
