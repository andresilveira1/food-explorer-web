import { Hexagon } from '@phosphor-icons/react'
import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <h1>
        <Hexagon weight="fill" />
        food explorer
      </h1>

      <Form>
        <h2>Crie sua conta</h2>

        <label htmlFor="name">
          <span>Seu nome</span>

          <Input id="name" placeholder="Exemplo: Maria da Silva" />
        </label>

        <label htmlFor="email">
          <span>Email</span>

          <Input
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </label>

        <label htmlFor="password">
          <span>Senha</span>

          <Input
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />
        </label>

        <Button type="submit" title="Entrar" />

        <a href="#">Já tenho uma conta</a>
      </Form>
    </Container>
  )
}
