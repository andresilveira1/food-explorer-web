import { Hexagon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useAuth } from '../../hooks/auth'
import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <h1>
        <Hexagon weight="fill" />
        food explorer
      </h1>

      <Form>
        <h2>Faça Login</h2>

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/signup">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
