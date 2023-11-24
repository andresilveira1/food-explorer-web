import { Hexagon } from '@phosphor-icons/react'
import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

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

        <label htmlFor="name">Seu nome</label>
        <Input id="name" placeholder="Exemplo: Maria da Silva" />

        <label htmlFor="email">Email</label>
        <Input id="email" type="email" placeholder="exemplo@exemplo.com.br" />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />

        <Button type="submit" title="Entrar" />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
