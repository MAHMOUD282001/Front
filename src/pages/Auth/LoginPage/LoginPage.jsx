import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@material-ui/core/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CommonBtn from "../../../components/Utility/CommonBtn";
import LoginPageLogic from "./LoginPageLogic";
import { STATUS } from "../../../utils/status";
import { Container } from "@material-ui/core";

export default function LoginPage() {
  let [
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    logedUserStatus,
  ] = LoginPageLogic();

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
          <Typography variant="h5">تسجيل الدخول</Typography>
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
              label="الايميل"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
              label="الباسورد"
            />

            <CommonBtn
              width={"100%"}
              height={"56px"}
              mt={3}
              mb={2}
              text={"تسجيل الدخول"}
              loading={
                logedUserStatus === STATUS.SUCCEEDED ||
                logedUserStatus === STATUS.FAILED ||
                logedUserStatus === STATUS.IDLE
              }
              type={"submit"}
            />
            <Box sx={{ textAlign: "center", color: "#62D0B6" }}>
              <Link to="/register" variant="body2" style={{ color: "#62D0B6" }}>
                {"لا تمتلك حساب ؟ انشئ حساب"}
              </Link>
            </Box>

            <Box sx={{ textAlign: "center", color: "#62D0B6", mt: 3 }}>
              <Link
                to="/forgetPassword"
                variant="body2"
                style={{ color: "#62D0B6" }}
              >
                {"هل نسيت كلمه السر؟"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
