import React from "react";
import { useContext } from "react";
import { sidebarContext } from "../../context/SidebarContext";
import { styled } from "@mui/material/styles";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

function MainDashboardContent({ children }) {
  const { open } = useContext(sidebarContext);

  return (
    <Main open={open} style={{ flexGrow: 1, padding: 0 }} >
      {children}
    </Main>
  );
}

export default MainDashboardContent;
