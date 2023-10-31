import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import Layout from "./Layout";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage/RegisterPage.jsx";
import AllBrandsPage from "./pages/Brands/AllBrandsPage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";
import AllCategoriesPage from "./pages/Categories/AllCategoriesPage.jsx";
import ProductsPage from "./pages/Products/ProductsPage/ProductsPage.jsx";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage/ProductDetailsPage.jsx";
import PaymentMethodPage from "./pages/PaymentMethod/PaymentMethodPage.jsx";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage.jsx";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage.jsx";
import UserAddressesPage from "./pages/User/Addresses/UserAllAdressesPage";
import UserAddAddressPage from "./pages/User/Addresses/UserAddAddressPage.jsx";
import UserProfilePage from "./pages/User/UserProfilePage.jsx";
import AdminEditProductPage from "./pages/Admin/Products/AdminEditProductPage.jsx";
import AdminAllProductsPage from "./pages/Admin/Products/AdminAllProductsPage/AdminAllProductsPage";
import AdminAllOrdersPage from "./pages/Admin/Orders/AdminAllOrdersPage.jsx";
import AdminOrderDetailsPage from "./pages/Admin/Orders/AdminOrderDetailsPage.jsx";
import AdminAddBrandPage from "./pages/Admin/Brands/AdminAddBrandPage/AdminAddBrandPage.jsx";
import AdminAddCategoryPage from "./pages/Admin/Categories/AdminAddCategoryPage.jsx";
import AdminAddSubCategoryPage from "./pages/Admin/SubCategories/AdminAddSubCategoryPage.jsx";
import AdminAddProductPage from "./pages/Admin/Products/AdminAddProductPage.jsx";
import AdminAllCategoriesPage from "./pages/Admin/Categories/AdminAllCategoriesPage/AdminAllCategoriesPage";
import AdminEditCategoryPage from "./pages/Admin/Categories/AdminEditCategoryPage/AdminEditCategoryPage";
import AdminEditBrandPage from "./pages/Admin/Brands/AdminEditBrandPage/AdminEditBrandPage.jsx";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage/ForgetPasswordPage.jsx";
import VerifyCodePage from "./pages/Auth/VerifyCodePage/VerifyCodePage.jsx";
import AdminCouponsPage from "./pages/Admin/Coupon/AdminCouponsPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage/ResetPasswordPage.jsx";
import ProtectedRoute from "./components/Utility/ProtectedRoute.jsx";
import AdminAllBrandsPage from "./pages/Admin/Brands/AdminAllBrandsPage/AdminAllBrandsPage";
import ProductsByCategoryPage from "./pages/Products/ProductsByCategoryPage/ProductsByCategoryPage";
import ProductsByBrandPage from "./pages/Products/ProductsByBrandPage/ProductsByBrandPage";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createTheme({
  direction: "rtl",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1600,
    },
  },
  palette: {
    primary: {
      main: "#62D0B6",
      contrastText: "#fff",
    },
  },
});

function App() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/forgetPassword", element: <ForgetPasswordPage /> },
        { path: "/verifyCode", element: <VerifyCodePage /> },
        { path: "/resetPassword", element: <ResetPasswordPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/allCategories", element: <AllCategoriesPage /> },
        { path: "/allBrands", element: <AllBrandsPage /> },
        { path: "/products", element: <ProductsPage /> },
        { path: "/products/:id", element: <ProductDetailsPage /> },
        { path: `/categoryProducts/:id`, element: <ProductsByCategoryPage /> },
        { path: `/brandProducts/:id`, element: <ProductsByBrandPage /> },

        /* Admin All Paths */
        {
          path: "/admin/allProducts",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminAllProductsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/allBrands",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminAllBrandsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/allOrders",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminAllOrdersPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/allOrders/:id",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminOrderDetailsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/addBrand",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminAddBrandPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/editBrand/:id",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminEditBrandPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/allCategories",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminAllCategoriesPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/addCategory",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminAddCategoryPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/editCategory/:id",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminEditCategoryPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/addSubCategory",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminAddSubCategoryPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/addProduct",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminAddProductPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/editProduct/:id",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminEditProductPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin/addCoupon",
          element: (
            <ProtectedRoute role={"admin"}>
              <AdminCouponsPage />
            </ProtectedRoute>
          ),
        },

        /* User All Paths */

        {
          path: "/user/allOrders",
          element: (
            <ProtectedRoute role={"user"}>
              <UserAllOrdersPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/user/favorite",
          element: (
            <ProtectedRoute role={"user"}>
              <UserFavoriteProductsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/user/addresses",
          element: (
            <ProtectedRoute role={"user"}>
              <UserAddressesPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/user/addAddress",
          element: (
            <ProtectedRoute role={"user"}>
              <UserAddAddressPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/user/profile",
          element: (
            <ProtectedRoute role={"user"}>
              <UserProfilePage />
            </ProtectedRoute>
          ),
        },

        {
          path: "/order/paymethod",
          element: (
            <ProtectedRoute role={"user"}>
              <PaymentMethodPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <Box sx={{ position: "relative" }}>
          <RouterProvider router={routing}></RouterProvider>
        </Box>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
