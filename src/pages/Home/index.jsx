import { useState } from 'react'

import { Container, Banner, Main } from './styles'

import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'

import bannerWeb from '../../assets/bannerWeb.svg'
import bannerMobile from '../../assets/bannerMobile.svg'

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

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

        <Menu />
      </Main>

      <Footer />
    </Container>
  )
}
