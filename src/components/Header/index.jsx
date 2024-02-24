import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { List, Hexagon, Receipt, SignOut } from '@phosphor-icons/react'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Wrapper, Logout } from './styles'

import { Search } from '../Search'

export function Header({ onOpenMenu }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const [request, setRequest] = useState(0)

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  useEffect(() => {
    async function handleRequest() {
      try {
        const response = await api.get(`/payment/${user.id}`)

        setRequest(response.data.length)
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Algo deu errado, não foi possível se conectar.')
        }
      }
    }

    handleRequest()
  }, [])

  return (
    <Container>
      <Wrapper>
        <List onClick={onOpenMenu} className="menu" />

        <Link to="/" className="logo">
          <Hexagon size={30} weight="fill" />
          food explorer
          {user.admin ? <span>admin</span> : ''}
        </Link>

        <Search />

        {!user.admin ? (
          <Link to="/favorites" className="my-fav">
            Meus favoritos
          </Link>
        ) : (
          ''
        )}

        {user.admin ? (
          <Link to="/newdish" className="new-dish" relative="path">
            Novo prato
          </Link>
        ) : (
          <Link to="/payment" className="order-button">
            <Receipt />
            {`Pedidos (${request})`}
          </Link>
        )}

        {!user.admin && <span>{request}</span>}

        <Logout>
          <SignOut size={32} onClick={handleSignOut} />
        </Logout>
      </Wrapper>
    </Container>
  )
}
