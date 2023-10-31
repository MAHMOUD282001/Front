import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  updatedAddressError,
  updatedAddressStatus,
} from "../../../../store/AddressesSlice";
import { toast } from "react-toastify";
import { updateAddress } from "../../../../store/ThunkFunctions/AddressesFunctions";
import { useEffect } from "react";
import { STATUS } from "../../../../utils/status";
import { useTheme } from "@material-ui/core";

function UserUpdateAddressLogic(address) {
  let theme = useTheme();
  let [addressName, setAddressName] = useState(address?.alias);
  let [location, setLocation] = useState(address?.details);
  let [phone, setPhone] = useState(address?.phone);
  let [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  let dispatch = useDispatch();

  let addressStatus = useSelector(updatedAddressStatus);

  let addressError = useSelector(updatedAddressError);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

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

  let handleSubmit = async () => {
    if (addressName === "" || location === "" || phone === "") {
      toast.error("من فضلك اكمل البيانات");
      return;
    }
    
    let data = {
      alias: addressName,
      details: location,
      phone: phone,
    };

    await dispatch(updateAddress({ id: address?._id, data }));

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false && addressStatus === STATUS.SUCCEEDED) {
      toast.success("تم تعديل العنوان بنجاح");
      dispatch(reset());
      handleClose();
    } else if (loading === false && addressStatus === STATUS.FAILED) {
      if (addressError?.errors) {
        addressError?.errors?.map((err) => {
          toast.error(err.msg);
        });
      } else if (addressError?.message) {
        toast.error(addressError?.message);
      }
      handleClose();
      dispatch(reset());
    }
  }, [loading]);

  return [
    theme,
    open,
    addressName,
    location,
    phone,
    addressStatus,
    handleClose,
    handleOpen,
    handleAddressNameChange,
    handlePhoneChange,
    handleLocationChange,
    handleSubmit,
  ];
}

export default UserUpdateAddressLogic;
