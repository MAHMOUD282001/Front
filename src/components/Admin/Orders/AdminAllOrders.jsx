import { Container, Grid } from "@mui/material";
import AdminAllOrdersCard from "./AdminAllOrdersCard";
import MainTitle from "../../Utility/MainTitle";
import PaginationComponent from "../../Utility/PaginationComponent";
import MainDashboardContent from "../../Utility/MainDashboardContent";


function AdminAllOrders() {
  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={"ادارة جميع الطلبات"} />

        <Grid container spacing={2}>
          <AdminAllOrdersCard heading={"طلب رقم #12345"} />
          <AdminAllOrdersCard heading={"طلب رقم #12345"} />
          <AdminAllOrdersCard heading={"طلب رقم #12345"} />
          <AdminAllOrdersCard heading={"طلب رقم #12345"} />
        </Grid>
        <PaginationComponent />
      </Container>
    </MainDashboardContent>
  );
}

export default AdminAllOrders;
