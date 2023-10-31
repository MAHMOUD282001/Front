import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../../utils/status";
import { toast } from "react-toastify";
import { useTheme } from "@material-ui/core";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../../store/ThunkFunctions/WishlistFunctions";
import {
  addedWishlistItemError,
  addedWishlistItemStatus,
  removedWishlistItemError,
  removedWishlistItemStatus,
  resetWishlist,
} from "../../../store/WishlistSlice";

function ProductCardHook(favProducts, product, getIsFav) {
  let theme = useTheme();

  let dispatch = useDispatch();

  let [isFav, setIsFav] = useState(false);

  let [loadingAdd, setLoadingAdd] = useState(false);

  let [loadingDelete, setLoadingDelete] = useState(false);

  let fav = favProducts?.some((favProduct) => favProduct === product._id);

  const [isFavProduct, setIsFavProduct] = useState(fav);

  useEffect(() => {
    setIsFavProduct(
      favProducts?.some((favProduct) => favProduct === product._id)
    );
  }, [favProducts]);

  let handleFavourite = async (id) => {
    if (favProducts?.some((favProduct) => favProduct === id)) {
      await removeFromWishlist(id);
    } else {
      await addItemToWishlist(id);
    }
  };

  useEffect(() => {
    if (isFavProduct) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [isFavProduct]);

  const createdWishlistStatus = useSelector(addedWishlistItemStatus);
  const createdWishlistError = useSelector(addedWishlistItemError);

  let addItemToWishlist = async (id) => {
    setIsFav(true);
    setLoadingAdd(true);

    let data = {
      productId: id,
    };
    await dispatch(addToWishlist(data));

    setLoadingAdd(false);
    getIsFav();
  };

  const deletedWishlistStatus = useSelector(removedWishlistItemStatus);
  const deletedWishlistError = useSelector(removedWishlistItemError);

  let removeFromWishlist = async (id) => {
    setIsFav(false);
    setLoadingDelete(true);

    await dispatch(deleteFromWishlist(id));

    setLoadingDelete(false);
    getIsFav();
  };

  useEffect(() => {
    if (loadingAdd === false && createdWishlistStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه المنتج الى المفضله بنجاح");
      dispatch(resetWishlist());
    } else if (
      loadingAdd === false &&
      createdWishlistStatus === STATUS.FAILED
    ) {
      setIsFav(false);
      if (createdWishlistError?.errors) {
        createdWishlistError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (createdWishlistError?.message) {
        toast.error(createdWishlistError?.message);
      }
      dispatch(resetWishlist());
    }
  }, [loadingAdd]);

  useEffect(() => {
    if (loadingDelete === false && deletedWishlistStatus === STATUS.SUCCEEDED) {
      toast.success("تم حذف المنتج من المفضله بنجاح");
      dispatch(resetWishlist());
    } else if (
      loadingDelete === false &&
      deletedWishlistStatus === STATUS.FAILED
    ) {
      setIsFav(false);
      if (deletedWishlistError?.errors) {
        deletedWishlistError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (deletedWishlistError?.message) {
        toast.error(deletedWishlistError?.message);
      }
      dispatch(resetWishlist());
    }
  }, [loadingDelete]);

  return [theme, isFav, handleFavourite];
}

export default ProductCardHook;
