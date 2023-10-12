import { Box, Container, Grid, Paper, Typography } from "@mui/material";
function Service({ index, icon, heading, body }) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{ lineHeight: 0 }}>{icon}</Box>

        <Box>
          <Typography sx={{color: "#333333"}} variant="h6">{heading}</Typography>
          <Typography sx={{ color: "#666666", mt: 1, fontSize: 14 }}>
            {body}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default Service;
