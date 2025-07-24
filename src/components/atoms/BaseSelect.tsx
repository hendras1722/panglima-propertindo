'use client'

import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import ArrayMap from './ArrayMap'
interface ItemsSelect {
  label: string
  value: string | number
}

export default function BaseSelect({
  select,
  placeholder,
  items,
  onValueChange,
  className = 'w-[280px]',
  disabled,
  ...props
}: {
  readonly select: string
  readonly placeholder: string
  readonly items: ItemsSelect[]
  readonly onValueChange?: (value: string) => void
  readonly props?: React.ComponentProps<typeof Select>
  readonly className?: string
  readonly disabled?: boolean
}) {
  return (
    <Select
      defaultValue={select}
      onValueChange={onValueChange}
      {...props}
      disabled={disabled}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <ArrayMap
            of={items}
            render={(item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            )}
          />
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
