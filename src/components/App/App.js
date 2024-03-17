import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'components/Layout/Layout'

const Home = lazy(() => import('pages/Home/Home'))
const Products = lazy(() => import('pages/Products/Products'))
const Product = lazy(() => import('pages/Product/Product'))

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="products" element={<Products />}>
        <Route path=":product" element={<Product />} />
      </Route>
    </Route>
  </Routes>
)

export default App
