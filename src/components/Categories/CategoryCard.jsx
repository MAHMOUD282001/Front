import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CategoryCard({ title, img, id }) {
  //Solve Error Of Image In Backend When Update

  let firstPart = img?.slice(0, 33);

  let secondPart = img?.slice(33, 66);

  let image =
    firstPart === secondPart ? img?.slice(33) : img;

  return (
    <Link to={`/categoryProducts/${id}`} style={{ mb: 3, color: "#000" }}>
      <Box
        sx={{
          background: "#F8F8F8",
          borderRadius: "50%",
          width: { lg: "200px", md: "200px", xs: "250px" },
          height: { lg: "200px", md: "200px", xs: "250px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          alt="category"
          style={{ width: "60%", height: "60%", objectFit: "cover" }}
          loading="lazy"
        />
      </Box>
      <Typography sx={{ textAlign: "center", mt: 2 }}>{title}</Typography>
    </Link>
  );
}

export default CategoryCard;
