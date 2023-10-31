import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands, getBrandsPage } from '../../store/ThunkFunctions/BrandsFunctions';
import { allBrands, allBrandsStatus } from '../../store/BrandsSlice';

function AllBrandsPageLogic() {
  
    let [page, setPage] = useState(1);

    let dispatch = useDispatch();
    useEffect(() => {
      scrollTo(0, 0);
      dispatch(getAllBrands(10));
    }, []);
  
    let brands = useSelector(allBrands);
    let brandsStatus = useSelector(allBrandsStatus);
  
    let getPage = (page) => {
      setPage(page);
      dispatch(getBrandsPage(page));
    };
  
  return [brands, brandsStatus, page, getPage]
}

export default AllBrandsPageLogic