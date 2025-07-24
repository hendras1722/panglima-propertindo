'use client'

import Image from 'next/image'
import Logo from '@/assets/img/Logo.png'
import { Button } from '../ui/button'
import ButtonDropdownMenu from '../atoms/ButtonDropdownMenu'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import ArrayMap from '../atoms/ArrayMap'
import { default as ref } from '@/composable/ref'
import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NavbarLanding() {
  const itemsData = ref<{ label: string; value: string }[]>([
    {
      label: 'Perumahan Halal Elfida Mulia',
      value: 'project-1',
    },
    {
      label: 'Salima Memorial Park - Sambutan',
      value: 'project-2',
    },
    {
      label: 'Pesona Elfida',
      value: 'project-3',
    },
    {
      label: 'Salima Memorial Park - Sambutan',
      value: 'project-2',
    },
    {
      label: 'Royal Garden Panglima',
      value: 'project-2',
    },
    {
      label: 'Mulia Park Regency',
      value: 'project-2',
    },
  ])
  const router = useRouter()
  return (
    <div className="flex items-center justify-between md:px-[120px] py-[22px] px-5 text-white sticky top-0 z-10 bg-white">
      <Image
        className="md:block hidden"
        src={Logo}
        alt="Logo"
        width={156}
        height={70}
      />
      <Image
        className="md:hidden block"
        src={Logo}
        alt="Logo"
        width={100}
        height={70}
      />
      <nav className="space-x-4 hidden md:block text-foreground">
        <ul className="flex items-center space-x-4">
          <li className="hover:underline cursor-pointer">Beranda</li>
          <li className="hover:underline cursor-pointer">
            <ButtonDropdownMenu>
              <div className="flex items-center gap-1">
                Project <ChevronDown />
              </div>
              <template slot="items">
                <ArrayMap
                  of={itemsData.value}
                  render={(item, index) => (
                    <DropdownMenuItem
                      className="hover:outline-none hover:bg-slate-500 p-1 rounded hover:!text-white"
                      key={item.value + index}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  )}
                />
              </template>
            </ButtonDropdownMenu>
          </li>
          <li className="hover:underline cursor-pointer">Tentang Kami</li>
          <li className="hover:underline cursor-pointer">Pertanyaan Umum</li>
          <li className="hover:underline cursor-pointer">Cara Booking</li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <Button
          className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-white"
          size={'sm'}
        >
          Daftar
        </Button>
        <Button
          variant={'default'}
          size={'sm'}
          onClick={() => router.push('/admin/feedback')}
        >
          Masuk
        </Button>
      </div>
    </div>
  )
}
