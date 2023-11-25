import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from '@phosphor-icons/react'

export function SelectItem() {
  return (
    <div>
      <SelectPrimitive.Item value="meal" className="selectItem">
        <SelectPrimitive.ItemText>
          <span className="selectText">Refeição</span>
        </SelectPrimitive.ItemText>

        <SelectPrimitive.ItemIndicator>
          <Check className="selectIconCheck" />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>

      <SelectPrimitive.Item value="desserts" className="selectItem">
        <SelectPrimitive.ItemText>
          <span className="selectText">Sobremesas</span>
        </SelectPrimitive.ItemText>

        <SelectPrimitive.ItemIndicator>
          <Check className="selectIconCheck" />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>

      <SelectPrimitive.Item value="drinks" className="selectItem">
        <SelectPrimitive.ItemText>
          <span className="selectText">Bebidas</span>
        </SelectPrimitive.ItemText>

        <SelectPrimitive.ItemIndicator>
          <Check className="selectIconCheck" />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    </div>
  )
}
