import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import React from 'react'

export function InputIcons({
  props,
  className,
  children,
}: {
  readonly props?: React.ComponentProps<typeof Input>
  readonly className?: string
  readonly children?: React.ReactNode
}) {
  let leadingIcon: React.ReactNode = null
  let trailingIcon: React.ReactNode = null

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const propsElement = child.props as {
        slot: 'leading' | 'trailing'
        children?: React.ReactNode
      }
      if (propsElement.slot === 'leading') {
        leadingIcon = propsElement.children
      }
      if (propsElement.slot === 'trailing') {
        trailingIcon = propsElement.children
      }
    }
  })
  return (
    <div className="relative  rounded-md">
      <div className="absolute left-2 top-1 translate-y-1">
        {leadingIcon && <span className="mr-1">{leadingIcon}</span>}
      </div>
      <Input {...props} className={cn('!pl-10 !pr-10', className)} />
      <div className="absolute right-2 top-1 translate-y-1">
        {trailingIcon && <span className="mr-1">{trailingIcon}</span>}
      </div>
    </div>
  )
}
