import { Box } from "@mui/material";
import MainTitle from "../../../Utility/MainTitle";
import CommonBtn from "../../../Utility/CommonBtn";
import MainDashboardContent from "../../../Utility/MainDashboardContent";
import UserAddAddressLogic from "./UserAddAddressLogic";
import { STATUS } from "../../../../utils/status";
import { Container, TextField } from "@material-ui/core";

function UserAddAddress() {
  let [
    theme,
    addressName,
    location,
    phone,
    addressStatus,
    handleAddressNameChange,
    handlePhoneChange,
    handleLocationChange,
    handleAddressSubmit,
  ] = UserAddAddressLogic();

  return (
    <MainDashboardContent>
      <Container maxWidth={"lg"}>
        <MainTitle title={"اضف عنوان جديد"} />

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <TextField
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{
              style: {
                color: theme.palette.primary.main,
              },
            }}
            label="تسميه العنوان"
            value={addressName}
            onChange={handleAddressNameChange}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <TextField
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{
              style: {
                color: theme.palette.primary.main,
              },
            }}
            label="العنوان بالتفصيل"
            value={location}
            onChange={handleLocationChange}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <TextField
            fullWidth
            type="number"
            required
            variant="outlined"
            InputLabelProps={{
              style: {
                color: theme.palette.primary.main,
              },
            }}
            label="رقم الهاتف"
            value={phone}
            onChange={handlePhoneChange}
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
            text={"اضافه"}
            loading={
              addressStatus === STATUS.SUCCEEDED ||
              addressStatus === STATUS.FAILED ||
              addressStatus === STATUS.IDLE
            }
            handleOnClick={handleAddressSubmit}
          />
        </Box>
      </Container>
    </MainDashboardContent>
  );
}

export default UserAddAddress;
