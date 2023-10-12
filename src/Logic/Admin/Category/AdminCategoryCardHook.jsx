import React, { useEffect } from 'react'
import Swal from "sweetalert2";
import { STATUS } from "../../../utils/status";
import { useDispatch, useSelector } from "react-redux";
import { deletedCategoryStatus } from '../../../store/CategoriesSlice';
import { deleteCategory } from '../../../store/ThunkFunctions/CategoriesFunctions';

function AdminCategoryCardHook() {
    let dispatch = useDispatch();
    let categoryStatus = useSelector(deletedCategoryStatus);
  
    let handleRemoveCategory = (id) => {
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
          dispatch(deleteCategory(id));
        }
      });
    };
    
    useEffect(() => {
      scrollTo(0, 0);
    }, []);
  
    useEffect(() => {
      if (categoryStatus === STATUS.SUCCEEDED) {
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
      } else if (categoryStatus === STATUS.FAILED) {
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
    }, [categoryStatus]);
  
  return [handleRemoveCategory]
}

export default AdminCategoryCardHook