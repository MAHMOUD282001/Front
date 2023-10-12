import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './ProductsSlice';
import CategoriesSlice from './CategoriesSlice';
import BrandsSlice from './BrandsSlice';
import SubCategoriesSlice from './SubCategoriesSlice';
import AuthSlice from './AuthSlice';
import ReviewSlice from './ReviewSlice';
import WishlistSlice from './WishlistSlice';

const store = configureStore({
  devTools: true,
  reducer: {
    products: ProductsSlice,
    review: ReviewSlice,
    wishlist: WishlistSlice,
    categories: CategoriesSlice,
    subCategories: SubCategoriesSlice,
    brands: BrandsSlice,
    auth: AuthSlice
  },
});

export default store;