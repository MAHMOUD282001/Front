import React, { useEffect } from "react";
import { deleteProduct } from "../../../../store/ThunkFunctions/ProductsFunctions";
import Swal from "sweetalert2";
import { STATUS } from "../../../../utils/status";
import { useDispatch, useSelector } from "react-redux";
import {
  deletedProductError,
  deletedProductStatus,
} from "../../../../store/ProductsSlice";

function AdminProductCardLogic() {
  let dispatch = useDispatch();

  let productStatus = useSelector(deletedProductStatus);

  let productError = useSelector(deletedProductError);

  let handleRemoveProduct = (id) => {
    Swal.fire({
      title: "هل انت متاكد",
      text: "لن تتمكن من التراجع عن هذا!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم، احذفه!",
      cancelButtonText: "تراجع!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(id));
      }
    });
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  let errMsg = "";

  let getErrMsg = () => {
    if (productError?.errors) {
      errMsg = "";
      productError?.errors?.map((err) => {
        errMsg += err.msg;
      });
    } else if (productError?.message) {
      errMsg = "";
      errMsg += productError?.message;
    }
    return errMsg;
  };

  useEffect(() => {
    if (productStatus === STATUS.SUCCEEDED) {
      Swal.fire({
        title: "تم الحذف",
        text: "تم حذف المنتج بنجاح",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "تم",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } else if (productStatus === STATUS.FAILED) {
      Swal.fire({
        title: "خطأ!",
        text: getErrMsg(),
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "تم",
      }).then((result) => {
        if (result.isConfirmed) {
          // window.location.reload();
        }
      });
    }
  }, [productStatus]);

  return [handleRemoveProduct];
}

export default AdminProductCardLogic;
