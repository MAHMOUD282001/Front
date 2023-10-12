import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#62D0B6!important",
    color: "#fff!important",
    transition: "hover .5s!important",
    borderRadius: "4px!important",
    "&:hover": {
      backgroundColor: "#fff!important",
      color: "#62D0B6!important",
      border: "1px solid #62D0B6!important",
    },

    "&:disabled": {
      border: "none!important",
    },
  },
});

function CommonBtn({ width, height, mt, mb, text, path, loading, type }) {
  const classes = useStyles();

  let navigate = useNavigate();
  return (
    <>
      {loading ? (
        <Button
          type={type}
          sx={{ width: width, height: height, mt: mt, mb: mb }}
          className={classes.button}
          onClick={() => navigate(path)}
        >
          {text}
        </Button>
      ) : (
        <LoadingButton
          sx={{ width: width, height: height, mt: mt, mb: mb, border: "none" }}
          className={classes.button}
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          {text}
        </LoadingButton>
      )}
    </>
  );
}

export default CommonBtn;
