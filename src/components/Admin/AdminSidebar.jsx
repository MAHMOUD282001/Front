import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { Avatar, IconButton } from "@mui/material";
import avatarImg from "../../assets/avatarImg.png";
import {
  AddCard,
  Category,
  ChevronRight,
  LibraryAdd,
  ManageHistory,
  PostAdd,
  Settings,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { sidebarContext } from "../../context/SidebarContext";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function AdminSidebar() {
  const { open, handleDrawerClose } = useContext(sidebarContext);

  let navigate = useNavigate();

  let dashboardItems = [
    {
      name: "ادارة الطلبات",
      icon: <ManageHistory />,
      path: "/admin/allOrders",
    },
    { name: "ادارة المنتجات", icon: <Settings />, path: "/admin/allProducts" },
    {
      name: "التصنيفات الرئيسيه",
      icon: <Settings />,
      path: "/admin/allCategories",
    },
    
    {
      name: "الماركات",
      icon: <Settings />,
      path: "/admin/allBrands",
    },

    { name: "اضف ماركه", icon: <LibraryAdd />, path: "/admin/addBrand" },
    { name: "اضف تصنيف", icon: <Category />, path: "/admin/addCategory" },
    {
      name: " اضف تصنيف فرعى",
      icon: <PostAdd />,
      path: "/admin/addSubCategory",
    },
    { name: "اضف منتج", icon: <AddCard />, path: "/admin/addProduct" },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          top: "100px",
          height: "calc(100vh - 100px)",
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRight />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box>
        <Avatar
          sx={{
            mx: "auto",
            my: 1,
            width: open ? 70 : 30,
            height: open ? 70 : 30,
            border: "2px solid gray",
            transition: ".3s",
          }}
          src={avatarImg}
          alt="Avatar"
        />

        <Typography
          align="center"
          sx={{
            fontSize: open ? 15 : 0,
            mb: 1,
            transition: ".3s",
            color: "#62D0B6",
          }}
        >
          Admin
        </Typography>
      </Box>
      <List>
        {dashboardItems.slice(0, 4).map((dashboardItem, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(dashboardItem.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === dashboardItem.path ? grey[200] : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {dashboardItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={dashboardItem.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {dashboardItems.slice(4).map((dashboardItem, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(dashboardItem.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === dashboardItem.path ? grey[200] : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {dashboardItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={dashboardItem.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
