import { Hexagon } from '@phosphor-icons/react'

import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <strong>
        <Hexagon size={22} weight="fill" />
        food explorer
      </strong>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}
