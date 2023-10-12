import { Box, Typography } from "@mui/material";

function CategoryCard({title, img}) {
  return (
    <Box sx={{mb: 3}}>
      <Box
        sx={{
          background: "#F8F8F8",
          borderRadius: "50%",
          width: {lg: "200px", md: "200px", xs: "250px"},
          height: {lg: "200px", md: "200px", xs: "250px"},
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={img}
          alt="category"
          style={{ width: "60%", height: "60%", objectFit: "cover" }}
          loading="lazy"
        />
      </Box>
      <Typography sx={{textAlign: "center"}}>{title}</Typography>
    </Box>
  );
}

export default CategoryCard;
