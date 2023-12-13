import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { api } from '../../services/api'

import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { Select } from '../../components/Select'
import { DishItem } from '../../components/DishItem'
import { SelectItem } from '../../components/Select/SelectItem'

export function NewDish() {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [ingredient, setIngredient] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const navigate = useNavigate()

  const [parent] = useAutoAnimate()

  function handleCategory(e) {
    setCategory(e.target.value)
  }

  function handleImage(event) {
    const file = event.target.files[0]
    setImage(file)
  }

  function handleAddIngredient() {
    if (!newIngredient) {
      alert('Digite o nome do ingrediente.')
    } else {
      setIngredient((prevState) => [...prevState, newIngredient])
      setNewIngredient('')
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredient((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    )
  }

  async function handleDish() {
    let id

    if (!image) {
      return alert('Insira a imagem do produto.')
    }

    if (!category) {
      return alert('Selecione a categoria do produto.')
    }

    if (newIngredient) {
      return alert(
        'Existe um ingrediente que ainda não foi adicionado. Confirme a adição do ingrediente ou deixe o campo vazio.',
      )
    }

    if (ingredient.length === 0) {
      return alert('Adicione algum ingrediente ao produto.')
    }

    if (!name || !description || !price) {
      return alert('Preencha todos os campos do produto.')
    }

    await api
      .post('/menus', {
        name,
        description,
        category,
        price,
        ingredient,
      })
      .then((response) => {
        alert('Produto cadastrado com sucesso')
        navigate('/')
        id = response.data.menu_id
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar.')
        }
      })

    const fileUploadForm = new FormData()
    fileUploadForm.append('image', image)

    await api.patch(`/menus/img/${id}`, fileUploadForm)
  }

  return (
    <Container>
      <Header />

      <div>
        <div>
          <Link to="/">
            <CaretLeft />
            voltar
          </Link>

          <h2>Novo prato</h2>
        </div>

        <Form>
          <div>
            <label htmlFor="img">Imagem do prato</label>

            <label htmlFor="img" className="fileLabel">
              <UploadSimple />
              <span>Selecione a imagem</span>
              <input
                type="file"
                id="img"
                className="sr-only"
                onChange={handleImage}
              />
            </label>
          </div>

          <div>
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              placeholder="Ex.: Salada Ceasar"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="category">Categoria</label>

            <Select
              placeholder="Selecione uma categoria"
              id="category"
              onChange={handleCategory}
            >
              <SelectItem text="Refeição" value="meal" />
              <SelectItem text="Sobremesas" value="desserts" />
              <SelectItem text="Bebidas" value="drinks" />
            </Select>
          </div>

          <div>
            <label htmlFor="ingredients">Ingredientes</label>

            <div className="dishitem" ref={parent}>
              {ingredient.map((ingredient, index) => (
                <DishItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}

              <DishItem
                $isNew
                id="ingredients"
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </div>

          <div>
            <label htmlFor="price">Preço</label>
            <Input
              id="price"
              type="text"
              placeholder="Ex.: 00,00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              placeholder="Fale brevemente sobre o pratro, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button className="button" title="Salvar" onClick={handleDish} />
        </Form>
      </div>

      <Footer />
    </Container>
  )
}
