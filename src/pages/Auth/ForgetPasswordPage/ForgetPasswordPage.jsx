import React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import CommonBtn from "../../../components/Utility/CommonBtn";
import { STATUS } from "../../../utils/status";
import ForgetPasswordPageLogic from "./ForgetPasswordPageLogic";
import { Container } from "@material-ui/core";

function ForgetPasswordPage() {
  let [email, handleEmailChange, handleSubmit, forgetPasswordStatus] =
    ForgetPasswordPageLogic();

  return (
    <Box sx={{ minHeight: "calc(100vh - 200px)" }}>
      <Container maxWidth={"xs"}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, background: "#62D0B6" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">هل نسيت كلمه السر</Typography>
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
              label="الايميل"
            />

            <CommonBtn
              width={"100%"}
              height={"56px"}
              mt={3}
              mb={2}
              text={"تاكيد"}
              loading={
                forgetPasswordStatus === STATUS.SUCCEEDED ||
                forgetPasswordStatus === STATUS.FAILED ||
                forgetPasswordStatus === STATUS.IDLE
              }
              type={"submit"}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ForgetPasswordPage;
