import { Delete, Edit, Star } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteRateLogic from "./DeleteRateLogic";
import { Modal } from "@material-ui/core";
import EditRateLogic from "./EditRateLogic";
import ReactStars from "react-rating-stars-component";
import CommonBtn from "../../Utility/CommonBtn";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 500, xs: 300 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

function RateItem({ review }) {
  let user = JSON.parse(localStorage.getItem("user"));

  let [handleRemoveReview] = DeleteRateLogic();

  let [
    open,
    rateText,
    rateValue,
    handleClose,
    handleRateTextChange,
    handleRateValueChange,
    handleOpenReview,
    handleSubmit,
  ] = EditRateLogic(review);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 2,
            py: 2,
            pr: { sm: 6, xs: 0 },
          }}
        >
          <Typography
            sx={{ textAlign: { xs: "center", sm: "right", fontSize: "18px" } }}
          >
            {review?.user?.name}
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
            {review?.rating} <Star />
          </Typography>
        </Box>

        {user?._id === review?.user?._id ? (
          <Box>
            <IconButton onClick={() => handleOpenReview()}>
              <Edit
                sx={{
                  width: 20,
                  height: 20,
                  color: "#666666",
                }}
              />
            </IconButton>

            <IconButton onClick={() => handleRemoveReview(review?._id)}>
              <Delete
                sx={{
                  width: 20,
                  height: 20,
                  color: "#666666",
                }}
              />
            </IconButton>
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Typography
        sx={{ pb: 2, borderBottom: "1px solid #62D0B6", pr: { sm: 6, xs: 0 } }}
      >
        {review?.review}
      </Typography>

      {/* Modal To Update Review */}

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            تعديل تقييم
          </Typography>
          <Box sx={{ direction: "ltr" }} className="modal-stars">
            <ReactStars
              count={5}
              onChange={handleRateValueChange}
              value={rateValue}
              size={30}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </Box>

          <textarea
            style={{
              width: "100%",
              height: "120px",
              borderRadius: "4px",
              borderColor: "#62D0B6",
              outline: "none",
              padding: "16.5px 14px",
              fontSize: "1rem",
              resize: "none",
              marginTop: 20,
            }}
            placeholder="وصف المنتج"
            value={rateText}
            onChange={handleRateTextChange}
          ></textarea>

          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 3 }}
            onClick={handleSubmit}
          >
            <CommonBtn
              width={"200px"}
              height={"60px"}
              text={"تاكيد"}
              loading={true}
              // type={"submit"}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default RateItem;
