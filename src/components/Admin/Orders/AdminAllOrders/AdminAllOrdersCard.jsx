import { Box, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import AdminAllOrdersCardUserInfo from "./AdminAllOrdersCardUserInfo";

function AdminAllOrdersCard({ heading, order }) {
  let navigate = useNavigate();
  
  var date = new Date(order?.createdAt);

  let updatedDate =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
          padding: "20px",
          cursor: "pointer",
          mb: 2,
        }}
        onClick={() => navigate(`/admin/allOrders/${order?._id}`)}
      >
        <Typography variant="body1" sx={{ color: "#666666" }}>
          {`${heading} بتاريخ ${updatedDate}`}
        </Typography>
        <AdminAllOrdersCardUserInfo user={order?.user} />
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

export default AdminAllOrdersCard;
