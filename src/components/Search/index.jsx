import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlass } from '@phosphor-icons/react'

import { api } from '../../services/api'

import { Container } from './styles'

import { Input } from '../Input'

export function Search() {
  const [search, setSearch] = useState('')
  const [dish, setDish] = useState([])
  const [focusedIndex, setFocusedIndex] = useState(-1)

  function handleIndex(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex((prevIndex) => Math.min(prevIndex + 1, dish.length - 1))
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/menus?name=${search}&tag=${search}`)
      const dishes = response.data.map((menu) => menu)

      if (search) {
        const filteredDishesByName = dishes.filter((dish) =>
          search.toLowerCase().includes(dish.name.charAt(0).toLowerCase()),
        )
        const filteredDishesByTags = dishes.filter((dishTag) =>
          dishTag.tags.includes(search.toLowerCase()),
        )

        const filteredDishes = [
          ...filteredDishesByName,
          ...filteredDishesByTags,
        ]

        setDish(filteredDishes)
      } else {
        setDish([])
      }

      setFocusedIndex(-1)
    }

    fetchDish()
  }, [search])

  return (
    <Container>
      <Input
        icon={MagnifyingGlass}
        placeholder="Busque por pratos ou ingredientes"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleIndex}
        onClick={(e) => setSearch(e.target.value)}
      />

      {dish && (
        <ul className="autocomplete">
          {dish.map((dish, index) => (
            <li
              key={index}
              className={`autocomplete-options ${
                index === focusedIndex ? 'li-focus' : ''
              }`}
              tabIndex={index + 1}
              onClick={() => setSearch('')}
            >
              <Link to={`/details/${dish.id}`}>
                <p>{dish.name}</p>
                <span>{dish.tags}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
