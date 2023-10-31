import React from "react";
import MainTitle from "../../../../Utility/MainTitle";
import AdminOrderDetailsClientInfo from "../AdminOrderDetailsClientInfo/AdminOrderDetailsClientInfo";
import MainDashboardContent from "../../../../Utility/MainDashboardContent";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import AdminOrderDetailsLogic from "./AdminOrderDetailsLogic";
import { STATUS } from "../../../../../utils/status";
import Loader from "../../../../Utility/Loader";
import { Box, Typography } from "@mui/material";
import AdminOrderDetailsCard from "../AdminOrderDetailsCard";

function AdminOrderDetails() {
  let { id } = useParams();
  
  
  let [order, orderStatus, orderError, updatedDate] =
    AdminOrderDetailsLogic(id);

  console.log();

  return (
    <MainDashboardContent>
      <Container maxWidth="lg">
        <MainTitle
          title={`اوردر رقم #${order?.data?.id || ""} بتاريخ ${
            updatedDate === "NaN/NaN/NaN NaN:NaN:NaN" ? "" : updatedDate
          }`}
        />

        <Grid container>
          {orderStatus === STATUS.LOADING ? (
            <Loader />
          ) : orderStatus === STATUS.FAILED ? (
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
                {orderError?.errors
                  ? orderError?.errors?.map((err) => err.msg)
                  : orderError?.message
                  ? orderError?.message
                  : ""}
              </Typography>
            </Box>
          ) : order ? (
            <AdminOrderDetailsCard key={order?.id} order={order} />
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
              <Typography variant="h5">لا يوجد اوردرات</Typography>
            </Box>
          )}
        </Grid>
        <AdminOrderDetailsClientInfo order={order} />
      </Container>
    </MainDashboardContent>
  );
}

export default AdminOrderDetails;
