import { useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editedUser,
  editedUserError,
  editedUserStatus,
  reset,
} from "../../../../store/ProfileSlice";
import { toast } from "react-toastify";
import { updateProfile } from "../../../../store/ThunkFunctions/ProfileFunctions";
import { STATUS } from "../../../../utils/status";

function UserEditProfileCardLogic(user) {
  let theme = useTheme();
  let [name, setName] = useState(user?.name);
  let [email, setEmail] = useState(user?.email);
  let [phone, setPhone] = useState(user?.phone);
  // let [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  let dispatch = useDispatch();

  let updatedUser = useSelector(editedUser);

  let userStatus = useSelector(editedUserStatus);

  let userError = useSelector(editedUserError);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  let handleSubmit = async () => {
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      toast.error("من فضلك اكمل البيانات");
      return;
    }

    let data;

    if (email === user.email) {
      data = {
        name: name,
        phone: phone,
      };
    } else {
      data = {
        name: name,
        phone: phone,
        email: email,
      };
    }

    await dispatch(updateProfile(data));
  };

  useEffect(() => {
    if (userStatus === STATUS.SUCCEEDED) {
      localStorage.setItem("user", JSON.stringify(updatedUser.data.data.user));
      toast.success("تم تعديل بيانات المستخدم بنجاح");
      handleClose();
      dispatch(reset());
    } else if (userStatus === STATUS.FAILED) {
      if (userError?.errors) {
        userError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (userError?.message) {
        toast.error(userError?.message);
      }
      // dispatch(reset());
    }
  }, [userStatus]);

  return [
    theme,
    open,
    name,
    email,
    phone,
    userStatus,
    userError,
    handleOpen,
    handleClose,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleSubmit,
  ];
}

export default UserEditProfileCardLogic;
