import React from "react";
import { Container, Grid } from "@mui/material";
import AdminAllOrdersCard from "./AdminAllOrdersCard";
import MainTitle from "../../Utility/MainTitle";
import PaginationComponent from "../../Utility/PaginationComponent";
import ClientDetails from "./ClientDetails";
import MainDashboardContent from "../../Utility/MainDashboardContent";


function OrderDetails() {

  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={"تفاصيل الطلب"} />

        <Grid container spacing={2}>
          <AdminAllOrdersCard heading = {"الكترونيات"}/>
          <AdminAllOrdersCard heading = {"الكترونيات"}/>
          <AdminAllOrdersCard heading = {"الكترونيات"}/>
          <AdminAllOrdersCard heading = {"الكترونيات"}/>
        </Grid>
        <ClientDetails />
        <PaginationComponent />
      </Container>
    </MainDashboardContent>
  );
}

export default OrderDetails;
