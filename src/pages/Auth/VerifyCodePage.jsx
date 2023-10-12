import React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CommonBtn from "../../components/Utility/CommonBtn";
import { STATUS } from "../../utils/status";
import ForgetPasswordHook from "../../Logic/Auth/ForgetPasswordHook";
import VerifyCodeHook from "../../Logic/Auth/VerifyCodeHook";

function VerifyCodePage() {
  let [code, handleCodeChange, handleSubmit, codeStatus] = VerifyCodeHook();

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
          <Typography variant="h5">ادخل الكود</Typography>
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
              id="code"
              name="code"
              autoComplete="email"
              autoFocus
              value={code}
              onChange={handleCodeChange}
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
              label="الكود"
            />

            <CommonBtn
              width={"100%"}
              height={"56px"}
              mt={3}
              mb={2}
              text={"تاكيد"}
              loading={
                codeStatus === STATUS.SUCCEEDED ||
                codeStatus === STATUS.FAILED ||
                codeStatus === STATUS.IDLE
              }
              type={"submit"}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default VerifyCodePage;
