'use client'

import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/utils/lib'

interface BaseHamburgerProps extends React.HTMLAttributes<HTMLButtonElement> {
  sidebarCollapsed?: boolean
}

export default function BaseHamburger({
  props,
  sidebarCollapsed = false,
}: {
  readonly props: React.HTMLAttributes<HTMLButtonElement>
  readonly sidebarCollapsed?: boolean
}) {
  return (
    <Button
      variant={'ghost'}
      {...props}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-150 shadow-lg"
    >
      <ChevronLeft
        className={cn(
          'w-5 h-5 text-accent',
          (sidebarCollapsed && 'rotate-180 ease-in-out duration-500') || ''
        )}
      />
    </Button>
  )
}
