import { Box, Button, Container, TextField, useTheme } from "@mui/material";
import MainTitle from "../../Utility/MainTitle";
import CommonBtn from "../../Utility/CommonBtn";
import MainDashboardContent from "../../Utility/MainDashboardContent";


function UserAddAddress() {
  let theme = useTheme();

  
  return (
    <MainDashboardContent>
      <Container>
      <MainTitle title={"اضف عنوان جديد"} />
        
        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <TextField
            fullWidth
            required
            InputLabelProps={{
              style: {
                color: theme.palette.primary.main,
              },
            }}
            label="تسميه العنوان"
          />
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <textarea
            style={{
              width: "100%",
              height: "120px",
              borderRadius: "4px",
              borderColor: theme.palette.primary.main,
              outline: "none",
              padding: "16.5px 14px",
              fontSize: "1rem",
              resize: "none",
            }}
            placeholder="العنوان بالتفصيل"
          ></textarea>
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "70%" }, mb: 3 }}>
          <TextField
            fullWidth
            type="number"
            required
            InputLabelProps={{
              style: {
                color: theme.palette.primary.main,
              },
            }}
            label="رقم الهاتف"
          />
        </Box>
        
        <Box
          sx={{
            width: { xs: "100%", sm: "70%" },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CommonBtn width={"150px"} height={"56px"} text={"اضافه"}/>
        </Box>
      </Container>
    </MainDashboardContent>
  );
}

export default UserAddAddress;
