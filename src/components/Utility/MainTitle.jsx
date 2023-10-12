import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

function MainTitle({ title, desc, btnText, path }) {
  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        mt: 5,
        mb: 3
      }}
    >
      <Box>
        <Typography
          variant="h5"
          style={{ color: "#333333", fontWeight: "600" }}
        >
          {title}
        </Typography>
        <Typography style={{ color: "#666666", marginTop: 5, fontSize: 14 }}>
          {desc}
        </Typography>
      </Box>

      {btnText ? (
        <Box>
          <button className="show-all">
            <Link to={path} style={{color: "inherit"}}>
              {btnText} <ArrowBackIosIcon sx={{ fontSize: 12 }} />
            </Link>
          </button>
        </Box>
      ) : (
        ""
      )}
    </Stack>
  );
}

export default MainTitle;
