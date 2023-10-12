import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Pagination, PaginationItem } from "@mui/material";

function PaginationComponent({ pageCount, getPage, page }) {
  let handlePaginationChange = (event, value) => {
    getPage(value);
  };

  return (
    <Pagination
      // siblingCount={0}
      sx={{ mt: 5 }}
      count={pageCount}
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowForwardIos, next: ArrowBackIos }}
          {...item}
        />
      )}
      onChange={handlePaginationChange}
      page={page}
    />
  );
}

export default PaginationComponent;
