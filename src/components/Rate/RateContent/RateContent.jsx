import { Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import RateItem from "../RateItem/RateItem";
import RatePost from "../RatePost/RatePost";
import PaginationComponent from "../../Utility/PaginationComponent";
import { useParams } from "react-router-dom";
import RateContentLogic from "./RateContentLogic";
import { STATUS } from "../../../utils/status";
import Loader from "../../Utility/Loader";

function RateContent({ ratingAvg, ratingQty }) {
  let { id } = useParams();

  let [theme, allReviews, allReviewsStatus, allReviewsError, page, getPage] =
    RateContentLogic(id);

  return (
    <Box
      sx={{
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "5px",
        p: 2,
        mb: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: { xs: "center", sm: "right" } }}
        >
          التقييمات
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
          {ratingAvg} <Star />
        </Typography>

        <Typography sx={{ color: theme.palette.primary.main }}>
          ({ratingQty} تقييم)
        </Typography>
      </Box>

      <RatePost />

      {allReviewsStatus === STATUS.LOADING ? (
        <Loader />
      ) : allReviewsStatus === STATUS.FAILED ? (
        <Box
          sx={{
            width: "100%",
            padding: "2rem",
            background: "#F8F8F8",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h5">{allReviewsError}</Typography>
        </Box>
      ) : allReviews?.data?.length > 0 ? (
        allReviews?.data?.map((review) => (
          <RateItem key={review._id} review={review} />
        ))
      ) : (
        <Box
          sx={{
            width: "100%",
            padding: "2rem",
            background: "#F8F8F8",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h5">لا يوجد تقييمات</Typography>
        </Box>
      )}

      {allReviews?.paginationResult?.numberOfPages > 1 ? (
        <PaginationComponent
          pageCount={allReviews?.paginationResult?.numberOfPages}
          getPage={getPage}
          page={page}
        />
      ) : (
        ""
      )}
    </Box>
  );
}

export default RateContent;
