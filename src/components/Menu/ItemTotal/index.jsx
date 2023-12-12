import { Minus, Plus } from '@phosphor-icons/react'

import { Container } from './styles'
import { useState } from 'react'

export function ItemTotal() {
  const [productQuantity, setProductQuantity] = useState([1])

  function addProductQuatity() {
    setProductQuantity((prevState) => ++prevState)
  }

  function removeProductQuatity() {
    if (productQuantity > 1) {
      setProductQuantity((prevState) => --prevState)
    }
  }

  return (
    <Container>
      <button onClick={removeProductQuatity}>
        <Minus size={24} />
      </button>

      <span>{String(productQuantity).padStart(2, '0')}</span>

      <button onClick={addProductQuatity}>
        <Plus size={24} />
      </button>
    </Container>
  )
}
