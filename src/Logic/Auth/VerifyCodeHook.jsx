import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  forgetPassword,
  verifyCode,
} from "../../store/ThunkFunctions/AuthFunctions";
import { STATUS } from "../../utils/status";
import {
  reset,
  verifyCodeError,
  verifyCodeStatus,
} from "../../store/AuthSlice";

function VerifyCodeHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [code, setCode] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (code === "") {
      toast.error("من فضلك ادخل الكود");
      return;
    }

    let data = {
      resetCode: code,
    };
    dispatch(verifyCode(data));
  };

  let codeStatus = useSelector(verifyCodeStatus);
  let codeError = useSelector(verifyCodeError);

  useEffect(() => {
    if (codeStatus === STATUS.SUCCEEDED) {
      toast.success("كود التحقق سليم");
      navigate("/resetPassword");
      dispatch(reset());
    } else if (codeStatus === STATUS.FAILED) {
      toast.error(codeError.message);
      dispatch(reset());
    }
  }, [codeStatus]);

  return [code, handleCodeChange, handleSubmit, codeStatus];
}

export default VerifyCodeHook;
