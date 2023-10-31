import React from "react";
import UserAllOrdersCardProductInfo from "./UserAllOrdersCardProductInfo";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserAllOrdersCard({ order, heading }) {
  let navigate = useNavigate();

  return (
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
          padding: "20px",
          mb: 2,
        }}
        onClick={() => navigate("")}
      >
        <Typography variant="body1" sx={{ color: "#666666", mb: 2 }}>
          {heading}
        </Typography>

        {order?.cartItems?.map((cartItem) => (
          <UserAllOrdersCardProductInfo
            key={cartItem?._id}
            cartItem={cartItem}
          />
        ))}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            flexWrap: { xs: "wrap", sm: "nowrap" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 3, sm: 0 },
            mt: 3,
          }}
        >
          <Box>
            <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
              <Typography
                variant="h6"
                sx={{ color: "#000", display: "inline" }}
              >
                التوصيل:{" "}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#666666", display: "inline" }}
              >
                {order?.isDelivered ? "تم التوصيل" : "لم يتم التوصيل"}
              </Typography>
            </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "right" }, mt: 2 }}>
              <Typography
                variant="h6"
                sx={{ color: "#000", display: "inline" }}
              >
                الدفع:{" "}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#666666", display: "inline" }}
              >
                {order?.isPaid ? "تم الدفع" : "لم يتم الدفع"}
              </Typography>
            </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "right" }, mt: 2 }}>
              <Typography
                variant="h6"
                sx={{ color: "#000", display: "inline" }}
              >
                طريقه الدفع:{" "}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#666666", display: "inline" }}
              >
                {order?.paymentMethodType === "cash" ? "كاش" : "فيزا"}
              </Typography>
            </Box>
          </Box>

          <Typography variant="h6" sx={{ color: "#000" }}>
            {order?.totalOrderPrice} جنيه
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default UserAllOrdersCard;
