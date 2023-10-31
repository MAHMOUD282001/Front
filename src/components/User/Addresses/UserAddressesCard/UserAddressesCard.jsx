import React from "react";
import { Box, Grid, Modal, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import UserDeleteAddressLogic from "./UserDeleteAddressLogic";
import UserUpdateAddressLogic from "./UserUpdateAddressLogic";
import CommonBtn from "../../../Utility/CommonBtn";
import { TextField } from "@material-ui/core";

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

function UserAddressesCard({ address }) {
  let [handleDeleteAddress] = UserDeleteAddressLogic();

  let [
    theme,
    open,
    addressName,
    location,
    phone,
    addressStatus,
    handleClose,
    handleOpen,
    handleAddressNameChange,
    handlePhoneChange,
    handleLocationChange,
    handleSubmit,
  ] = UserUpdateAddressLogic(address);

  return (
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
            <Typography variant="h6" sx={{ color: "#000", display: "inline" }}>
              {address?.alias}
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

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
              onClick={() => handleDeleteAddress(address?._id)}
            >
              <Delete sx={{ fontSize: "16px" }} />
              <Typography variant="body2" sx={{ color: "#666666" }}>
                ازالة
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 3, textAlign: { xs: "center", sm: "right" } }}>
          <Typography
            sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
          >
            العنوان:{" "}
          </Typography>
          <Typography
            sx={{ color: "#000", display: "inline", fontSize: "18px" }}
          >
            {address?.details}
          </Typography>
        </Box>

        <Box sx={{ mt: 2, textAlign: { xs: "center", sm: "right" } }}>
          <Typography
            sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
          >
            رقم الهاتف:{" "}
          </Typography>
          <Typography
            sx={{ color: "#000", display: "inline", fontSize: "18px" }}
          >
            {address?.phone}
          </Typography>
        </Box>
      </Box>

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
              label="اسم العنوان"
              onChange={handleAddressNameChange}
              value={addressName}
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
              label="العنوان بالتفصيل "
              value={location}
              onChange={handleLocationChange}
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
          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 3 }}
            onClick={handleSubmit}
          >
            <CommonBtn
              width={"200px"}
              height={"60px"}
              text={"تاكيد"}
              loading={true}
            />
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}

export default UserAddressesCard;
