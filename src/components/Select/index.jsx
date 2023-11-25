import * as SelectPrimitive from '@radix-ui/react-select'
import { CaretDown } from '@phosphor-icons/react'

import { Container } from './styles'
import { SelectItem } from './SelectItem'

export function Select() {
  return (
    <Container>
      <SelectPrimitive.Root className="primitive">
        <SelectPrimitive.Trigger className="trigger">
          <SelectPrimitive.Value
            className="value"
            placeholder="Selecione uma categoria"
          />
          <SelectPrimitive.Icon>
            <CaretDown className="icon" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            side="bottom"
            position="popper"
            sideOffset={8}
            className="selectContent"
          >
            <SelectPrimitive.Viewport className="selectView">
              <SelectItem />
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </Container>
  )
}
