import { Box, Button, TextField, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import CommonBtn from "../Utility/CommonBtn";

function CartCheckout() {
  let theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", gap: 1 }}>
        <TextField
          label="كود الخصم"
          InputLabelProps={{
            style: {
              color: theme.palette.primary.main,
            },
          }}
          sx={{ width: "80%" }}
        />

        <CommonBtn width={"20%"} height={"56px"} text={"تطبيق"} />
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
        34000 جنيه
      </Box>

      <Link to="/order/paymethod">
        <CommonBtn width={"100%"} height={"56px"} text={"اتمام الشراء"} />
      </Link>
    </Box>
  );
}

export default CartCheckout;
