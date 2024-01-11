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
  const [dish, setDish] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [request, setRequest] = useState(0)

  const navigate = useNavigate()

  function handleSearch() {
    window.location.reload()
  }

  function handleIndex(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex((prevIndex) => Math.min(prevIndex + 1, dish.length - 1))
    }
  }

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

  // useEffect(() => {
  //   async function fetchIngredients() {
  //     const response = await api.get('/tags')
  //   }
  // }, [])

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/menus?name=${search}`)
      const dish = response.data.map((menu) => menu)

      if (search) {
        setDish(dish)
      } else {
        setDish([])
      }

      setFocusedIndex(-1)
    }

    fetchDish()
  }, [search])

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
            onKeyDown={handleIndex}
          />

          {dish && (
            <ul className="autocomplete">
              {dish.map((dish, index) => (
                <li
                  key={String(dish.id)}
                  className={`autocomplete-options ${
                    index === focusedIndex ? 'li-focus' : ''
                  }`}
                  tabIndex={index + 1}
                  onClick={handleSearch}
                >
                  <Link to={`/details/${dish.id}`}>{dish.name}</Link>
                </li>
              ))}
            </ul>
          )}
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
            {`Pedidos (${request})`}
          </Link>
        )}

        <span>{request}</span>

        <Logout>
          <SignOut size={32} onClick={handleSignOut} />
        </Logout>
      </Wrapper>
    </Container>
  )
}
