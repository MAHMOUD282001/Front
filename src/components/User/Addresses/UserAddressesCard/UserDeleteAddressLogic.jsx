import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletedAddressError,
  deletedAddressStatus,
} from "../../../../store/AddressesSlice";
import Swal from "sweetalert2";
import { deleteAddress } from "../../../../store/ThunkFunctions/AddressesFunctions";
import { useEffect } from "react";
import { STATUS } from "../../../../utils/status";

function UserDeleteAddressLogic() {
  let dispatch = useDispatch();

  let addressStatus = useSelector(deletedAddressStatus);

  let addressError = useSelector(deletedAddressError);

  let handleDeleteAddress = (id) => {
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
        dispatch(deleteAddress(id));
      }
    });
  };

  let errMsg = "";

  let getErrMsg = () => {
    if (addressError?.errors) {
      errMsg = "";
      addressError?.errors?.map((err) => {
        errMsg += err.msg;
      });
    } else if (addressError?.message) {
      errMsg = "";
      errMsg += addressError?.message;
    }
    return errMsg;
  };

  useEffect(() => {
    if (addressStatus === STATUS.SUCCEEDED) {
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
    } else if (addressStatus === STATUS.FAILED) {
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
  }, [addressStatus]);

  return [handleDeleteAddress];
}

export default UserDeleteAddressLogic;
