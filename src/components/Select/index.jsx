import * as SelectPrimitive from '@radix-ui/react-select'
import { CaretDown } from '@phosphor-icons/react'

import { Container } from './styles'

export function Select({
  children,
  placeholder,
  onValueChange,
  value,
  id,
  ...rest
}) {
  return (
    <Container {...rest}>
      <SelectPrimitive.Root
        className="primitive"
        value={value}
        onValueChange={onValueChange}
      >
        <SelectPrimitive.Trigger className="trigger" id={id}>
          <SelectPrimitive.Value placeholder={placeholder} />
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
              {children}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </Container>
  )
}
