import React from 'react'
import UserSidebar from '../../components/User/UserSidebar'
import { Box } from '@mui/material'
import UserFavoriteProducts from '../../components/User/Favorite/UserFavoriteProducts/UserFavoriteProducts'

function UserFavoriteProductsPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <UserSidebar />
      <UserFavoriteProducts />
    </Box>
  )
}

export default UserFavoriteProductsPage