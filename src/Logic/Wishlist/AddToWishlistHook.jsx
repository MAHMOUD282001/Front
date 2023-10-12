import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createWishlist } from "../../store/ThunkFunctions/WishlistFunctions";
import {
  addedWishlistItemError,
  addedWishlistItemStatus,
} from "../../store/WishlistSlice";
import { STATUS } from "../../utils/status";
import { toast } from "react-toastify";
import { useTheme } from "@emotion/react";

function AddToWishlistHook() {
  let theme = useTheme();

  let dispatch = useDispatch();

  let [isFav, setIsFav] = useState(false);

  let [productId, setProductId] = useState("");

  let handleFavourite = (id) => {
    setIsFav(!isFav);
    setProductId(id);
  };

  useEffect(() => {
    if (isFav) {
      addToWishlist();
    }
  }, [isFav]);

  let addToWishlist = () => {
    let data = {
      productId: productId,
    };
    dispatch(createWishlist(data));
  };

  const createdWishlistStatus = useSelector(addedWishlistItemStatus);
  const createdWishlistError = useSelector(addedWishlistItemError);


  useEffect(() => {
    if (createdWishlistStatus === STATUS.SUCCEEDED) {
      toast.success("تمت الاضافه الى المفضله");
    } else if (createdWishlistStatus === STATUS.FAILED) {
      if (createdWishlistError?.errors) {
        createdWishlistError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (createdWishlistError?.message) {
        toast.error(createdWishlistError?.message);
      }
    }
  }, [createdWishlistStatus]);

  return [theme, isFav, handleFavourite];
}

export default AddToWishlistHook;
