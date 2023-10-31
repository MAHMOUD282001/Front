import MainDashboardContent from "../../Utility/MainDashboardContent";
import { Container } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import AdminAddCoupon from "./AdminAddCoupon/AdminAddCoupon";
import AdminAllCoupons from "./AdminAllCoupons/AdminAllCoupons";

function AdminCoupons() {
  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={"اضف كوبون"} />
        
        <AdminAddCoupon />
        <AdminAllCoupons />
      </Container>
    </MainDashboardContent>
  );
}

export default AdminCoupons;
