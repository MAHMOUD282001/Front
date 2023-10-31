import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { sidebarContext } from "../../../../context/SidebarContext";
import AdminCategoryCardLogic from "./AdminCategoryCardLogic";
import { Link } from "react-router-dom";

function AdminCategoryCard({ category }) {
  const { open } = useContext(sidebarContext);

  let [handleRemoveCategory] = AdminCategoryCardLogic();

  //Solve Error Of Image In Backend When Update

  let firstPart = category?.image?.slice(0, 33);

  let secondPart = category?.image?.slice(33, 66);

  let img =
    firstPart === secondPart ? category?.image?.slice(33) : category?.image;

  return (
    <Grid item xs={12} sm={open ? 12 : 6} md={open ? 6 : 4} lg={open ? 4 : 3}>
      <Card
        sx={{
          textAlign: "center",
          p: 2,
          height: 300,
          position: "relative",
          zIndex: "990!important",
        }}
        className="card"
      >
        <img src={img} style={{ height: 150 }} />

        <CardContent>
          <Typography
            variant="body1"
            sx={{ fontSize: 20, color: "#333333", mb: 2 }}
          >
            {category?.name}
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
              to={`/admin/editCategory/${category?._id}`}
            >
              تعديل
            </Link>
          </Button>
          <Button
            sx={{ width: "50%", color: "#62D0B6", py: "8px" }}
            onClick={() => handleRemoveCategory(category?._id)}
          >
            حذف
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default AdminCategoryCard;
