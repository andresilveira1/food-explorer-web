import { Hexagon } from '@phosphor-icons/react'
import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <h1>
        <Hexagon weight="fill" />
        food explorer
      </h1>

      <Form>
        <h2>Faça Login</h2>

        <label htmlFor="email">Email</label>
        <Input id="email" type="email" placeholder="exemplo@exemplo.com.br" />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />

        <Button type="submit" title="Entrar" />

        <Link to="/signup">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
