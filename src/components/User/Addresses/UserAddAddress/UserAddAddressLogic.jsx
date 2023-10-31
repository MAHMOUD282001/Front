import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createAddress } from "../../../../store/ThunkFunctions/AddressesFunctions";
import {
  createdAddressError,
  createdAddressStatus,
  reset,
} from "../../../../store/AddressesSlice";
import { STATUS } from "../../../../utils/status";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@material-ui/core";

function UserAddAddressHook() {
  let theme = useTheme();
  let [addressName, setAddressName] = useState();
  let [location, setLocation] = useState("");
  let [phone, setPhone] = useState("");

  let dispatch = useDispatch();

  let navigate = useNavigate();

  let addressStatus = useSelector(createdAddressStatus);

  let addressError = useSelector(createdAddressError);

  const handleAddressNameChange = (e) => {
    e.preventDefault();
    setAddressName(e.target.value);
  };

  const handleLocationChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  const handlePhoneChange = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  let handleAddressSubmit = (e) => {
    e.preventDefault();

    if (addressName === "" || phone === "" || location === "") {
      toast.error("من فضلك اكمل البيانات");
      return;
    }

    let data = {
      alias: addressName,
      details: location,
      phone: phone,
    };
    dispatch(createAddress(data));
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (addressStatus === STATUS.SUCCEEDED) {
      toast.success("تم اضافه العنوان بنجاح");
      setAddressName("");
      setLocation("");
      setPhone("");

      setTimeout(() => {
        navigate("/user/addresses");
      }, 1000);

      dispatch(reset());
    } else if (addressStatus === STATUS.FAILED) {
      if (addressError?.errors) {
        addressError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (addressError?.message) {
        toast.error(addressError?.message);
      }
      dispatch(reset());
    }
  }, [addressStatus]);

  return [
    theme,
    addressName,
    location,
    phone,
    addressStatus,
    handleAddressNameChange,
    handlePhoneChange,
    handleLocationChange,
    handleAddressSubmit,
  ];
}

export default UserAddAddressHook;
