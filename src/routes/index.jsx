import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'
import { AuthRoutes } from './auth.routes'
import { AdminRoutes } from './admin.routes'
import { CustomerRoutes } from './customer.routes'
import { useEffect } from 'react'
import { api } from '../services/api'

export function Routes() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get('/users/validated').catch((error) => {
      if (error.response?.status === 401) {
        signOut()
      }
    })
  }, [])

  function AccessRoute() {
    switch (user.admin) {
      case 1:
        return <AdminRoutes />
      case 0:
        return <CustomerRoutes />
    }
  }

  return <BrowserRouter>{user ? AccessRoute() : <AuthRoutes />}</BrowserRouter>
}
