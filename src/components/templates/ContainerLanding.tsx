'use client'

import Image from 'next/image'
import NavbarLanding from '../organism/NavbarLanding'
import { Phone, Mail } from 'lucide-react'
import Logo from '@/assets/img/Logo.png'

import Whatsapp from '@/assets/img/Whatsapp.png'

export default function ContainerLanding({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarLanding />
      <main className="flex-1">{children}</main>
      <footer className="flex items-center justify-center bg-[#282835] text-primary-foreground md:px-[80px] px-[20px] py-[56px]">
        <div className="grid md:grid-cols-2  lg:grid-cols-4  grid-cols-1  md:grid-rows-1 grid-rows-2 gap-8">
          <div className="w-full block md:hidden lg:block">
            <Image
              src={Logo}
              alt="Logo"
              width={156}
              height={70}
              unoptimized
              objectFit="contain"
            />
            <p className="mt-4 text-sm text-nowrap">
              Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur
            </p>
          </div>
          <div className="w-full hidden md:hidden lg:block"></div>
          <div className="w-full hidden md:block lg:hidden col-span-2">
            <Image
              src={Logo}
              alt="Logo"
              width={156}
              height={70}
              unoptimized
              objectFit="contain"
            />
            <p className="mt-4 text-sm">
              Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur
            </p>
          </div>
          <div>
            <ul>
              <li className="mb-5">Panglima Propetindo</li>
              <li className="mb-5">Tentang Kami</li>
              <li className="mb-5">Project</li>
              <li className="mb-5">Pertanyaan Umum</li>
            </ul>
          </div>
          <div>
            <div className="mb-5">Kontak</div>
            <ul>
              <li className="mb-5 flex items-center gap-2">
                <Image src={Whatsapp} width={20} height={20} alt="whatsapp" />{' '}
                <span>081224090989 (chat)</span>
              </li>
              <li className="mb-5  flex items-center gap-2">
                <Phone className="w-5 h-5" /> <span>(021) 2829-0901 </span>
              </li>
              <li className="mb-5  flex items-center gap-2">
                <Mail />
                <span className="break-words">
                  Layanan@panglimapropertindo.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
