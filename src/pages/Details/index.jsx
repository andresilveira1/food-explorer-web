import { CaretLeft } from '@phosphor-icons/react'
import { Container, Main, Product } from './styles'

import { Header } from '../../components/Header'
import { Ingredients } from '../../components/Ingredients'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'

import teste from '../../assets/teste.svg'
import { SideMenu } from '../../components/SideMenu'
import { useState } from 'react'

export function Details() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Main>
        <ButtonText title="voltar" icon={CaretLeft} />

        <Product>
          <img src={teste} alt="" />

          <div>
            <h2>Salada Ravanello</h2>

            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <ul>
              <li>
                <Ingredients title="alface" />
              </li>

              <li>
                <Ingredients title="cebola" />
              </li>

              <li>
                <Ingredients title="pão naan" />
              </li>

              <li>
                <Ingredients title="pepino" />
              </li>

              <li>
                <Ingredients title="rabanete" />
              </li>

              <li>
                <Ingredients title="tomate" />
              </li>
            </ul>
          </div>
        </Product>
      </Main>

      <Footer />
    </Container>
  )
}
