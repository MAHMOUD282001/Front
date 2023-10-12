import { Star } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import product from "../../../assets/mobile.png";
import { useContext } from "react";
import { sidebarContext } from "../../../context/SidebarContext";

function UserFavoriteProductsCard() {
  const { open } = useContext(sidebarContext);
  let theme = useTheme();


  return (
    <Grid item xs={12} sm={open ? 12 : 6} md={open ? 6 : 4} lg={open ? 4 : 3}>
      <Card
        sx={{
          textAlign: "center",
          p: 2,
          height: 400,
          position: "relative",
        }}
        className="card"
      >
        <Link to={`/products/`}>
          <img src={product} style={{ height: 150 }} />
        </Link>

        <CardContent>
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography sx={{ fontSize: 16, color: theme.palette.primary.main }}>
              Samsung
            </Typography>

            <Typography sx={{ fontSize: 16, color: theme.palette.primary.main }}>
              SmartPhones
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ color: "#333333", mb: 2 }}>
            abcd
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
              position: "absolute",
              bottom: "80px",
              right: "0",
              width: "100%",
              padding: "0 32px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#F55157", fontWeight: "600", fontSize: 16 }}
            >
              {product?.discountedPrice} رس
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#ffdf00",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
              className="stars"
            >
              4.5 <Star />
            </Typography>
          </Box>
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
          <Button sx={{ width: "50%", color: theme.palette.primary.main, py: "8px" }}>
            تعديل
          </Button>
          <Button sx={{ width: "50%", color: theme.palette.primary.main, py: "8px" }}>
            حذف
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default UserFavoriteProductsCard;
