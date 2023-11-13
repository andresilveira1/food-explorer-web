import { X, MagnifyingGlass } from '@phosphor-icons/react'

import { Container, Header, Button, Nav } from './styles'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'
import { Footer } from '../Footer'

export function SideMenu({ menuIsOpen, onCloseMenu }) {
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
          <ButtonText title="Sair" />
        </div>
      </Nav>

      <Footer />
    </Container>
  )
}
