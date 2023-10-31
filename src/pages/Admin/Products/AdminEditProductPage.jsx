import { Box } from '@mui/material'
import React from 'react'
import AdminSidebar from '../../../components/Admin/AdminSidebar'
import AdminEditProduct from '../../../components/Admin/Products/AdminEditProduct/AdminEditProduct'

function AdminEditProductPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        marginBottom: 5,
      }}
    >
      <AdminSidebar />
      <AdminEditProduct />
    </Box>
  )
}

export default AdminEditProductPage