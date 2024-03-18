/* eslint-disable */
import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Footer } from './Footer'
import '@testing-library/jest-dom'

test('renders footer with correct elements', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  )

  expect(getByText('Контакт - центр')).toBeInTheDocument()

  expect(getByText('Особистий кабінет')).toBeInTheDocument()
})
