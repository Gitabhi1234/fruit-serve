
"use client"

import { Button, Menu, Portal, useCheckboxGroup } from "@chakra-ui/react"
import { HiCog } from "react-icons/hi"

export function ModeToggle () {
  const group = useCheckboxGroup({ defaultValue: ["autosave"] })
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiCog /> 
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Appearance</Menu.ItemGroupLabel>
              {items.map(({ title, value }) => (
                <Menu.CheckboxItem
                  key={value}
                  value={value}
                  checked={group.isChecked(value)}
                  onCheckedChange={() => group.toggleValue(value)}
                >
                  {title}
                  <Menu.ItemIndicator />
                </Menu.CheckboxItem>
              ))}
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const items = [
  { title: "Light", value: "Light" },
  { title: "Dark", value: "dark" },
  { title: "System", value: "System" },
]
export default ModeToggle;
