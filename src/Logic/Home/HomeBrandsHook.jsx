import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from '../../store/thunkFunctions/brandsFunctions';
import { allBrands, allBrandsError, allBrandsStatus } from '../../store/BrandsSlice';

function HomeBrandsHook() {
  
    let dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllBrands());
    }, []);
  
    let brands = useSelector(allBrands);
  
    let brandsStatus = useSelector(allBrandsStatus);
  
    let brandsError = useSelector(allBrandsError);
  
  
  return [brands, brandsStatus, brandsError]
}

export default HomeBrandsHook