import { Plus, X } from '@phosphor-icons/react'

import { Container } from './styles'

export function DishItem({ $isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={$isNew}>
      <input
        type="text"
        value={value}
        readOnly={!$isNew}
        className="dishItemInput"
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={$isNew ? 'button-add' : 'button-delete'}
      >
        {$isNew ? <Plus /> : <X />}
      </button>
    </Container>
  )
}
