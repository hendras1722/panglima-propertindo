import React from 'react'
import { Button, ButtonProps } from '@/components/ui/button'

export function ButtonIcons({
  children,
  props,
}: {
  readonly children?: React.ReactNode
  readonly props?: ButtonProps
}) {
  let leadingIcon: React.ReactNode = null
  let mainContent: React.ReactNode = null
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
      } else {
        mainContent = child
      }
    } else {
      mainContent = child
    }
  })

  return (
    <Button {...props}>
      {leadingIcon && <span className="mr-1">{leadingIcon}</span>}
      {mainContent}
      {trailingIcon && <span className="ml-1">{trailingIcon}</span>}
    </Button>
  )
}
