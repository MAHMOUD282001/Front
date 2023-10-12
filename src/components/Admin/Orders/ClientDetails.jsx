import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CommonBtn from "../../Utility/CommonBtn";


function ClientDetails() {
  const [orderState, setOrderState] = useState("");

  const handleChange = (event) => {
    setOrderState(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "10px",
        padding: "20px",
        mt: 5,
      }}
    >
      <h4>تفاصيل العميل</h4>

      <Box sx={{ mt: 1, textAlign: { xs: "center", sm: "right" } }}>
        <Typography
          variant="body1"
          sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
        >
          الاسم:{" "}
        </Typography>
        <Typography sx={{ color: "#000", display: "inline", fontSize: "18px" }}>
          احمد محمد
        </Typography>
      </Box>

      <Box sx={{ mt: 1, textAlign: { xs: "center", sm: "right" } }}>
        <Typography
          sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
        >
          رقم الهاتف:{" "}
        </Typography>
        <Typography sx={{ color: "#000", display: "inline", fontSize: "18px" }}>
          01068528416
        </Typography>
      </Box>

      <Box sx={{ mt: 1, textAlign: { xs: "center", sm: "right" } }}>
        <Typography
          variant="body1"
          sx={{ color: "#666666", display: "inline", fontSize: "18px" }}
        >
          الايميل:{" "}
        </Typography>
        <Typography sx={{ color: "#000", display: "inline", fontSize: "18px" }}>
          ex@ex.com
        </Typography>
      </Box>

      <Box
        sx={{
          my: 3,
          border: "1px solid #62D0B6",
          textAlign: "center",
          padding: "14px",
          borderRadius: "5px",
        }}
      >
        34000 جنيه
      </Box>

      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: 2, flexWrap: "wrap"}}>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">
            حاله الطلب
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={orderState}
            label="حاله الطلب"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        
        <CommonBtn width={"100px"} height={"56px"} text={"حفظ"}/>
      </Box>
    </Box>
  );
}

export default ClientDetails;
