import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../../store/ThunkFunctions/AuthFunctions";
import { STATUS } from "../../../utils/status";
import {
  loggedInUser,
  loggedInUserError,
  loggedInUserStatus,
  reset,
} from "../../../store/AuthSlice";

function LoginPageLogic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("من فضلك ادخل ايميل");
      return;
    }
    if (password.length < 6) {
      toast.error("من فضلك تاكد من كلمه السر");
      return;
    }

    let data = {
      email: email,
      password: password,
    };
    dispatch(loginUser(data));
  };

  let logedUser = useSelector(loggedInUser);
  let logedUserStatus = useSelector(loggedInUserStatus);
  let logedUserError = useSelector(loggedInUserError);

  useEffect(() => {
    if (logedUserStatus === STATUS.SUCCEEDED) {
      toast.success("تم تسجيل الدخول بنجاح");
      localStorage.setItem("user", JSON.stringify(logedUser.data));
      if (logedUser.token) {
        localStorage.setItem("token", logedUser.token);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }

      dispatch(reset());
      navigate("/");
    } else if (logedUserStatus === STATUS.FAILED) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      if (logedUserError.errors) {
        logedUserError.errors?.map((err) => {
          toast.error(err.msg);
          dispatch(reset());
        });
      } else {
        toast.error(logedUserError.message);
        dispatch(reset());
      }
    }
  }, [logedUserStatus]);

  return [
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    logedUserStatus,
  ];
}

export default LoginPageLogic;
