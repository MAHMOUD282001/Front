import { Container, Grid } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import PaginationComponent from "../../Utility/PaginationComponent";
import UserFavoriteProductsCard from "./UserFavoriteProductsCard";
import MainDashboardContent from "../../Utility/MainDashboardContent";


function UserFavoriteProducts() {

  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={"المنتجات المفضله"} />

        <Grid container spacing={2}>
          <UserFavoriteProductsCard />
          <UserFavoriteProductsCard />
          <UserFavoriteProductsCard />
          <UserFavoriteProductsCard />
        </Grid>
        <PaginationComponent />
      </Container>
    </MainDashboardContent>
  );
}

export default UserFavoriteProducts;
