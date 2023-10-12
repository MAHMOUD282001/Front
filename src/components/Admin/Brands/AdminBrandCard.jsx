import { Star } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { sidebarContext } from "../../../context/SidebarContext";
import AdminBrandCardHook from "../../../Logic/Admin/Brand/AdminBrandCardHook";

function AdminBrandCard({ brand }) {
  const { open } = useContext(sidebarContext);

  let [handleRemoveBrand] = AdminBrandCardHook();

  return (
    <Grid item xs={12} sm={open ? 12 : 6} md={open ? 6 : 4} lg={open ? 4 : 3}>
      <Card
        sx={{
          textAlign: "center",
          p: 2,
          height: 300,
          position: "relative",
        }}
        className="card"
      >
        <Link to={`/products/${brand?._id}`}>
          <img src={brand?.image} style={{ height: 150 }} />
        </Link>

        <CardContent>

          <Typography variant="body1" sx={{fontSize: 20, color: "#333333", mb: 2 }}>
            {brand?.name}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            position: "absolute",
            bottom: "8px",
            left: 0,
            right: 0,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button sx={{ width: "50%", color: "#62D0B6", py: "8px" }}>
            <Link
              style={{ color: "unset" }}
              to={`/admin/editBrand/${brand?._id}`}
            >
              تعديل
            </Link>
          </Button>
          <Button
            sx={{ width: "50%", color: "#62D0B6", py: "8px" }}
            onClick={() => handleRemoveBrand(brand?._id)}
          >
            حذف
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default AdminBrandCard;
