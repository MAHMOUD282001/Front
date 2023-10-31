import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updatePassword } from "../../../../store/ThunkFunctions/ProfileFunctions";
import {
  editedPassword,
  editedPasswordError,
  editedPasswordStatus,
  reset,
} from "../../../../store/ProfileSlice";
import { STATUS } from "../../../../utils/status";
import { useNavigate } from "react-router-dom";

function UserPasswordChangeLogic() {
  let [oldPassword, setOldPassword] = useState("");
  let [newPassword, setNewPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  let dispatch = useDispatch();

  let navigate = useNavigate();

  let updatedPasswordStatus = useSelector(editedPasswordStatus);

  let updatedPasswordError = useSelector(editedPasswordError);

  const handleOldPasswordChange = (e) => {
    e.preventDefault();
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    e.preventDefault();
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };

  let handleSubmit = async () => {
    if (
      oldPassword.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      toast.error("من فضلك اكمل البيانات");
      return;
    }

    let data = {
      currentPassword: oldPassword,
      password: newPassword,
      passwordConfirm: confirmPassword,
    };

    await dispatch(updatePassword(data));
  };

  useEffect(() => {
    if (updatedPasswordStatus === STATUS.SUCCEEDED) {
      toast.success("تم تعديل كلمة السر بنجاح");

      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      }, 1500);

      dispatch(reset());
    } else if (updatedPasswordStatus === STATUS.FAILED) {
      if (updatedPasswordError?.errors) {
        updatedPasswordError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (updatedPasswordError?.message) {
        toast.error(updatedPasswordError?.message);
      }
      dispatch(reset());
    }
  }, [updatedPasswordStatus]);

  return [
    oldPassword,
    newPassword,
    confirmPassword,
    updatedPasswordStatus,
    handleOldPasswordChange,
    handleNewPasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  ];
}

export default UserPasswordChangeLogic;
