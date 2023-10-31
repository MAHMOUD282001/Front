import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import MainTitle from "../../components/Utility/MainTitle";
import CommonBtn from "../../components/Utility/CommonBtn";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import UserAllAddressesLogic from "../../components/User/Addresses/UserAllAddresses/UserAllAddressesLogic";
import { STATUS } from "../../utils/status";
import { toast } from "react-toastify";
import OrderCashPayLogic from "./OrderCashPayLogic";
import GetAddressLogic from "./GetAddressLogic";
import OrderVisaPayLogic from "./OrderVisaPayLogic";
import CartLogic from "../Cart/CartLogic";

function PaymentMethodPage() {
  let [allAddresses, ,] = UserAllAddressesLogic();

  let [addressId, handleChooseAddress, addressDetails] = GetAddressLogic();

  let [orderStatus, createOrderWithCash] = OrderCashPayLogic(addressDetails);

  let [, , , , totalCartPrice, , , priceAfterDiscount] = CartLogic();

  let [orderWithVisaStatus, createOrderWithVisa] =
    OrderVisaPayLogic(addressDetails);

  let [type, setType] = useState("");

  let handleChoosePayType = (e) => {
    setType(e.target.value);
  };

  let handleCreateOrder = () => {
    if (type === "CARD") {
      createOrderWithVisa();
    } else if (type === "CASH") {
      createOrderWithCash();
    } else {
      toast.error("من فضلك اختار طريقه دفع");
    }
  };

  return (
    <Box>
      <Container sx={{ minHeight: "calc(100vh - 160px)" }}>
        <MainTitle title={"اختر طريقة الدفع"} />

        <Box
          sx={{
            boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "5px",
            p: 3,
            mb: 5,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex" }}>
              <input
                type="radio"
                value="CARD"
                id="visa"
                name="pay"
                onChange={handleChoosePayType}
              />
              <label for="visa" style={{ marginRight: 10, fontSize: 20 }}>
                الدفع عن طريق الفيزا
              </label>
            </Box>
            <Box sx={{ display: "flex", mt: 5 }}>
              <input
                type="radio"
                value="CASH"
                id="notVisa"
                name="pay"
                onChange={handleChoosePayType}
              />
              <label for="notVisa" style={{ marginRight: 10, fontSize: 20 }}>
                الدفع عند الاستلام
              </label>
            </Box>
          </Box>

          <Box
            sx={{ width: { xs: "100%", sm: "70%" }, mt: 5 }}
            className="select-input"
          >
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: "#62D0B6", top: "-7px", right: "15px" }}
              >
                اختر عنوان{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="outlined"
                value={addressId || ""}
                label=" اختر عنوان"
                onChange={handleChooseAddress}
              >
                {allAddresses?.data?.length > 0
                  ? allAddresses?.data?.map((address) => (
                      <MenuItem key={address._id} value={address._id}>
                        {address.alias}
                      </MenuItem>
                    ))
                  : ""}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 2,
            mt: 3,
          }}
        >
          <Box
            sx={{
              border: "1px solid #62D0B6",
              textAlign: "center",
              borderRadius: "5px",
              width: "200px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {priceAfterDiscount > 0
              ? `السعر قبل الخصم ${totalCartPrice} ... السعر بعد الخصم ${priceAfterDiscount}`
              : totalCartPrice}{" "}
            جنيه{" "}
          </Box>

          <CommonBtn
            width={"200px"}
            height={"56px"}
            text={"اتمام الشراء"}
            handleOnClick={handleCreateOrder}
            loading={
              orderStatus === STATUS.SUCCEEDED ||
              orderStatus === STATUS.FAILED ||
              orderStatus === STATUS.IDLE ||
              orderWithVisaStatus === STATUS.SUCCEEDED ||
              orderWithVisaStatus === STATUS.FAILED ||
              orderWithVisaStatus === STATUS.IDLE
            }
          />
        </Box>
      </Container>
    </Box>
  );
}

export default PaymentMethodPage;
