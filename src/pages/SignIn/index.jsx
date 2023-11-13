import { Container, Form } from './styles'

import { Hexagon } from '@phosphor-icons/react'

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

        <label htmlFor="email">
          <span>Email</span>

          <Input id="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </label>

        <label htmlFor="password">
          <span>Senha</span>

          <Input id="password" placeholder="No mínimo 6 caracteres" />
        </label>

        <Button type="submit" title="Entrar" />

        <a href="#">Criar uma conta</a>
      </Form>
    </Container>
  )
}
