import { useTheme } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Pagination, PaginationItem } from "@mui/material";

function PaginationComponent({ pageCount, getPage, page }) {
  let theme = useTheme();

  let handlePaginationChange = (event, value) => {
    getPage(value);
  };

  return (
    <Pagination
      // siblingCount={0}
      sx={{ mt: 5, width: "100%" }}
      count={pageCount}
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          sx={
            item.page === page
              ? {
                  backgroundColor: `${theme.palette.primary.main}!important`,
                  color: "white",
                } // Change the background and text color for the selected item
              : {}
          }
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
