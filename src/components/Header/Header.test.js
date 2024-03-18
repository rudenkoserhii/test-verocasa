/* eslint-disable */
import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './Header'
import '@testing-library/jest-dom'

test('renders header with correct elements', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  )

  expect(getByText('Увійти')).toBeInTheDocument()

  expect(getByText('Зареєструватися')).toBeInTheDocument()
})
