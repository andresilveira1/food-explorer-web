import { Hexagon } from '@phosphor-icons/react'
import { Container, Form } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api
      .post('/users', { name, email, password })
      .then((success) => {
        if (success) {
          alert('Usuário cadastrado com sucesso!')
          navigate('/')
        } else {
          navigate('/register')
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar.')
        }
      })
  }

  return (
    <Container>
      <h1>
        <Hexagon weight="fill" />
        food explorer
      </h1>

      <Form>
        <h2>Crie sua conta</h2>

        <label htmlFor="name">Seu nome</label>
        <Input
          id="name"
          placeholder="Exemplo: Maria da Silva"
          onChange={(e) => setName(e.target.value)}
        />

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

        <Button title="Entrar" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
