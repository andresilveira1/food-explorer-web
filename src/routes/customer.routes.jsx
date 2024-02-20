import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Favorites } from '../pages/Favorites'
import { Payment } from '../pages/Payment'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/payment" element={<Payment />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
