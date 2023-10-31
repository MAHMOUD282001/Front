import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificAddress } from "../../store/ThunkFunctions/AddressesFunctions";
import { specificAddress } from "../../store/AddressesSlice";

function GetAddressLogic() {
  let [addressId, setAddressId] = useState();
  let dispatch = useDispatch();

  let handleChooseAddress = (e) => {
    setAddressId(e.target.value);
    getAddress(e.target.value);
  };

  let getAddress = (id) => {
    dispatch(getSpecificAddress(id));
  };

  let addressDetails = useSelector(specificAddress);

  return [addressId, handleChooseAddress, addressDetails];
}

export default GetAddressLogic;
