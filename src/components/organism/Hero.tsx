'use client'

import { ShoppingCart } from 'lucide-react'
import { ButtonIcons } from '../molecules/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="md:px-[80px] px-[20px] py-[56px] bg-[#F6F7FA]"
    >
      <div className="bg-[url('/hero.png')] rounded-xl bg-accent flex items-center justify-center bg-contain bg-bottom bg-no-repeat h-[328px] flex-col">
        <div className="text-center p-8 ">
          <div className="text-[30px] font-semibold text-white">
            Booking Sekarang!
          </div>
          <div className="text-[16px] text-white mt-4">
            Tunggu apalagi, booking sekarang property syariah impian Anda
          </div>
        </div>
        <ButtonIcons
          props={{
            className: 'mt-4',
            variant: 'default',
            color: 'primary',
          }}
        >
          <template slot="leading">
            <ShoppingCart />
          </template>
          Daftar & Beli NUB
        </ButtonIcons>
      </div>
    </section>
  )
}
