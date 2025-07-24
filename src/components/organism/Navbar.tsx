'use client'

import { UserCircle } from 'lucide-react'
import BaseHamburger from '../atoms/BaseHamburger'

export interface GetMe {
  id: string
  name: string
  email: string
  image: string
  lastLogin: Date
  emailVerifiedAt: Date
}

export default function Navbar({
  toggleSidebar,
  sidebarCollapsed,
}: {
  readonly toggleSidebar: () => void
  readonly sidebarCollapsed?: boolean
}) {
  return (
    <header className="bg-white  shadow-sm border-b border-gray-200 h-16 flex items-center justify-between !px-4">
      <div className="flex items-center space-x-4">
        <BaseHamburger
          props={{
            onClick: toggleSidebar,
          }}
          sidebarCollapsed={sidebarCollapsed}
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-3 text-accent">
          <UserCircle className="w-4 h-4" /> <span>Name user</span>
        </div>
      </div>
    </header>
  )
}
