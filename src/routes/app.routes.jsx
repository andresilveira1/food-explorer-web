import { Routes, Route } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { NewDish } from '../pages/NewDish'
import { UpdateDish } from '../pages/UpdateDish'
import { Favorites } from '../pages/Favorites'
import { Payment } from '../pages/Payment'

export function AppRoutes() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/payment" element={<Payment />} />
      {user.admin && <Route path="/newdish" element={<NewDish />} />}
      {user.admin && <Route path="/updatedish/:id" element={<UpdateDish />} />}
    </Routes>
  )
}
