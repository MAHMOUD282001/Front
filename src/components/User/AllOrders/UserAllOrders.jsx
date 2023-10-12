import React from "react";
import { Container, Grid } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import PaginationComponent from "../../Utility/PaginationComponent";
import UserAllOrdersCard from "./UserAllOrdersCard";
import MainDashboardContent from "../../Utility/MainDashboardContent";


function UserAllOrders() {

  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={"اهلا احمد محمد"} />

        <Grid container spacing={2}>
          <UserAllOrdersCard heading={"طلب رقم #12345"} />
          <UserAllOrdersCard heading={"طلب رقم #12345"} />
          <UserAllOrdersCard heading={"طلب رقم #12345"} />
          <UserAllOrdersCard heading={"طلب رقم #12345"} />
        </Grid>
        <PaginationComponent />
      </Container>
    </MainDashboardContent>
  );
}

export default UserAllOrders;
