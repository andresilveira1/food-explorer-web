import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { NewDish } from '../pages/NewDish'
import { UpdateDish } from '../pages/UpdateDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/updatedish" element={<UpdateDish />} />
    </Routes>
  )
}
