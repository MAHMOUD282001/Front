import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import CommonBtn from "../../../../Utility/CommonBtn";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { STATUS } from "../../../../../utils/status";
import AdminChangeOrderToPayLogic from "./AdminChangeOrderToPayLogic";
import AdminChangeOrderToDeliverLogic from "./AdminChangeOrderToDeliverLogic";

function AdminOrderDetailsClientInfo({ order }) {
  let [
    isOrderPaid,
    changedPaidOrder,
    changedPaidOrderStatus,
    changedPaidOrderError,
    handleOrderPayChange,
    handleOrderToPay,
  ] = AdminChangeOrderToPayLogic(order?.data?._id, order);

  let [
    isOrderDelivered,
    changedDeliveredOrder,
    changedDeliveredOrderStatus,
    changedDeliveredOrderError,
    handleOrderDeliverChange,
    handleOrderToDeliver,
  ] = AdminChangeOrderToDeliverLogic(order?.data?._id, order);

  let handleChangeOrder = () => {
    handleOrderToPay();
    handleOrderToDeliver();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "10px",
        padding: "20px",
        mt: 5,
      }}
    >
      <h4>تفاصيل العميل</h4>

      <Box sx={{ mt: 1, textAlign: { xs: "center", sm: "right" } }}>
        <Typography
          variant="body1"
          sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
        >
          الاسم:{" "}
        </Typography>
        <Typography sx={{ color: "#000", display: "inline", fontSize: "18px" }}>
          {order?.data?.user?.name}
        </Typography>
      </Box>

      <Box sx={{ mt: 1, textAlign: { xs: "center", sm: "right" } }}>
        <Typography
          sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
        >
          رقم الهاتف:{" "}
        </Typography>
        <Typography sx={{ color: "#000", display: "inline", fontSize: "18px" }}>
          {order?.data?.user?.phone}
        </Typography>
      </Box>

      <Box sx={{ mt: 1, textAlign: { xs: "center", sm: "right" } }}>
        <Typography
          variant="body1"
          sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
        >
          الايميل:{" "}
        </Typography>
        <Typography sx={{ color: "#000", display: "inline", fontSize: "18px" }}>
          {order?.data?.user?.email}
        </Typography>
      </Box>

      <Box
        sx={{
          my: 3,
          border: "1px solid #62D0B6",
          textAlign: "center",
          padding: "14px",
          borderRadius: "5px",
        }}
      >
        {order?.data?.totalOrderPrice} جنيه
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <FormControl style={{ m: 1, minWidth: 200 }}>
          <InputLabel
            id="demo-simple-select-helper-label"
            style={{ color: "#62D0B6", top: "-7px", right: "15px" }}
          >
            حاله التوصيل
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={isOrderDelivered}
            label="حاله التوصيل"
            onChange={handleOrderDeliverChange}
            variant="outlined"
          >
            <MenuItem value={true}>تم التوصيل</MenuItem>
            <MenuItem value={false}>لم يتم التوصيل</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{ m: 1, minWidth: 200 }}>
          <InputLabel
            id="demo-simple-select-helper-label"
            style={{ color: "#62D0B6", top: "-7px", right: "15px" }}
          >
            حاله الدفع
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={isOrderPaid}
            label="حاله الدفع"
            onChange={handleOrderPayChange}
            variant="outlined"
          >
            <MenuItem value={true}>تم الدفع</MenuItem>
            <MenuItem value={false}>لم يتم الدفع</MenuItem>
          </Select>
        </FormControl>

        <CommonBtn
          width={"100px"}
          height={"56px"}
          text={"حفظ"}
          handleOnClick={handleChangeOrder}
          loading={
            changedPaidOrderStatus === STATUS.SUCCEEDED ||
            changedPaidOrderStatus === STATUS.FAILED ||
            changedPaidOrderStatus === STATUS.IDLE ||
            changedDeliveredOrderStatus === STATUS.SUCCEEDED ||
            changedDeliveredOrderStatus === STATUS.FAILED ||
            changedDeliveredOrderStatus === STATUS.IDLE
          }
        />
      </Box>
    </Box>
  );
}

export default AdminOrderDetailsClientInfo;
