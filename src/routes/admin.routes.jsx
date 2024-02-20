import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { NewDish } from '../pages/NewDish'
import { UpdateDish } from '../pages/UpdateDish'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/updatedish/:id" element={<UpdateDish />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
