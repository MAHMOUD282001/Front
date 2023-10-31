import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allBrands,
  allBrandsError,
  allBrandsStatus,
} from "../../../store/BrandsSlice";
import { getAllBrands } from "../../../store/ThunkFunctions/BrandsFunctions";

function HomeBrandsLogic() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  let brands = useSelector(allBrands);

  let brandsStatus = useSelector(allBrandsStatus);

  let brandsError = useSelector(allBrandsError);

  return [brands, brandsStatus, brandsError];
}

export default HomeBrandsLogic;
