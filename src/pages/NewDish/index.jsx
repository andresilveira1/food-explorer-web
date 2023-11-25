import { CaretLeft } from '@phosphor-icons/react'

import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { Select } from '../../components/Select'
import { DishItem } from '../../components/DishItem'

export function NewDish() {
  return (
    <Container>
      <Header />

      <div>
        <div>
          <a href="#">
            <CaretLeft />
            voltar
          </a>

          <h2>Novo prato</h2>
        </div>

        <Form>
          <div>
            <label htmlFor="img">Imagem do prato</label>
            <input type="file" id="img" />
          </div>

          <div>
            <label htmlFor="name">Nome</label>
            <Input id="name" placeholder="Ex.: Salada Ceasar" />
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <Select />
          </div>

          <div>
            <label htmlFor="ingredients">Ingredientes</label>

            <div className="dishitem">
              <DishItem value="Pão Naan" />

              <DishItem isNew placeholder="Adicionar" />
            </div>
          </div>

          <div>
            <label htmlFor="price">Preço</label>
            <Input id="price" placeholder="R$ 00,00" />
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              placeholder="Fale brevemente sobre o pratro, seus ingredientes e composição"
            />
          </div>

          <Button className="button" type="submit" title="Salvar" />
        </Form>
      </div>

      <Footer />
    </Container>
  )
}
