import { Link } from 'react-router-dom'
import {
  CaretRight,
  HeartStraight,
  Minus,
  PencilSimple,
  Plus,
} from '@phosphor-icons/react'

import { api } from '../../../services/api'
import { useAuth } from '../../../hooks/auth'

import { Container } from './styles'

import { Button } from '../../Button'
import { ButtonText } from '../../ButtonText'
import { useEffect, useState } from 'react'

export function Card({ image, id, name, description, price }) {
  const { user } = useAuth()
  const user_id = user.id

  const [productQuantity, setProductQuantity] = useState(1)
  const [favoriteId, setFavoriteId] = useState(null)
  const [favorited, setFavorited] = useState(false)

  const url = `${api.defaults.baseURL}/files/`

  function addProductQuatity() {
    setProductQuantity((prevState) => ++prevState)
  }

  function removeProductQuatity() {
    if (productQuantity > 1) {
      setProductQuantity((prevState) => --prevState)
    }
  }

  async function handleFavorite() {
    const { data } = await api.get(`/favorites/${user.id}`)
    const favExists = data.filter((item) => item.menu_id === id)
    const menu_id = favExists.map((item) => item.menu_id)

    if (Number(menu_id) === id) {
      await api.delete(`/favorites/${favoriteId}`)
      setFavorited(false)
    } else {
      const favorite_id = await api.post('/favorites', { user_id, menu_id: id })
      setFavoriteId(favorite_id)
      setFavorited(true)
    }
  }

  async function handleRequest() {
    await api.post('/payment', {
      quantity: productQuantity,
      menu_id: id,
    })
  }

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get(`/favorites/${user.id}`)
      const favorite = response.data.find((fav) => fav.menu_id === id)

      setFavoriteId(favorite ? favorite.id : null)
      setFavorited(!!favoriteId)
    }

    fetchFavorites()
  }, [favoriteId])

  return (
    <Container>
      {user.admin ? (
        <Link to={`/updatedish/${id}`} className="edit">
          <PencilSimple />
        </Link>
      ) : (
        <ButtonText
          className={favorited ? 'fav-actived' : 'fav-disabled'}
          onClick={handleFavorite}
        >
          {favorited ? (
            <HeartStraight weight="fill" />
          ) : (
            <HeartStraight weight="regular" />
          )}
        </ButtonText>
      )}

      <img src={`${url}${image}`} alt="" className="slide-img" />

      <Link to={`/details/${id}`}>
        {name} <CaretRight weight="bold" />
      </Link>

      <h2>{description}</h2>

      <p>{`R$ ${price}`}</p>

      {user.admin ? (
        ''
      ) : (
        <div className="add-product">
          <div className="item-total">
            <button onClick={removeProductQuatity}>
              <Minus size={24} />
            </button>

            <span>{String(productQuantity).padStart(2, '0')}</span>

            <button onClick={addProductQuatity}>
              <Plus size={24} />
            </button>
          </div>

          <Button title="incluir" onClick={handleRequest} />
        </div>
      )}
    </Container>
  )
}
