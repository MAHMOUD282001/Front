import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../store/ThunkFunctions/CartFunctions";
import {
  cartItems,
  cartItemsError,
  cartItemsStatus,
} from "../../store/CartSlice";
import { STATUS } from "../../utils/status";
import { useState } from "react";

function CartLogic() {
  let dispatch = useDispatch();
  let [cartItemsNum, setCartItemsNum] = useState(0);
  let [itemsOfCart, setItemsOfCart] = useState([]);
  let [totalCartPrice, setTotalCartPrice] = useState(0);
  let [cartId, setCartId] = useState("");
  let [addedCouponName, setAddedCouponName] = useState("");
  let [priceAfterDiscount, setPriceAfterDiscount] = useState(0);

  let items = useSelector(cartItems);
  let itemsStatus = useSelector(cartItemsStatus);
  let itemsError = useSelector(cartItemsError);

  useEffect(() => {
    if (itemsStatus === STATUS.IDLE) {
      dispatch(getCartItems());
    }
    if (itemsStatus === STATUS.SUCCEEDED) {
      setCartItemsNum(items.numOfCartItems);
      setItemsOfCart(items.data.products);
      setTotalCartPrice(items.data.totalCartPrice);
      setCartId(items.data._id);

      if (items.data.coupon) {
        setAddedCouponName(items.data.coupon);
        setPriceAfterDiscount(items.data.totalAfterDiscount);
      } else {
        setAddedCouponName("");
        setPriceAfterDiscount(0);
      }
    } else if (itemsStatus === STATUS.FAILED) {
      setCartItemsNum(0);
      setItemsOfCart([]);
      setTotalCartPrice(0);
      setCartId("");
      setAddedCouponName("");
      setPriceAfterDiscount(0);
    }
  }, [itemsStatus]);

  return [
    cartItemsNum,
    itemsOfCart,
    itemsStatus,
    itemsError,
    totalCartPrice,
    cartId,
    addedCouponName,
    priceAfterDiscount,
  ];
}

export default CartLogic;
