import { Box, Typography } from "@mui/material";
import MainTitle from "../../components/Utility/MainTitle";
import CartItem from "../../components/Cart/CartItem/CartItem";
import CartCheckout from "../../components/Cart/CartCheckout/CartCheckout";
import CartLogic from "./CartLogic";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Utility/Loader";
import { Container, Grid } from "@material-ui/core";

function CartPage() {
  let [
    cartItemsNum,
    itemsOfCart,
    itemsStatus,
    itemsError,
    totalCartPrice,
    cartId,
    addedCouponName,
    priceAfterDiscount,
  ] = CartLogic();
  
  
  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)", my: 5 }}>
      <Container maxWidth={"lg"}>
        <Box>
          <MainTitle title={"عربة التسوق"} />
        </Box>

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item lg={9} md={8} xs={12}>
            {itemsStatus === STATUS.LOADING ? (
              <Loader />
            ) : itemsStatus === STATUS.FAILED ? (
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
                  {itemsError?.errors
                    ? itemsError?.errors?.map((err) => err.msg)
                    : itemsError?.message
                    ? itemsError?.message
                    : "" || "لا يوجد منتجات فى العربه"}
                </Typography>
              </Box>
            ) : cartItemsNum > 0 ? (
              itemsOfCart?.map((cartItem) => (
                <CartItem key={cartItem._id} cartItem={cartItem} />
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
                <Typography variant="h5">لا يوجد منتجات فى السله</Typography>
              </Box>
            )}
          </Grid>

          <Grid item lg={3} md={4} xs={12}>
            <CartCheckout
              cartItemsNum={cartItemsNum}
              itemsOfCart={itemsOfCart}
              totalCartPrice={totalCartPrice}
              addedCouponName={addedCouponName}
              priceAfterDiscount={priceAfterDiscount}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartPage;
