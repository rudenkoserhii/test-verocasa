import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import 'components/Main/main.scss'

export const Main = () => (
  <main>
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  </main>
)
