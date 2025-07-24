'use client'

import { MessagesSquare } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { Else, If } from '../atoms/if'
import { Button } from '../ui/button'

export default function ListMenuSidebar({
  sidebarCollapsed,
}: {
  readonly sidebarCollapsed: boolean
}) {
  const pathName = usePathname()
  const router = useRouter()
  return (
    <nav className="!px-2 !py-4 space-y-1 ">
      <div className="space-y-1">
        <If condition={!sidebarCollapsed}>
          <Button
            variant={pathName === '/feedback' ? 'default' : 'ghost'}
            className={`!shadow-none !w-full flex !justify-start`}
            color={pathName === '/feedback' ? 'primary' : 'inherit'}
            onClick={() => router.push('/feedback')}
          >
            {!sidebarCollapsed && (
              <>
                <MessagesSquare /> <span>Feedback</span>
              </>
            )}
          </Button>
          <Else key="else-1">
            <Button
              aria-label="dashboard"
              variant={pathName === '/feedback' ? 'default' : 'ghost'}
              color={pathName === '/feedback' ? 'primary' : 'default'}
              onClick={() => router.push('/feedback')}
            >
              <MessagesSquare />
            </Button>
          </Else>
        </If>
      </div>
    </nav>
  )
}
