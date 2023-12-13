import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { NewDish } from '../pages/NewDish'
import { UpdateDish } from '../pages/UpdateDish'
import { useAuth } from '../hooks/auth'

export function AppRoutes() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      {user.admin && <Route path="/newdish" element={<NewDish />} />}
      {user.admin && <Route path="/updatedish/:id" element={<UpdateDish />} />}
    </Routes>
  )
}
