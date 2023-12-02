import { CaretLeft, UploadSimple } from '@phosphor-icons/react'

import { Container, Form } from './styles'

import { Button } from '../../components/Button'
import { DishItem } from '../../components/DishItem'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Textarea } from '../../components/Textarea'
import { Footer } from '../../components/Footer'
import { SelectItem } from '../../components/Select/SelectItem'

export function UpdateDish() {
  return (
    <Container>
      <Header />

      <div>
        <div>
          <a href="#">
            <CaretLeft />
            voltar
          </a>

          <h2>Editar prato</h2>
        </div>

        <Form>
          <div>
            <label htmlFor="img">Imagem do prato</label>

            <label htmlFor="img" className="fileLabel">
              <UploadSimple />
              <span>Selecione a imagem</span>
              <input type="file" id="img" className="sr-only" />
            </label>
          </div>

          <div>
            <label htmlFor="name">Nome</label>
            <Input id="name" placeholder="Ex.: Salada Ceasar" />
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <Select placeholder="Selecione uma categoria" id="category">
              <SelectItem text="Refeição" value="meal" />
              <SelectItem text="Sobremesas" value="desserts" />
              <SelectItem text="Bebidas" value="driks" />
            </Select>
          </div>

          <div>
            <label htmlFor="ingredients">Ingredientes</label>

            <div className="dish-item">
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

          <div className="button-wrapper">
            <Button
              className="button-remove"
              type="button"
              title="Excluir prato"
            />
            <Button
              className="button-save"
              type="submit"
              title="Salvar alterações"
            />
          </div>
        </Form>
      </div>

      <Footer />
    </Container>
  )
}
