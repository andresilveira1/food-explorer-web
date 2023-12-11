import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CaretRight, HeartStraight } from '@phosphor-icons/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'

import { Container, Banner, Main } from './styles'
import bannerWeb from '../../assets/bannerWeb.svg'
import bannerMobile from '../../assets/bannerMobile.svg'

import { ItemTotal } from '../../components/Menu/ItemTotal'
import { useAuth } from '../../hooks/auth'

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [slidePerView, setSlidePerView] = useState(2)
  const [meal, setMeal] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])
  const [fav, setFav] = useState('')

  const { user } = useAuth()

  const url = `${api.defaults.baseURL}/files/`

  async function favItem() {
    const favItem = fav.name
    const user_id = user.id

    await api.post('/favorites', { name: favItem, user_id })
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

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 660) {
        setSlidePerView(2)
      } else if ((window.innerWidth >= 660) & (window.innerWidth <= 899)) {
        setSlidePerView(3)
      } else if (window.innerWidth >= 900) {
        setSlidePerView(3.6)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Main>
        <Banner>
          <picture>
            <source srcSet={bannerMobile} media="(max-width: 989px)" />

            <img src={bannerWeb} alt="" />
          </picture>

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Banner>

        <Section title="Refeições">
          {meal && (
            <Swiper navigation slidesPerView={'auto'}>
              {meal.map((item) => (
                <SwiperSlide
                  key={String(item.id)}
                  id={item.id}
                  style={{ width: 'auto', marginRight: '0px' }}
                >
                  <div className="slide-item">
                    <ButtonText
                      className="fav"
                      icon={HeartStraight}
                      onClick={() => {
                        setFav(item)
                        favItem()
                      }}
                    />

                    <img
                      src={`${url}${item.image}`}
                      alt=""
                      className="slide-img"
                    />

                    <Link to={`/details/${item.id}`}>
                      {item.name} <CaretRight weight="bold" />
                    </Link>

                    <h2>{item.description}</h2>

                    <p>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>

                    <div className="add-product">
                      <ItemTotal />

                      <Button title="incluir" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Section>

        <Section title="Sobremesas">
          {desserts && (
            <Swiper slidesPerView={slidePerView} navigation>
              {desserts.map((item) => (
                <SwiperSlide key={String(item.id)}>
                  <div className="slide-item">
                    <ButtonText
                      className="fav"
                      icon={HeartStraight}
                      onClick={() => {
                        setFav(item)
                        favItem()
                      }}
                    />

                    <img
                      src={`${url}${item.image}`}
                      alt=""
                      className="slide-img"
                    />

                    <Link to={`/details/${item.id}`}>
                      {item.name} <CaretRight weight="bold" />
                    </Link>

                    <h2>{item.description}</h2>

                    <p>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>

                    <div className="add-product">
                      <ItemTotal />

                      <Button title="incluir" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Section>

        <Section title="Bebidas">
          {drinks && (
            <Swiper slidesPerView={slidePerView} navigation>
              {drinks.map((item) => (
                <SwiperSlide key={String(item.id)}>
                  <div className="slide-item">
                    <ButtonText
                      className="fav"
                      icon={HeartStraight}
                      onClick={() => {
                        setFav(item)
                        favItem()
                      }}
                    />

                    <img
                      src={`${url}${item.image}`}
                      alt=""
                      className="slide-img"
                    />

                    <Link to={`/details/${item.id}`}>
                      {item.name} <CaretRight weight="bold" />
                    </Link>

                    <h2>{item.description}</h2>

                    <p>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>

                    <div className="add-product">
                      <ItemTotal />

                      <Button title="incluir" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Section>
      </Main>

      <Footer />
    </Container>
  )
}
