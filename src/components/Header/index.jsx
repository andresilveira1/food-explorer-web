import {
  List,
  Hexagon,
  MagnifyingGlass,
  Receipt,
  SignOut,
} from '@phosphor-icons/react'

import { Container, Logout, Menu } from './styles'

import { Button } from '../Button'
import { Input } from '../Input'

export function Header({ onOpenMenu }) {
  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <List size={24} />
      </Menu>

      <h1>
        <Hexagon size={30} weight="fill" />
        food explorer
      </h1>

      <Input
        icon={MagnifyingGlass}
        placeholder="Busque por pratos ou ingredientes"
      />

      <Button title="Pedidos" icon={Receipt} className="request-button" />

      <Logout>
        <SignOut size={32} />
      </Logout>
    </Container>
  )
}
