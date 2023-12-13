import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { api } from '../../services/api'

import { Container, Form } from './styles'

import { Button } from '../../components/Button'
import { DishItem } from '../../components/DishItem'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { SelectItem } from '../../components/Select/SelectItem'
import { Textarea } from '../../components/Textarea'
import { Footer } from '../../components/Footer'

export function UpdateDish() {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [ingredient, setIngredient] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const params = useParams()
  const navigate = useNavigate()
  const [parent] = useAutoAnimate()

  function handleBack() {
    navigate(-1)
  }

  function handleSelect(value) {
    setCategory(value)
  }

  function handleAddTag() {
    if (!newIngredient) {
      alert('Digite o nome do ingrediente.')
    } else {
      setIngredient((prevState) => [...prevState, newIngredient])
      setNewIngredient('')
    }
  }

  function handleRemoveTag(deleted) {
    setIngredient((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    )
  }

  function handleImage(event) {
    const file = event.target.files[0]
    setImage(file)
  }

  async function handleRemoveDish() {
    const confirm = window.confirm(
      'Tem certeza que deseja remover esse produto?',
    )

    if (confirm) {
      await api.delete(`/menus/${params.id}`)
      handleBack()
    }
  }

  async function update() {
    if (!name || !description || !price) {
      return alert('Preencha todos os campos do produto.')
    }

    if (newIngredient) {
      return alert(
        'Existe um ingrediente que ainda não foi adicionado. Confirme a adição do ingrediente ou deixe o campo vazio.',
      )
    }

    if (ingredient.length === 0) {
      return alert('Adicione algum ingrediente ao produto.')
    }

    await api
      .put(`/menus/${params.id}`, {
        name,
        description,
        ingredient,
        price,
        category,
      })
      .then(() => {
        if (image) {
          const fileUploadForm = new FormData()
          fileUploadForm.append('image', image)

          api.patch(`/menus/img/${params.id}`, fileUploadForm)
        }

        alert('Produto atualizado com sucesso')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível atualizar o produto.')
        }
      })
  }

  useEffect(() => {
    async function handleDishInfo() {
      try {
        const response = await api.get(`/menus/${params.id}`)

        setName(response.data.name)
        setCategory(response.data.category)
        setPrice(response.data.price)
        setDescription(response.data.description)
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Algo deu errado, não foi possível encontrar o produto.')
        }
      }
    }

    handleDishInfo()
  }, [])

  useEffect(() => {
    async function handleTag() {
      const response = await api.get(`/tags/${params.id}`)

      setIngredient(response.data.map((item) => item.name))
    }

    handleTag()
  }, [])

  return (
    <Container>
      <Header />

      <div>
        <div>
          <Link to="/">
            <CaretLeft />
            voltar
          </Link>

          <h2>Editar prato</h2>
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
              type="text"
              id="name"
              value={name}
              placeholder="Ex.: Salada Ceasar"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <Select id="category" value={category} onValueChange={handleSelect}>
              <SelectItem text="Refeição" value="meal" />
              <SelectItem text="Sobremesas" value="desserts" />
              <SelectItem text="Bebidas" value="drinks" />
            </Select>
          </div>

          <div>
            <label htmlFor="ingredients">Ingredientes</label>

            <div className="dish-item" ref={parent}>
              {ingredient.map((ingredient, index) => (
                <DishItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveTag(ingredient)}
                />
              ))}

              <DishItem
                $isNew
                id="ingredients"
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </div>

          <div>
            <label htmlFor="price">Preço</label>
            <Input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <Textarea
              type="text"
              id="description"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="button-wrapper">
            <Button
              className="button-remove"
              type="button"
              title="Excluir prato"
              onClick={handleRemoveDish}
            />
            <Button
              className="button-save"
              title="Salvar alterações"
              onClick={update}
            />
          </div>
        </Form>
      </div>

      <Footer />
    </Container>
  )
}
