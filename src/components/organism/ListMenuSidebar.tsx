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
            variant={pathName === '/admin/feedback' ? 'default' : 'ghost'}
            className={`!shadow-none !w-full flex !justify-start`}
            color={pathName === '/admin/feedback' ? 'primary' : 'inherit'}
            onClick={() => router.push('/admin/feedback')}
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
              variant={pathName === '/admin/feedback' ? 'default' : 'ghost'}
              color={pathName === '/admin/feedback' ? 'primary' : 'default'}
              onClick={() => router.push('/admin/feedback')}
            >
              <MessagesSquare />
            </Button>
          </Else>
        </If>
      </div>
      {/* 

      <div className="space-y-1">
        <If condition={!sidebarCollapsed}>
          <Button
            variant={pathName === '/admin/logout' ? 'contained' : 'text'}
            onClick={handleLogout}
            startIcon={<LogOut />}
            size="small"
            className={`!shadow-none !w-full flex !justify-start`}
            classes={{
              root:
                pathName === '/admin/logout'
                  ? 'group flex items-center gap-1 !px-3 !py-2 text-sm font-medium rounded-lg transition-colors duration-150 !text-black hover:!bg-primary-600 !text-white'
                  : '!text-black  !px-3 !py-2',
            }}
          >
            {!sidebarCollapsed && 'logout'}
          </Button>
          <Else key="else-1">
            <IconButton onClick={handleLogout} aria-label="dashboard">
              <LogOut />
            </IconButton>
          </Else>
        </If>
      </div> */}
    </nav>
  )
}
