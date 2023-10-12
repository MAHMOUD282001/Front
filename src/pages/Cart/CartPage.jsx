import { Box, Container, Grid } from "@mui/material";
import React from "react";
import MainTitle from "../../components/Utility/MainTitle";
import CartItem from "../../components/Cart/CartItem";
import CartCheckout from "../../components/Cart/CartCheckout";

function CartPage() {
  
  return (
    <Box sx={{ minHeight: "calc(100vh - 160px)", my: 5 }}>
      <Container>
        <Box>
          <MainTitle title={"عربة التسوق"} />
        </Box>

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item lg={9} md={8} xs={12}>
            <CartItem />
          </Grid>
          <Grid item lg={3} md={4} xs={12}>
            <CartCheckout />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartPage;
