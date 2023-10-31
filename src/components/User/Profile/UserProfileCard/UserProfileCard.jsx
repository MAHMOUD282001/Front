import { TextField } from "@material-ui/core";
import { Edit } from "@mui/icons-material";
import { Box, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import UserEditProfileCardLogic from "./UserEditProfileCardLogic";
import CommonBtn from "../../../Utility/CommonBtn";
import { STATUS } from "../../../../utils/status";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 500, xs: 300 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

function UserProfileCard() {
  let user = JSON.parse(localStorage.getItem("user"));

  let [
    theme,
    open,
    name,
    email,
    phone,
    userStatus,
    userError,
    handleOpen,
    handleClose,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleSubmit,
  ] = UserEditProfileCardLogic(user);

  return (
    <Grid container sx={{ width: { xs: "100%", md: "70%" }, mb: 3 }}>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "space-between" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              gap: { xs: 3, sm: 0 },
            }}
          >
            <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
              <Typography
                sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
              >
                الاسم:{" "}
              </Typography>
              <Typography
                sx={{ color: "#000", display: "inline", fontSize: "18px" }}
              >
                {user?.name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              >
                <Edit sx={{ fontSize: "16px" }} />
                <Typography variant="body2" sx={{ color: "#666666" }}>
                  تعديل
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 3, textAlign: { xs: "center", sm: "right" } }}>
            <Typography
              sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
            >
              الايميل:{" "}
            </Typography>
            <Typography
              sx={{ color: "#000", display: "inline", fontSize: "18px" }}
            >
              {user?.email}
            </Typography>
          </Box>

          <Box sx={{ mt: 3, textAlign: { xs: "center", sm: "right" } }}>
            <Typography
              sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
            >
              رقم الهاتف:{" "}
            </Typography>
            <Typography
              sx={{ color: "#000", display: "inline", fontSize: "18px" }}
            >
              {user?.phone}
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Modal To Update Address */}

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            تعديل عنوان
          </Typography>
          <Box sx={{ mb: 3 }}>
            <TextField
              margin="none"
              fullWidth
              required
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
              label="اسم المستخدم"
              onChange={handleNameChange}
              value={name}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              margin="none"
              fullWidth
              required
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
              label="الايميل"
              value={email}
              onChange={handleEmailChange}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              margin="none"
              fullWidth
              required
              type="number"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: "#62D0B6",
                },
              }}
              label="رقم الهاتف"
              onChange={handlePhoneChange}
              value={phone}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <CommonBtn
              width={"200px"}
              height={"60px"}
              text={"تاكيد"}
              loading={
                userStatus === STATUS.SUCCEEDED ||
                userStatus === STATUS.FAILED ||
                userStatus === STATUS.IDLE
              }
              handleOnClick={handleSubmit}
            />
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}

export default UserProfileCard;
