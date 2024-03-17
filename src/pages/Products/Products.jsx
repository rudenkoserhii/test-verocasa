import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => (
  <div>
    <p>Products</p>
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  </div>
)

export default Products
