import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import CommonBtn from "../../components/Utility/CommonBtn";
import RegisterHook from "../../Logic/Auth/RegisterHook";
import { STATUS } from "../../utils/status";

export default function RegisterPage() {
  let [
    name,
    email,
    phone,
    password,
    confirmPassword,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
    newUserStatus,
  ] = RegisterHook();
  

  return (
    <Box sx={{ minHeight: "calc(100vh - 200px)", my: 5 }}>
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
          <Typography variant="h5">انشاء حساب</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="اسم المستخدم"
              name="username"
              autoComplete="username"
              autoFocus
              value={name}
              onChange={handleNameChange}
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="الايميل"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="number"
              label="رقم التليفون"
              name="number"
              type="number"
              autoComplete="number"
              value={phone}
              onChange={handlePhoneChange}
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="password"
              label="الباسورد"
              value={password}
              onChange={handlePasswordChange}
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              autoComplete="confirmPassword"
              label="تاكيد الباسورد"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
            />
            <CommonBtn
              width={"100%"}
              height={"56px"}
              mt={3}
              mb={2}
              text={"تسجيل الدخول"}
              loading={
                newUserStatus === STATUS.SUCCEEDED ||
                newUserStatus === STATUS.FAILED ||
                newUserStatus === STATUS.IDLE
              }
              type={"submit"}
            />
            <Box sx={{ textAlign: "center", color: "#62D0B6" }}>
              <Link to="/login" variant="body2" style={{ color: "#62D0B6" }}>
                {"Do you have an account? Sign In"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
