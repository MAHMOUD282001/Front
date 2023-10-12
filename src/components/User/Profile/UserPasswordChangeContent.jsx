import { Box, Button, TextField, useTheme } from "@mui/material";
import React from "react";
import MainTitle from "../../Utility/MainTitle";
import CommonBtn from "../../Utility/CommonBtn";


function UserPasswordChangeContent() {
  let theme = useTheme();

  
  return (
    <>
      <MainTitle title={"تغيير كلمه السر"} />

      <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
        <TextField
          fullWidth
          required
          InputLabelProps={{
            style: {
              color: theme.palette.primary.main,
            },
          }}
          label="كلمه المرور القديمه"
        />
      </Box>

      <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
        <TextField
          fullWidth
          required
          InputLabelProps={{
            style: {
              color: theme.palette.primary.main,
            },
          }}
          label="كلمه المرور الحديثه"
        />
      </Box>
      
      <Box
          sx={{
            width: { xs: "100%", sm: "70%" },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CommonBtn width={"150px"} height={"56px"} text={"تغيير"}/>
        </Box>
    </>
  );
}

export default UserPasswordChangeContent;
