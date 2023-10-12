import { Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CommonBtn from "../Utility/CommonBtn";
import ProductInfoHook from "../../Logic/Product/ProductInfoHook";

function ProductInfo({ product }) {
  let [category, brand] = ProductInfoHook(
    product?.data?.category,
    product?.data?.brand
  );
  
  return (
    <Box>
      <Typography variant="body2" sx={{ color: "#666666" }}>
        {category?.data?.name || ""}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          flexWrap: "wrap",
          gap: { xs: 3, sm: 0 },
          mt: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: { xs: "center", sm: "right" } }}
        >
          {product?.data?.title}
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
          {product?.data?.ratingsAverage} <Star />
        </Typography>
      </Box>

      {brand ? (
        <Box sx={{ mt: 2, textAlign: { xs: "center", sm: "right" } }}>
          <Typography
            variant="body2"
            sx={{ color: "#666666", display: "inline" }}
          >
            الماركة:{" "}
          </Typography>

          <Typography variant="h5" sx={{ color: "#000", display: "inline" }}>
            {brand?.data?.name}
          </Typography>
        </Box>
      ) : (
        ""
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 2,
          textAlign: { xs: "center", sm: "right" },
        }}
      >
        {product?.data?.availableColors?.map((color, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "1px solid #62D0B6",
              cursor: "pointer",
            }}
          ></Box>
        ))}
      </Box>

      <Typography variant="body2" sx={{ color: "#666666", mt: 5, mb: 3 }}>
        المواصفات
      </Typography>

      <Typography sx={{ color: "#000", fontSize: "18px" }}>
        {product?.data?.description}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
        <Box
          sx={{
            border: "1px solid #62D0B6",
            textAlign: "center",
            padding: "14px",
            borderRadius: "5px",
            width: "200px",
            height: "60px",
          }}
        >
          34000 جنيه
        </Box>

        <CommonBtn
          width={"200px"}
          height={"60px"}
          text={"اضف الى السلة"}
          loading={true}
          // type={"submit"}
        />
      </Box>
    </Box>
  );
}

export default ProductInfo;
