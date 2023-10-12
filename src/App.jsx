import "./App.css";
import { Outlet } from "react-router-dom";
import NavbarLogin from "./components/Utility/NavbarLogin";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Footer from "./components/Utility/Footer";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1400,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: "#62D0B6", // Replace with your desired color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "relative" }}>
        <NavbarLogin />
        <Outlet />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
