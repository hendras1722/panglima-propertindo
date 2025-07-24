import type { Metadata } from 'next'
import { QueryProvider } from '@/components/atoms/ProviderWrapper'
import AdminLayout from '@/components/templates/AdminLayout'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Feedback',
  description: 'Admin Dashboard | Feedback',
}
export default function RootLayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <QueryProvider>
      <AdminLayout>{children}</AdminLayout>
    </QueryProvider>
  )
}
