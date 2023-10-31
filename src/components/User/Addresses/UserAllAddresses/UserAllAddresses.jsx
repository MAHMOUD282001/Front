import React from "react";
import { Box, Typography } from "@mui/material";
import MainTitle from "../../../Utility/MainTitle";
import UserAddressesCard from "../UserAddressesCard/UserAddressesCard";
import CommonBtn from "../../../Utility/CommonBtn";
import MainDashboardContent from "../../../Utility/MainDashboardContent";
import UserAllAddressesLogic from "./UserAllAddressesLogic";
import { STATUS } from "../../../../utils/status";
import Loader from "../../../Utility/Loader";
import { Container, Grid } from "@material-ui/core";

function UserAllAddresses() {
  let [allAddresses, allAddressesStatus, allAddressesError] =
    UserAllAddressesLogic();

  return (
    <MainDashboardContent>
      <Container maxWidth={"lg"}>
        <MainTitle title={"العناوين"} />

        <Box sx={{ width: { xs: "100%", md: "70%" }, mb: 3 }}>
          <Grid container spacing={2}>
            {allAddressesStatus === STATUS.LOADING ? (
              <Loader />
            ) : allAddressesStatus === STATUS.FAILED ? (
              <Box
                sx={{
                  width: "100%",
                  padding: "2rem",
                  background: "#F8F8F8",
                  textAlign: "center",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="h5">
                  {allAddressesError?.errors
                    ? allAddressesError?.errors?.map((err) => err.msg)
                    : allAddressesError?.message
                    ? allAddressesError?.message
                    : ""}
                </Typography>
              </Box>
            ) : allAddresses?.data?.length > 0 ? (
              allAddresses?.data?.map((address) => (
                <UserAddressesCard key={address._id} address={address} />
              ))
            ) : (
              <Box
                sx={{
                  width: "100%",
                  padding: "2rem",
                  background: "#F8F8F8",
                  textAlign: "center",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="h5">لا يوجد عناوين</Typography>
              </Box>
            )}

            <Box
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CommonBtn
                width={"150px"}
                height={"56px"}
                text={"اضافه عنوان جديد"}
                path={"/user/addAddress"}
                loading={true}
              />
            </Box>
          </Grid>
        </Box>
      </Container>
    </MainDashboardContent>
  );
}

export default UserAllAddresses;
