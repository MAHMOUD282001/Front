import { Box } from "@mui/material";
import CommonBtn from "../../Utility/CommonBtn";
import { TextField, useTheme } from "@material-ui/core";
import CartCheckoutLogic from "./CartCheckoutLogic";
import { STATUS } from "../../../utils/status";
import ApplyCouponLogic from "./ApplyCouponLogic";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CartCheckout({
  cartItemsNum,
  itemsOfCart,
  totalCartPrice,
  addedCouponName,
  priceAfterDiscount,
}) {
  let theme = useTheme();

  let [cartStatus, handleClearCart, handlePayment] =
    CartCheckoutLogic(cartItemsNum);

  let [couponStatus, couponName, handleCouponNameChange, handleSubmitCoupon] =
    ApplyCouponLogic();

  useEffect(() => {
    if (addedCouponName?.length > 0) {
      handleCouponNameChange(addedCouponName);
    } else {
      handleCouponNameChange("");
    }
  }, [addedCouponName]);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <TextField
          variant="outlined"
          label="كود الخصم"
          InputLabelProps={{
            style: {
              color: theme.palette.primary.main,
            },
          }}
          style={{ width: "60%", height: "56px" }}
          value={couponName}
          onChange={(e) => handleCouponNameChange(e.target.value)}
        />

        <CommonBtn
          width={"30%"}
          height={"56px"}
          text={"تطبيق"}
          loading={
            couponStatus === STATUS.LOADING ||
            couponStatus === STATUS.IDLE ||
            couponStatus === STATUS.SUCCEEDED
          }
          handleOnClick={handleSubmitCoupon}
        />
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
        {priceAfterDiscount > 0
          ? `السعر قبل الخصم ${totalCartPrice} ... السعر بعد الخصم ${priceAfterDiscount}`
          : totalCartPrice}{" "}
        جنيه
      </Box>

      {cartItemsNum !== 0 ? (
        <CommonBtn
          width={"100%"}
          height={"56px"}
          text={"مسح العربه"}
          loading={
            cartStatus === STATUS.LOADING ||
            cartStatus === STATUS.IDLE ||
            cartStatus === STATUS.SUCCEEDED
          }
          handleOnClick={handleClearCart}
        />
      ) : (
        ""
      )}

      <CommonBtn
        width={"100%"}
        height={"56px"}
        text={"اتمام الشراء"}
        mt={3}
        loading={true}
        handleOnClick={handlePayment}
      />
    </Box>
  );
}

export default CartCheckout;
