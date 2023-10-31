import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import MainTitle from "../../../Utility/MainTitle";
import PaginationComponent from "../../../Utility/PaginationComponent";
import UserAllOrdersCard from "../UserAllOrdersCard";
import MainDashboardContent from "../../../Utility/MainDashboardContent";
import UserAllOrdersLogic from "./UserAllOrdersLogic";
import { STATUS } from "../../../../utils/status";
import Loader from "../../../Utility/Loader";
import { Container } from "@material-ui/core";

function UserAllOrders() {
  let [orders, ordersStatus, ordersError, page, getPage] = UserAllOrdersLogic();

  return (
    <MainDashboardContent>
      <Container maxWidth="lg">
        <MainTitle title={`عدد الطلبات #${orders?.results || ""}`} />

        <Grid container>
          {ordersStatus === STATUS.LOADING ? (
            <Loader />
          ) : ordersStatus === STATUS.FAILED ? (
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
                {ordersError?.errors
                  ? ordersError?.errors?.map((err) => err.msg)
                  : ordersError?.message
                  ? ordersError?.message
                  : ""}
              </Typography>
            </Box>
          ) : orders?.data?.length > 0 ? (
            orders?.data?.map((order) => (
              <UserAllOrdersCard
                key={order?.id}
                order={order}
                heading={`طلب رقم #${order?.id}`}
              />
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
              <Typography variant="h5">لا يوجد اوردرات</Typography>
            </Box>
          )}
        </Grid>
        {orders?.paginationResult?.numberOfPages > 1 ? (
          <PaginationComponent
            pageCount={orders?.paginationResult?.numberOfPages}
            getPage={getPage}
            page={page}
          />
        ) : (
          ""
        )}
      </Container>
    </MainDashboardContent>
  );
}

export default UserAllOrders;
