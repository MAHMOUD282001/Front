import { Box, Typography } from "@mui/material";
import MainTitle from "../../../Utility/MainTitle";
import uploadImg from "../../../../assets/avatar.png";
import Multiselect from "multiselect-react-dropdown";
import CommonBtn from "../../../Utility/CommonBtn";
import MainDashboardContent from "../../../Utility/MainDashboardContent";
import ImageUploading from "react-images-uploading";
import { CompactPicker } from "react-color";
import { STATUS } from "../../../../utils/status";
import AdminEditProductLogic from "./AdminEditProductLogic";
import { useParams } from "react-router-dom";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

function AdminEditProduct() {
  let { id } = useParams();
  let [
    images,
    productName,
    setProductName,
    productDesc,
    setProductDesc,
    priceBefore,
    setPriceBefore,
    priceAfter,
    setPriceAfter,
    qty,
    setQty,
    catId,
    brandId,
    options,
    selectedSubCat,
    showPicker,
    setShowPicker,
    colors,
    onImgsChange,
    categories,
    brands,
    onSelectCategory,
    onSelectBrand,
    handleChangeComplete,
    handleRemoveColor,
    onMultiSelectSelect,
    onMultiSelectRemove,
    handleProductSubmit,
    productStatus,
  ] = AdminEditProductLogic(id);

  return (
    <MainDashboardContent>
      <Container>
        <MainTitle title={` تعديل منتج ${productName ? productName : ""}`} />

        <Typography
          variant="body1"
          sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
        >
          صور المنتج
        </Typography>

        <ImageUploading
          multiple
          value={images}
          onChange={onImgsChange}
          maxNumber={4}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            dragProps,
          }) => (
            <Box
              className="upload__image-wrapper"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { md: "flex-start", xs: "center" },
                gap: 2,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: "column-reverse",
                  my: 3,
                }}
                onClick={onImageUpload}
                {...dragProps}
              >
                <img
                  src={uploadImg}
                  alt="Upload Img"
                  style={{ maxWidth: 200, height: 200 }}
                />

                {images?.length > 0 ? (
                  <Box
                    sx={{ width: "150px", height: "56px", mb: 3 }}
                    onClick={onImageRemoveAll}
                  >
                    <CommonBtn
                      width={"100%"}
                      height={"100%"}
                      text={"حذف جميع الصور"}
                      loading={"false"}
                    />
                  </Box>
                ) : (
                  ""
                )}
              </Box>
              &nbsp;
              {imageList?.map((image, index) => (
                <Box key={index} className="image-item" sx={{ mt: 3 }}>
                  <img
                    src={
                      image.hasOwnProperty("file") ? image["data_url"] : image
                    }
                    alt=""
                    width="100"
                  />
                  <Box
                    className="image-item__btn-wrapper"
                    sx={{ display: "flex", gap: 2 }}
                  >
                    <Box
                      sx={{ width: "80px", height: "56px" }}
                      onClick={() => onImageUpdate(index)}
                    >
                      <CommonBtn
                        width={"100%"}
                        height={"100%"}
                        text={"تعديل"}
                        loading={"false"}
                      />
                    </Box>

                    <Box
                      sx={{ width: "80px", height: "56px" }}
                      onClick={() => onImageRemove(index)}
                    >
                      <CommonBtn
                        width={"100%"}
                        height={"100%"}
                        text={"حذف"}
                        loading={"false"}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </ImageUploading>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <TextField
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{
              shrink: "true",
              style: {
                color: "#62D0B6",
              },
            }}
            label="اسم المنتج"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <TextField
            fullWidth
            required
            InputLabelProps={{
              shrink: "true",
              style: {
                color: "#62D0B6",
              },
            }}
            variant="outlined"
            label="وصف المنتج"
            value={productDesc}
            onChange={(e) => setProductDesc(e.target.value)}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <TextField
            variant="outlined"
            fullWidth
            required
            type="number"
            InputLabelProps={{
              shrink: "true",
              style: {
                color: "#62D0B6",
              },
            }}
            label="السعر قبل الخصم"
            value={priceBefore}
            onChange={(e) => setPriceBefore(e.target.value)}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            required
            InputLabelProps={{
              shrink: "true",
              style: {
                color: "#62D0B6",
              },
            }}
            label="سعر المنتج"
            value={priceAfter}
            onChange={(e) => setPriceAfter(e.target.value)}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            required
            InputLabelProps={{
              shrink: "true",
              style: {
                color: "#62D0B6",
              },
            }}
            label="الكميه المتاحه"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </Box>

        <Box
          sx={{ width: { xs: "100%", sm: "70%" }, mb: 5 }}
          className="select-input"
        >
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "#62D0B6", top: "-7px", right: "15px" }}
            >
              التصنيف الرئيسى
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categories?.data?.length > 0 ? catId : ""}
              label="التصنيف الرئيسى"
              variant="outlined"
              onChange={onSelectCategory}
            >
              {categories?.data?.length > 0
                ? categories?.data?.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name}
                    </MenuItem>
                  ))
                : ""}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <Multiselect
            onRemove={onMultiSelectRemove}
            onSelect={onMultiSelectSelect}
            selectedValues={selectedSubCat}
            options={options}
            placeholder="تصنيف فرعى"
            displayValue="name"
          />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              id="demo-simple-select-helper-label"
              style={{ color: "#62D0B6", top: "-7px", right: "15px" }}
            >
              الماركه
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="الماركه"
              variant="outlined"
              value={brands?.data?.length > 0 ? brandId : ""}
              onChange={onSelectBrand}
            >
              {brands?.data?.length > 0
                ? brands?.data?.map((brand) => (
                    <MenuItem key={brand._id} value={brand._id}>
                      {brand.name}
                    </MenuItem>
                  ))
                : ""}
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 2,
            textAlign: { xs: "center", sm: "right" },
          }}
        >
          {colors?.map((color, index) => (
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
              onClick={() => handleRemoveColor(color)}
            ></Box>
          ))}

          <Box
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              width: "30px",
              height: "30px",
              lineHeight: 0,
              borderRadius: "50%",
              border: "1px solid #62D0B6",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setShowPicker(!showPicker)}
          >
            {showPicker ? "x" : "+"}
          </Box>
        </Box>

        <Box sx={{ my: 3 }}>
          {showPicker ? (
            <CompactPicker onChangeComplete={handleChangeComplete} />
          ) : (
            ""
          )}
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "70%" },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CommonBtn
            width={"150px"}
            height={"56px"}
            text={"حفظ"}
            loading={
              productStatus === STATUS.SUCCEEDED ||
              productStatus === STATUS.FAILED ||
              productStatus === STATUS.IDLE
            }
            handleOnClick={handleProductSubmit}
          />
        </Box>
      </Container>
    </MainDashboardContent>
  );
}

export default AdminEditProduct;
