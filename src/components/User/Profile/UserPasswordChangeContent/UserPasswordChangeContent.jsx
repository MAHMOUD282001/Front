import { Box } from "@mui/material";
import MainTitle from "../../../Utility/MainTitle";
import CommonBtn from "../../../Utility/CommonBtn";
import { TextField, useTheme } from "@material-ui/core";
import UserPasswordChangeLogic from "./UserPasswordChangeLogic";
import { STATUS } from "../../../../utils/status";

function UserPasswordChangeContent() {
  let theme = useTheme();

  let [
    oldPassword,
    newPassword,
    confirmPassword,
    updatedPasswordStatus,
    handleOldPasswordChange,
    handleNewPasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  ] = UserPasswordChangeLogic();

  return (
    <>
      <MainTitle title={"تغيير كلمه السر"} />

      <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
        <TextField
          fullWidth
          required
          variant="outlined"
          type="password"
          name="old"
          id="old"
          InputLabelProps={{
            style: {
              color: theme.palette.primary.main,
            },
          }}
          label="كلمه المرور القديمه"
          value={oldPassword}
          onChange={handleOldPasswordChange}
          autoComplete="off"
        />
      </Box>

      <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
        <TextField
          fullWidth
          required
          variant="outlined"
          type="password"
          name="new password"
          id="new"
          InputLabelProps={{
            style: {
              color: theme.palette.primary.main,
            },
          }}
          label="كلمه المرور الحديثه"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </Box>

      <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
        <TextField
          fullWidth
          required
          variant="outlined"
          type="password"
          name="confirm new password"
          id="confirm"
          InputLabelProps={{
            style: {
              color: theme.palette.primary.main,
            },
          }}
          label="تاكيد كلمه المرور "
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "70%" },
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CommonBtn
          width={"150px"}
          height={"56px"}
          text={"تغيير"}
          loading={
            updatedPasswordStatus === STATUS.SUCCEEDED ||
            updatedPasswordStatus === STATUS.FAILED ||
            updatedPasswordStatus === STATUS.IDLE
          }
          handleOnClick={handleSubmit}
        />
      </Box>
    </>
  );
}

export default UserPasswordChangeContent;
