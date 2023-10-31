import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";
import CategoriesSlice from "./CategoriesSlice";
import BrandsSlice from "./BrandsSlice";
import SubCategoriesSlice from "./SubCategoriesSlice";
import AuthSlice from "./AuthSlice";
import ReviewSlice from "./ReviewSlice";
import WishlistSlice from "./WishlistSlice";
import CouponSlice from "./CouponSlice";
import AddressesSlice from "./AddressesSlice";
import ProfileSlice from "./ProfileSlice";
import CartSlice from "./CartSlice";
import CheckoutSlice from "./CheckoutSlice";
import OrdersSlice from "./OrdersSlice";

const store = configureStore({
  devTools: true,
  reducer: {
    products: ProductsSlice,
    review: ReviewSlice,
    wishlist: WishlistSlice,
    coupons: CouponSlice,
    categories: CategoriesSlice,
    subCategories: SubCategoriesSlice,
    brands: BrandsSlice,
    auth: AuthSlice,
    checkout: CheckoutSlice,
    orders: OrdersSlice,

    //User
    addresses: AddressesSlice,
    profile: ProfileSlice,
    cart: CartSlice,
  },
});

export default store;
