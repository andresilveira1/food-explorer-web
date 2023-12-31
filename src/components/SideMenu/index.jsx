import { X, MagnifyingGlass } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { Container, Header, Button, Nav } from './styles'

import { useAuth } from '../../hooks/auth'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'
import { Footer } from '../Footer'

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const { signOut, user } = useAuth()

  function handleSignOut() {
    signOut()
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Button onClick={onCloseMenu}>
          <X size={30} />
        </Button>

        <h1>Menu</h1>
      </Header>

      <Nav>
        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
        />

        <div>
          {user.admin ? (
            <Link to="newdish">Novo prato</Link>
          ) : (
            <Link to="/favorites" onClick={onCloseMenu}>
              Meus favoritos
            </Link>
          )}

          <ButtonText title="Sair" onClick={handleSignOut} />
        </div>
      </Nav>

      <Footer />
    </Container>
  )
}
