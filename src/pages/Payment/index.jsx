import { useEffect, useState } from 'react'
import { CreditCard, DiamondsFour, Receipt } from '@phosphor-icons/react'
import * as Tabs from '@radix-ui/react-tabs'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import QRCode from '../../assets/QRCode.svg'
import { Input } from '../../components/Input'
import { SideMenu } from '../../components/SideMenu'

export function Payment() {
  const { user } = useAuth()

  const [order, setOrder] = useState([])
  const [total, setTotal] = useState('')
  const [currentTab, setCurrentTab] = useState('pix')
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const url = `${api.defaults.baseURL}/files/`

  async function handleRemoveOrder(id) {
    const confirm = window.confirm(
      'Tem certeza que deseja remover esse produto?',
    )

    if (confirm) {
      await api.delete(`/payment/${id}`)
    }
  }

  useEffect(() => {
    async function handleOrder() {
      const response = await api.get(`/payment/${user.id}`)
      const value = response.data.map(
        (value) => Number(value.price.replace(/,/g, '.')) * value.quantity,
      )

      const sum = value.reduce((total, products) => total + products, 0)

      setTotal(sum.toFixed(2))
      setOrder(response.data)
    }

    handleOrder()
  }, [order])
  return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Content>
        <div className="wrapper">
          <div className="order">
            <h2>Meu pedido</h2>

            <ul>
              {order.map((order) => (
                <li key={String(order.id)}>
                  <img src={`${url}${order.image}`} alt="" />

                  <div>
                    <p>
                      {order.quantity} x {order.name}
                    </p>
                    <ButtonText
                      title="Remover produto"
                      onClick={() => handleRemoveOrder(order.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <span>Total: R$ {total}</span>

            <div className="button-forward">
              <Button title="Avançar" />
            </div>
          </div>

          <div className="payment">
            <h2>Pagamento</h2>

            <div className="method">
              <Tabs.Root
                value={currentTab}
                onValueChange={setCurrentTab}
                className="tab"
              >
                <Tabs.List className="tab-list">
                  <Tabs.Trigger value="pix" className="tab-item">
                    <span>
                      <DiamondsFour size={30} />
                      PIX
                    </span>
                  </Tabs.Trigger>

                  <Tabs.Trigger value="credit-card" className="tab-item">
                    <span>
                      <CreditCard size={30} />
                      Crédito
                    </span>
                  </Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>

              <div className="status">
                {currentTab === 'pix' ? (
                  <img src={QRCode} alt="QRCode" />
                ) : (
                  <Form>
                    <div className="card-number">
                      <label htmlFor="credit-card">Número do Cartão</label>
                      <Input
                        id="credit-card"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>

                    <div className="card-info">
                      <label htmlFor="validity">
                        Validade <Input id="validity" placeholder="04/25" />
                      </label>

                      <label htmlFor="cvc">
                        CVC <Input id="cvc" placeholder="000" type="number" />
                      </label>
                    </div>

                    <Button icon={Receipt} title="Finalizar pagamento" />
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}
