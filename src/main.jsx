import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/store.js";
import HomePage from "./pages/Home/HomePage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import AllBrandsPage from "./pages/Brand/AllBrandsPage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";
import AllCategoriesPage from "./pages/Categories/AllCategoriesPage.jsx";
import ShopProductsPage from "./pages/Products/ShopProductsPage.jsx";
import MenuContext from "./context/MenuContext.jsx";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage.jsx";
import PaymentMethodPage from "./pages/PaymentMethod/PaymentMethodPage.jsx";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage.jsx";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage.jsx";
import UserAddressesPage from "./pages/User/UserAdressesPage.jsx";
import UserAddAddressPage from "./pages/User/UserAddAddressPage.jsx";
import UserEditAddressPage from "./pages/User/UserEditAddressPage.jsx";
import UserProfilePage from "./pages/User/UserProfilePage.jsx";
import SidebarContext from "./context/SidebarContext.jsx";
import AdminEditProductPage from "./pages/Admin/Products/AdminEditProductPage.jsx";
import AdminAllProductsPage from "./pages/Admin/Products/AdminAllProductsPage.jsx";
import AdminAllOrdersPage from "./pages/Admin/Orders/AdminAllOrdersPage.jsx";
import AdminOrderDetailsPage from "./pages/Admin/Orders/AdminOrderDetailsPage.jsx";
import AdminAddBrandPage from "./pages/Admin/Brands/AdminAddBrandPage.jsx";
import AdminAddCategoryPage from "./pages/Admin/Categories/AdminAddCategoryPage.jsx";
import AdminAddSubCategoryPage from "./pages/Admin/SubCategories/AdminAddSubCategoryPage.jsx";
import AdminAddProductPage from "./pages/Admin/Products/AdminAddProductPage.jsx";
import AdminAllCategoriesPage from "./pages/Admin/Categories/AdminAllCategoriesPage.jsx";
import AdminEditCategoryPage from "./pages/Admin/Categories/AdminEditCategoryPage.jsx";
import AdminAllBrandsPage from "./pages/Admin/Brands/AdminAllBrandsPage.jsx";
import AdminEditBrandPage from "./pages/Admin/Brands/AdminEditBrandPage.jsx";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage.jsx";
import VerifyCodePage from "./pages/Auth/VerifyCodePage.jsx";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="forgetPassword" element={<ForgetPasswordPage />} />
      <Route path="verifyCode" element={<VerifyCodePage />} />
      <Route path="resetPassword" element={<ResetPasswordPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="allCategories" element={<AllCategoriesPage />} />
      <Route path="allBrands" element={<AllBrandsPage />} />
      <Route path="products" element={<ShopProductsPage />} />
      <Route path="products/:id" element={<ProductDetailsPage />} />
      <Route path="order/paymethod" element={<PaymentMethodPage />} />

      {/* Admin All Paths */}

      <Route path="admin/allProducts" element={<AdminAllProductsPage />} />
      <Route path="admin/allCategories" element={<AdminAllCategoriesPage />} />
      <Route path="admin/allBrands" element={<AdminAllBrandsPage />} />
      <Route path="admin/allOrders" element={<AdminAllOrdersPage />} />
      <Route path="admin/allOrders/:id" element={<AdminOrderDetailsPage />} />
      <Route path="admin/addBrand" element={<AdminAddBrandPage />} />
      <Route path="admin/editBrand/:id" element={<AdminEditBrandPage />} />
      <Route path="admin/addCategory" element={<AdminAddCategoryPage />} />
      <Route
        path="admin/editCategory/:id"
        element={<AdminEditCategoryPage />}
      />

      <Route
        path="admin/addSubCategory"
        element={<AdminAddSubCategoryPage />}
      />
      <Route path="admin/addProduct" element={<AdminAddProductPage />} />
      <Route path="admin/editProduct/:id" element={<AdminEditProductPage />} />

      {/* User All Paths */}

      <Route path="user/allOrders" element={<UserAllOrdersPage />} />
      <Route path="user/favorite" element={<UserFavoriteProductsPage />} />
      <Route path="user/addresses" element={<UserAddressesPage />} />
      <Route path="user/addAddress" element={<UserAddAddressPage />} />
      <Route path="user/editAddress" element={<UserEditAddressPage />} />
      <Route path="user/profile" element={<UserProfilePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <Provider store={store}>
      <MenuContext>
        <SidebarContext>
          <RouterProvider router={router} />
        </SidebarContext>
      </MenuContext>
    </Provider>
  </>
);
