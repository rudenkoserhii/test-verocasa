import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Main = () => (
  <div>
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  </div>
)
