import { Box, Grid, Typography } from "@mui/material";
import AdminCouponCard from "../AdminCouponCard/AdminCouponCard";
import AdminAllCouponsLogic from "./AdminAllCouponsLogic";
import { STATUS } from "../../../../utils/status";
import Loader from "../../../Utility/Loader";
import PaginationComponent from "../../../Utility/PaginationComponent";

function AdminAllCoupons() {
  let [coupons, couponsStatus, couponsError, page, getPage] =
    AdminAllCouponsLogic();

  return (
    <Grid container sx={{ width: { xs: "100%", sm: "70%" }, mt: 7 }}>
      {couponsStatus === STATUS.LOADING ? (
        <Loader />
      ) : couponsStatus === STATUS.FAILED ? (
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
            {couponsError?.errors
              ? couponsError?.errors?.map((err) => err.msg)
              : couponsError?.message
              ? couponsError?.message
              : ""}
          </Typography>
        </Box>
      ) : coupons?.data?.length > 0 ? (
        coupons?.data?.map((coupon) => (
          <AdminCouponCard key={coupon._id} coupon={coupon} />
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
          <Typography variant="h5">لا يوجد كوبونات</Typography>
        </Box>
      )}

      {coupons?.paginationResult?.numberOfPages > 1 ? (
        <PaginationComponent
          pageCount={coupons?.paginationResult?.numberOfPages}
          getPage={getPage}
          page={page}
        />
      ) : (
        ""
      )}
    </Grid>
  );
}

export default AdminAllCoupons;
