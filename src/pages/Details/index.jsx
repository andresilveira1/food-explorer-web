import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CaretLeft, Minus, Plus, Receipt } from '@phosphor-icons/react'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Main, Product } from './styles'

import { Header } from '../../components/Header'
import { Ingredients } from '../../components/Ingredients'
import { Footer } from '../../components/Footer'
import { SideMenu } from '../../components/SideMenu'
import { Button } from '../../components/Button'

export function Details() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [productQuantity, setProductQuantity] = useState(1)
  const [data, setData] = useState([])
  const [tags, setTags] = useState([])

  const { user } = useAuth()
  const params = useParams()

  const url = `${api.defaults.baseURL}/files/`

  function addProductQuatity() {
    setProductQuantity((prevState) => ++prevState)
  }

  function removeProductQuatity() {
    if (productQuantity > 1) {
      setProductQuantity((prevState) => --prevState)
    }
  }

  async function handleRequest() {
    await api.post('/payment', {
      quantity: productQuantity,
      menu_id: params.id,
    })
  }

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

                <Button
                  title={`incluir ∙ ${data.price}`}
                  icon={Receipt}
                  onClick={handleRequest}
                />
              </div>
            )}
          </div>
        </Product>
      </Main>

      <Footer />
    </Container>
  )
}
