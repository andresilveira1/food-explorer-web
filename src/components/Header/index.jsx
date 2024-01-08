import {
  List,
  Hexagon,
  MagnifyingGlass,
  Receipt,
  SignOut,
} from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Container, Wrapper, Logout } from './styles'

import { Input } from '../Input'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Header({ onOpenMenu }) {
  const { signOut, user } = useAuth()

  const [search, setSearch] = useState('')
  const [dishId, setDishId] = useState([])
  const [dishName, setDishName] = useState([])
  const [request, setRequest] = useState([])

  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  useEffect(() => {
    async function handleRequest() {
      const response = await api.get(`/payment/${user.id}`)

      setRequest(response.data)
    }

    handleRequest()
  }, [request])

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/menus?name=${search}`)
      const dish_id = response.data.map((menu) => menu.id)
      const dish_name = response.data.map((menu) => menu.name)

      setDishId(dish_id[0])
      setDishName(dish_name.sort())

      const inputSearch = document.getElementById('search')
      inputSearch.addEventListener('keydown', (e) => {
        if (search === '') {
          return ''
        } else if (e.key === 'Enter') {
          window.location.href = `/details/${dishId}`
        }
      })
    }

    fetchDish()
  }, [search, dishId])

  return (
    <Container>
      <Wrapper>
        <List onClick={onOpenMenu} className="menu" />

        <Link to="/" className="logo">
          <Hexagon size={30} weight="fill" />
          food explorer
          {user.admin ? <span>admin</span> : ''}
        </Link>

        <div className="input-search">
          <Input
            id="search"
            icon={MagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
          />

          <ul className="autocomplete">
            <li className="autocomplete-options">Teste</li>
            <li className="autocomplete-options">Teste</li>
            <li className="autocomplete-options">Teste</li>
          </ul>
        </div>

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
            {`Pedidos (${request.length})`}
          </Link>
        )}

        <span>{request.length}</span>

        <Logout>
          <SignOut size={32} onClick={handleSignOut} />
        </Logout>
      </Wrapper>
    </Container>
  )
}
