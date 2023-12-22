import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

import { Container, Main } from './styles'
import { SideMenu } from '../../components/SideMenu'
import { Footer } from '../../components/Footer'

export function Favorites() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [data, setData] = useState([])

  const { user } = useAuth()

  const url = `${api.defaults.baseURL}/files/`

  async function handleRemoveFav(id) {
    const confirm = window.confirm(
      'Tem certeza que deseja remover esse produto da sua lista de favoritos?',
    )

    if (confirm) {
      await api.delete(`/favorites/${id}`)
      window.location.reload()
    }
  }

  useEffect(() => {
    async function handleFav() {
      const response = await api.get(`/favorites/${user.id}`)

      setData(response.data)
    }

    handleFav()
  }, [])

  return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Main>
        <h1>Meus favoritos</h1>

        <div className="content">
          {data &&
            data.map((fav) => (
              <div key={String(fav.id)}>
                <img src={fav.image ? `${url}${fav.image}` : ''} alt="" />

                <div>
                  <Link to={`/details/${fav.menu_id}`}>{fav.name}</Link>
                  <ButtonText
                    title="Remover dos favoritos"
                    onClick={() => handleRemoveFav(fav.id)}
                  />
                </div>
              </div>
            ))}
        </div>
      </Main>

      <Footer />
    </Container>
  )
}