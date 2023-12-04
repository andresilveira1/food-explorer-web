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
import { useAuth } from '../../hooks/auth'

export function Header({ onOpenMenu }) {
  const { signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }

  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <List size={24} />
      </Menu>

      <h1>
        <Hexagon size={30} weight="fill" />
        food explorer
        {/* {user.isAdmin && <span>admin</span>} */}
      </h1>

      <Input
        icon={MagnifyingGlass}
        placeholder="Busque por pratos ou ingredientes"
      />

      <Button title="Pedidos" icon={Receipt} className="request-button" />

      <Logout>
        <SignOut size={32} onClick={handleSignOut} />
      </Logout>
    </Container>
  )
}
