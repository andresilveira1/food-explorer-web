import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from '@phosphor-icons/react'

export function SelectItem({ text, ...rest }) {
  return (
    <div>
      <SelectPrimitive.Item className="selectItem" {...rest}>
        <SelectPrimitive.ItemText asChild>
          <span className="selectText">{text}</span>
        </SelectPrimitive.ItemText>

        <SelectPrimitive.ItemIndicator>
          <Check className="selectIconCheck" />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    </div>
  )
}
