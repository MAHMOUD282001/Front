import React, { useEffect } from 'react'
import Swal from "sweetalert2";
import { STATUS } from "../../../utils/status";
import { useDispatch, useSelector } from "react-redux";
import { deletedBrandStatus } from '../../../store/BrandsSlice';
import { deleteBrand } from '../../../store/thunkFunctions/brandsFunctions';

function AdminBrandCardHook() {
    let dispatch = useDispatch();
    let brandStatus = useSelector(deletedBrandStatus);
  
    let handleRemoveBrand = (id) => {
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
          dispatch(deleteBrand(id));
        }
      });
    };
    
    useEffect(() => {
      scrollTo(0, 0);
    }, []);
  
    useEffect(() => {
      if (brandStatus === STATUS.SUCCEEDED) {
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
      } else if (brandStatus === STATUS.FAILED) {
        Swal.fire({
          title: "خطأ!",
          text: "حدثت مشكله اثناء حذف المنتج",
          icon: "error",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "تم",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      }
    }, [brandStatus]);
  
  return [handleRemoveBrand]
}

export default AdminBrandCardHook