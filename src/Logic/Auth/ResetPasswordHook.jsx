import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../store/ThunkFunctions/AuthFunctions";
import {
  createdUser,
  createdUserError,
  createdUserStatus,
  reset,
  resetedPassword,
  resetedPasswordError,
  resetedPasswordStatus,
} from "../../store/AuthSlice";
import { STATUS } from "../../utils/status";
import { useEffect } from "react";

function ResetPasswordHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (password.length === 0 || confirmPassword.length === 0) {
      toast.error("من فضلك اكمل البيانات");
      return;
    }

    if (password != confirmPassword) {
      toast.error("من فضلك تاكد من كلمه السر");
      return;
    }

    let data = {
      email: localStorage.getItem("userEmail"),
      newPassword: password,
    };

    dispatch(resetPassword(data));
  };

  let resetedPasswordData = useSelector(resetedPassword);
  let resetedPasswordDataStatus = useSelector(resetedPasswordStatus);
  let resetedPasswordDataError = useSelector(resetedPasswordError);

  useEffect(() => {
    if (resetedPasswordDataStatus === STATUS.SUCCEEDED) {
      toast.success("تم تغيير كلمه السر بنجاح");
      console.log(resetedPasswordData);
      navigate("/login");
    } else if (resetedPasswordDataStatus === STATUS.FAILED) {
      console.log(resetedPasswordDataError);
      resetedPasswordDataError.errors?.map((err) => {
        toast.error(err.msg);
        dispatch(reset());
      });
    }
  }, [resetedPasswordDataStatus]);

  return [
    password,
    confirmPassword,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
    resetedPasswordDataStatus,
  ];
}

export default ResetPasswordHook;
