import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  forgetPassword,
} from "../../../store/ThunkFunctions/AuthFunctions";
import { STATUS } from "../../../utils/status";
import {
  forgettedPasswordError,
  forgettedPasswordStatus,
  reset,
} from "../../../store/AuthSlice";

function ForgetPasswordPageLogic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("من فضلك ادخل ايميل");
      return;
    }

    localStorage.setItem("userEmail", email);

    let data = {
      email: email,
    };
    dispatch(forgetPassword(data));
  };

  let forgetPasswordStatus = useSelector(forgettedPasswordStatus);
  let forgetPasswordError = useSelector(forgettedPasswordError);

  useEffect(() => {
    if (forgetPasswordStatus === STATUS.SUCCEEDED) {
      toast.success("تم ارسال كود التحقق");
      navigate("/verifyCode");
      dispatch(reset());
    } else if (forgetPasswordStatus === STATUS.FAILED) {
      toast.error(forgetPasswordError.message);
      dispatch(reset());
    }
  }, [forgetPasswordStatus]);

  return [email, handleEmailChange, handleSubmit, forgetPasswordStatus];
}

export default ForgetPasswordPageLogic;
