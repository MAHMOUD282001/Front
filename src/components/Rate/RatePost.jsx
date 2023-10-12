import { makeStyles } from "@material-ui/core";
import { Box, Button, Typography } from "@mui/material";
import ReactStars from "react-rating-stars-component";
import CommonBtn from "../Utility/CommonBtn";
import AddRateHook from "../../Logic/Rate/AddRateHook";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";

function RatePost() {
  let { id } = useParams();

  let [
    rateText,
    rateValue,
    user,
    handleRateTextChange,
    handleRateValeChange,
    reviewStatus,
    handleSubmit,
  ] = AddRateHook(id);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 2,
          pt: 3,
          pr: { sm: 6, xs: 0 },
        }}
      >
        <Typography
          sx={{ textAlign: { xs: "center", sm: "right", fontSize: "18px" } }}
        >
          {user?.name}
        </Typography>

        <Box sx={{ direction: "ltr" }}>
          <ReactStars
            count={5}
            onChange={handleRateValeChange}
            value={rateValue}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </Box>
      </Box>

      <Box
        sx={{
          pr: { sm: 6, xs: 0 },
          mt: 3,
          borderBottom: "1px solid #62D0B6",
          pb: 2,
        }}
      >
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
          }}
          placeholder="وصف المنتج"
          value={rateText}
          onChange={handleRateTextChange}
        ></textarea>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={handleSubmit}
        >
          <CommonBtn
            width={"150px"}
            height={"56px"}
            text={"اضافه"}
            loading={
              reviewStatus === STATUS.SUCCEEDED ||
              reviewStatus === STATUS.FAILED ||
              reviewStatus === STATUS.IDLE
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

export default RatePost;
