'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import React from 'react'
export default function ButtonDropdownMenu({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let items: React.ReactNode = null
  let mainContent: React.ReactNode = null
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const propsElement = child.props as {
        slot: 'items'
        children?: React.ReactNode
      }
      if (propsElement.slot === 'items') {
        items = propsElement.children
      } else {
        mainContent = child
      }
    } else {
      mainContent = child
    }
  })
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        {mainContent}
      </DropdownMenuTrigger>
      <DropdownMenuContent>{items}</DropdownMenuContent>
    </DropdownMenu>
  )
}
