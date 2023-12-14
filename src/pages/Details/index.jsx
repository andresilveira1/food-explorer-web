import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CaretLeft, Receipt } from '@phosphor-icons/react'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Main, Product } from './styles'

import { Header } from '../../components/Header'
import { Ingredients } from '../../components/Ingredients'
import { Footer } from '../../components/Footer'
import { SideMenu } from '../../components/SideMenu'
import { ItemTotal } from '../../components/Menu/ItemTotal'
import { Button } from '../../components/Button'

export function Details() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [data, setData] = useState([])
  const [tags, setTags] = useState([])

  const { user } = useAuth()
  const params = useParams()

  const url = `${api.defaults.baseURL}/files/`

  useEffect(() => {
    async function handleRequest() {
      try {
        const response = await api.get(`/menus/${params.id}`)

        setData(response.data)
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Algo deu errado, não foi possível encontrar o produto.')
        }
      }
    }

    handleRequest()
  }, [])

  useEffect(() => {
    async function handleTag() {
      const response = await api.get(`/tags/${params.id}`)

      setTags(response.data)
    }

    handleTag()
  }, [])

  return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Main>
        <Link to="/">
          <CaretLeft />
          voltar
        </Link>

        <Product>
          <img src={`${url}${data.image}`} alt="" />

          <div>
            <h2>{data.name}</h2>

            <p>{data.description}</p>

            {data.tag && (
              <ul>
                {tags.map((tag) => (
                  <li key={tag.id}>
                    <Ingredients title={tag.name} />
                  </li>
                ))}
              </ul>
            )}

            {user.admin ? (
              <Link to={`/updatedish/${params.id}`}>Editar prato</Link>
            ) : (
              <div className="item-total">
                <ItemTotal />

                <Button title={`incluir ∙ ${data.price}`} icon={Receipt} />
              </div>
            )}
          </div>
        </Product>
      </Main>

      <Footer />
    </Container>
  )
}
