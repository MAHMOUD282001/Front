import { Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CommonBtn from "../../Utility/CommonBtn";
import ProductInfoLogic from "./ProductInfoLogic";
import { STATUS } from "../../../utils/status";

function ProductInfo({ product }) {
  let [
    category,
    brand,
    colorIndex,
    addedItemToCartStatus,
    handleColorClick,
    handleAddToCart,
  ] = ProductInfoLogic(
    product?.data?._id,
    product?.data?.category,
    product?.data?.brand,
    product
  );

  return (
    <Box>
      <Typography variant="body1" sx={{ color: "#666666" }}>
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
            onClick={() => handleColorClick(index, color)}
            sx={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "1px solid #62D0B6",
              cursor: "pointer",
              border: index === colorIndex ? "2px solid #000" : "",
            }}
          ></Box>
        ))}
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: "#666666", display: "inline" }}
        >
          الكميه المتاحه:{" "}
        </Typography>

        <Typography variant="h5" sx={{ color: "#000", display: "inline" }}>
          {product?.data?.quantity < 1 ? 0 : product?.data?.quantity}
        </Typography>
      </Box>

      <Typography variant="body2" sx={{ color: "#666666", mt: 4, mb: 3 }}>
        المواصفات
      </Typography>

      <Typography sx={{ color: "#000", fontSize: "18px" }}>
        {product?.data?.description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mt: 3,
        }}
      >
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
          {product?.data?.priceAfterDiscount ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="body1"
                sx={{ color: "#F55157", fontWeight: "600", fontSize: 20 }}
              >
                {product?.data?.priceAfterDiscount} ج.م
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#62d0b6",
                  fontWeight: "600",
                  fontSize: 16,
                  position: "relative",
                  "&::before": {
                    content: "''",
                    display: "block",
                    position: "absolute",
                    width: "1px",
                    height: "70px",
                    background: "#62d0b6",
                    transform: "rotate(85deg)",
                    top: "-20px",
                    right: "27px",
                  },
                }}
                className="price"
              >
                {product?.data?.price} ج.م
              </Typography>
            </Box>
          ) : (
            <Typography
              variant="body1"
              sx={{ color: "#F55157", fontWeight: "600", fontSize: 20 }}
            >
              {product?.data?.price} ج.م
            </Typography>
          )}
        </Box>

        <CommonBtn
          width={"200px"}
          height={"60px"}
          text={"اضف الى السلة"}
          loading={
            addedItemToCartStatus === STATUS.SUCCEEDED ||
            addedItemToCartStatus === STATUS.FAILED ||
            addedItemToCartStatus === STATUS.IDLE
          }
          handleOnClick={handleAddToCart}
        />
      </Box>
    </Box>
  );
}

export default ProductInfo;
