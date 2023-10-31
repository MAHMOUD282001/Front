import { Sort } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, {useState } from "react";
import UnopDropdown from "unop-react-dropdown";

function FilterTitle({ title, handleSort }) {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  
  
  let filterBy = (key)=>{
    localStorage.setItem("sortKey", key)
    handleSort()
  }


  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        mt: 5,
        mb: 2
      }}
    >
      <Box>
        <Typography
          variant="h5"
          style={{ color: "#333333", fontWeight: "600" }}
        >
          {title}
        </Typography>
      </Box>

      <Box>
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <Typography
              sx={{
                mx: 1,
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "#666666",
              }}
              
              className="dropdown-title"
            >
              <Sort />
              ترتيب حسب
            </Typography>
          }
          delay={0}
          align="CENTER"
          closeOnClickOut
          click
        >
          <Box onClick={()=>filterBy("")}>بدون ترتيب</Box>
          <Box onClick={()=>filterBy("الاكثر مبيعا")}>الاكثر مبيعا</Box>
          <Box onClick={()=>filterBy("الاعلى تقييما")}>الاعلى تقييما</Box>
          <Box onClick={()=>filterBy("السعر من الاقل الى الاعلى")}>السعر من الاقل الى الاعلى</Box>
          <Box onClick={()=>filterBy("السعر من الاعلى الى الاقل")}>السعر من الاعلى الى الاقل</Box>
        </UnopDropdown>
      </Box>
    </Stack>
  );
}

export default FilterTitle;
