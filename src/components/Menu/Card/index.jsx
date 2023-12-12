import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaretRight, HeartStraight, PencilSimple } from '@phosphor-icons/react'

import { api } from '../../../services/api'
import { useAuth } from '../../../hooks/auth'

import { Container } from './styles'

import { Button } from '../../Button'
import { ButtonText } from '../../ButtonText'
import { ItemTotal } from '../ItemTotal'

export function Card({ favName, image, id, name, description, price }) {
  const [fav, setFav] = useState('')

  const { user } = useAuth()

  const url = `${api.defaults.baseURL}/files/`

  async function favItem() {
    const favItem = fav.name
    const user_id = user.id

    await api.post('/favorites', { name: favItem, user_id })
  }

  return (
    <Container>
      {user.admin ? (
        <Link to={`/updatedish/${id}`} className="edit">
          <PencilSimple />
        </Link>
      ) : (
        <ButtonText
          className="fav"
          icon={HeartStraight}
          onClick={() => {
            setFav(favName)
            favItem()
          }}
        />
      )}

      <img src={`${url}${image}`} alt="" className="slide-img" />

      <Link to={`/details/${id}`}>
        {name} <CaretRight weight="bold" />
      </Link>

      <h2>{description}</h2>

      <p>
        {price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>

      {user.admin ? (
        ''
      ) : (
        <div className="add-product">
          <ItemTotal />

          <Button title="incluir" />
        </div>
      )}
    </Container>
  )
}
