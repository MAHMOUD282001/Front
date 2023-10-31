import { Box, Menu, MenuItem, Stack, Typography } from "@mui/material";
import logo from "../../../assets/Logo-2.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarLogic from "./NavbarLogic";
import { Container } from "@material-ui/core";
import CartLogic from "../../../pages/Cart/CartLogic";

function Navbar() {
  let [
    theme,
    user,
    open,
    handleDrawerOpen,
    location,
    searchedWord,
    handleChangeSearchedWord,
    anchorElUser,
    handleOpenUserMenu,
    handleProfilePage,
    handleLogout,
    handleCloseUserMenu,
  ] = NavbarLogic();

  let [cartItemsNum, , , , totalCartPrice, , ,] = CartLogic();
  
  
  return (
    <Box
      sx={{
        background: "#fff",
        height: 100,
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 999,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              lineHeight: 0,
              display: "flex",
              alignItems: "center",
              gap: { md: 2, xs: 1 },
            }}
          >
            {location.pathname.slice(1, 6) === "admin" ||
            location.pathname.slice(1, 5) === "user" ? (
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ ...(open && { display: "none" }) }}
              >
                <MenuIcon
                  sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
                />
              </IconButton>
            ) : (
              ""
            )}

            <Box
              sx={{
                width: { md: 100, xs: 80 },
                height: { md: 50, xs: 40 },
              }}
            >
              <Link to={"/"}>
                <img src={logo} alt="img" />
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              lineHeight: 0,
              display: { md: "flex", xs: "none" },
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #eeeeee",
              width: "50%",
              height: 40,
              p: 1,
            }}
          >
            <input
              style={{
                border: "none",
                outline: "none",
                color: theme.palette.primary.main,
                width: "100%",
              }}
              placeholder="ابحث عما تريد"
              type="search"
              autoComplete="off"
              value={searchedWord}
              onChange={handleChangeSearchedWord}
            />

            <SearchOutlinedIcon
              sx={{ fontSize: 20, color: theme.palette.primary.main }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xl: 5, md: 2, xs: 0 },
            }}
          >
            {user?.name ? (
              <Box sx={{ flexGrow: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                  }}
                  onClick={handleOpenUserMenu}
                >
                  <IconButton sx={{ p: 0 }}>
                    <Box
                      sx={{
                        lineHeight: 0,
                        width: { md: 40, xs: 30 },
                        height: { md: 40, xs: 30 },
                        background: "#F8F8F8",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PersonOutlinedIcon
                        sx={{
                          width: { md: 30, xs: 20 },
                          height: { md: 30, xs: 20 },
                          color: "#666666",
                        }}
                      />
                    </Box>
                  </IconButton>

                  <Box sx={{ display: { md: "block", xs: "none" } }}>
                    <Typography
                      sx={{ fontSize: 16, color: "#333333", fontWeight: "600" }}
                    >
                      {user?.name}
                    </Typography>
                  </Box>
                </Box>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {user?.role === "admin" ? (
                    <MenuItem onClick={() => handleProfilePage("admin")}>
                      <Typography textAlign="center">لوحة التحكم</Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem onClick={() => handleProfilePage("user")}>
                      <Typography textAlign="center">الصفحة الشخصية</Typography>
                    </MenuItem>
                  )}

                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">تسجيل الخروج</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Link to={"/login"}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      lineHeight: 0,
                      width: { md: 40, xs: 30 },
                      height: { md: 40, xs: 30 },
                      background: "#F8F8F8",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PersonOutlinedIcon
                      sx={{
                        width: { md: 30, xs: 20 },
                        height: { md: 30, xs: 20 },
                        color: "#666666",
                      }}
                    />
                  </Box>
                  <Box sx={{ display: { md: "block", xs: "none" } }}>
                    <Typography
                      sx={{ fontSize: 12, color: "#A5A5A5", fontWeight: "600" }}
                    >
                      مرحبا بك
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14, color: "#333333", fontWeight: "600" }}
                    >
                      تسجيل الدخول
                    </Typography>
                  </Box>
                </Box>
              </Link>
            )}
            {user?.role === "user" ? (
              <Link to="/cart">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      lineHeight: 0,
                      width: { md: 40, xs: 30 },
                      height: { md: 40, xs: 30 },
                      background: "#F8F8F8",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <ShoppingBagOutlinedIcon
                      sx={{
                        width: { md: 30, xs: 20 },
                        height: { md: 30, xs: 20 },
                        color: "#666666",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        background: "red",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        color: "#fff",
                        top: { md: -3, xs: -5 },
                        right: { md: 0, xs: -5 },
                        fontSize: 13,
                      }}
                    >
                      {cartItemsNum}
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ fontSize: 12, color: "#A5A5A5", fontWeight: "600" }}
                    >
                      سله المشتريات
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14, color: "#333333", fontWeight: "600" }}
                    >
                      {totalCartPrice}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ) : (
              ""
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Navbar;
