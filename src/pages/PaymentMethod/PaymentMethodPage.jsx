import { Box, Button, Container } from "@mui/material";
import React from "react";
import MainTitle from "../../components/Utility/MainTitle";
import CommonBtn from "../../components/Utility/CommonBtn";

function PaymentMethodPage() {
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
              <input type="radio" value="" id="visa" name="pay" />
              <label for="visa" style={{ marginRight: 10, fontSize: 20 }}>
                الدفع عن طريق الفيزا
              </label>
            </Box>
            <Box sx={{ display: "flex", mt: 5 }}>
              <input type="radio" value="" id="notVisa" name="pay" />
              <label for="notVisa" style={{ marginRight: 10, fontSize: 20 }}>
                الدفع عند الاستلام
              </label>
            </Box>
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
            34000 جنيه
          </Box>

          <CommonBtn width={"200px"} height={"56px"} text={"اضف الى السلة"} />
        </Box>
      </Container>
    </Box>
  );
}

export default PaymentMethodPage;
