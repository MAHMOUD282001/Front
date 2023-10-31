import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser } from "../../../store/ThunkFunctions/AuthFunctions";
import {
  createdUser,
  createdUserError,
  createdUserStatus,
  reset,
} from "../../../store/AuthSlice";
import { STATUS } from "../../../utils/status";
import { useEffect } from "react";

function RegisterPageLogic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      toast.error("من فضلك اكمل البيانات");
      return;
    }
    if (phone.length <= 10) {
      toast.error("من فضلك ادخل رقم هاتف صحيح");
      return;
    }
    if (password != confirmPassword) {
      toast.error("من فضلك تاكد من كلمه السر");
      return;
    }

    let data = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: confirmPassword,
      phone: phone,
    };

    dispatch(createUser(data));
  };

  let newUser = useSelector(createdUser);
  let newUserStatus = useSelector(createdUserStatus);
  let newUserError = useSelector(createdUserError);

  useEffect(() => {
    if (newUserStatus === STATUS.SUCCEEDED) {
      toast.success("تم انشاء حساب بنجاح");
      localStorage.setItem("token", newUser.token);
      dispatch(reset());
      navigate("/login");
    } else if (newUserStatus === STATUS.FAILED) {
      newUserError.errors?.map((err) => {
        toast.error(err.msg);
        dispatch(reset());
      });
    }
  }, [newUserStatus]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
    newUserStatus,
  ];
}

export default RegisterPageLogic;
