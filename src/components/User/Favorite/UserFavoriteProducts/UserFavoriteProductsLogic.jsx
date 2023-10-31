import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  wishlistItems,
  wishlistItemsError,
  wishlistItemsStatus,
} from "../../../../store/WishlistSlice";
import { getProductWishlist } from "../../../../store/ThunkFunctions/WishlistFunctions";
import { STATUS } from "../../../../utils/status";

function UserFavoriteProductsLogic() {
  let dispatch = useDispatch();

  let [favProducts, setFavProducts] = useState([]);

  let wishlist = useSelector(wishlistItems);

  let wishlistStatus = useSelector(wishlistItemsStatus);

  let wishlistError = useSelector(wishlistItemsError);

  let [isFav, setIsFav] = useState(false);

  let getIsFav = async () => {
    setIsFav(!isFav);
  };

  useEffect(() => {
    let getFav = async () => {
      await dispatch(getProductWishlist());
    };
    getFav();
  }, [isFav]);

  useEffect(() => {
    if (wishlistStatus === STATUS.SUCCEEDED) {
      setFavProducts(wishlist?.data);
    } else if (wishlistStatus === STATUS.FAILED) {
      if (wishlistError?.errors) {
        wishlistError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (wishlistError?.message) {
        toast.error(wishlistError?.message);
      }
    }
  }, [wishlistStatus]);

  return [wishlistStatus, wishlistError, favProducts, getIsFav];
}

export default UserFavoriteProductsLogic;
