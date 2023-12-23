import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Section } from './Section'
import { Card } from './Card'

export function Menu() {
  const [meal, setMeal] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])

  const { user } = useAuth()

  const settings = {
    slidesPerView: 'auto',
    navigation: true,
    breakpoints: {
      320: {
        spaceBetween: 16,
      },

      990: {
        spaceBetween: 27,
      },
    },
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get('/menus')
      const meal = response.data.filter((item) => item.category === 'meal')
      const drinks = response.data.filter((item) => item.category === 'drinks')
      const desserts = response.data.filter(
        (item) => item.category === 'desserts',
      )

      setMeal(meal)
      setDesserts(desserts)
      setDrinks(drinks)
    }

    fetchProduct()
  }, [])

  return (
    <>
      <Section title="Refeições">
        {meal && (
          <Swiper {...settings}>
            {meal.map((item) => (
              <SwiperSlide
                key={String(item.id)}
                id={item.id}
                style={{ width: 'auto' }}
              >
                {user.admin ? (
                  <Card
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                ) : (
                  <Card
                    favName={item}
                    image={item.image}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Section>

      <Section title="Sobremesas">
        {desserts && (
          <Swiper {...settings}>
            {desserts.map((item) => (
              <SwiperSlide
                key={String(item.id)}
                id={item.id}
                style={{ width: 'auto', marginRight: '0px' }}
              >
                <Card
                  favName={item}
                  image={item.image}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Section>

      <Section title="Bebidas">
        {drinks && (
          <Swiper {...settings}>
            {drinks.map((item) => (
              <SwiperSlide
                key={String(item.id)}
                id={item.id}
                style={{ width: 'auto', marginRight: '0px' }}
              >
                <Card
                  favName={item}
                  image={item.image}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Section>
    </>
  )
}
