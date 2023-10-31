import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "../../../../store/ThunkFunctions/AddressesFunctions";
import {
  addresses,
  addressesError,
  addressesStatus,
} from "../../../../store/AddressesSlice";
import { STATUS } from "../../../../utils/status";
import { useState } from "react";

function UserAllAddressesHook() {
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);

  let allAddresses = useSelector(addresses);
  let allAddressesStatus = useSelector(addressesStatus);
  let allAddressesError = useSelector(addressesError);

  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getAllAddresses());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false && allAddressesStatus === STATUS.IDLE) {
      dispatch(getAllAddresses());
    }
  }, [allAddressesStatus]);

  return [allAddresses, allAddressesStatus, allAddressesError];
}

export default UserAllAddressesHook;
