'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import Frame from '@/assets/img/frame.png'
import Jumbotron from '@/assets/img/jumbotron.png'
import { cn } from '@/lib/utils'

export default function JumbotronPage() {
  return (
    <section
      id="jumbtron"
      className={cn(
        'flex items-center justify-start h-[532px] relative',
        `bg-[url('@/assets/img/jumbotron.png')] bg-cover bg-bottom bg-no-repeat`
      )}
    >
      <div>
        <div className="md:text-[36px] text-[24px] md:ml-[120px] ml-[20px] font-bold ">
          <span className="text-primary">Hidup Nyaman & Berkah</span> dengan
          Properti <span className="md:hidden">Syariah Kelas Dunia</span>
          <span className="items-center gap-2 md:flex hidden">
            Syariah Kelas Dunia
            <Image
              className="md:block hidden"
              src={Frame}
              width={144}
              height={48}
              alt="frame"
              unoptimized
              objectFit="contain"
            />
          </span>
          <Image
            className="md:hidden block"
            src={Frame}
            width={144}
            height={48}
            alt="frame"
            unoptimized
            objectFit="cover"
          />
        </div>
        <div className="mt-[40px] text-[20px] text-secondary-foreground  md:ml-[120px] ml-[20px] max-w-[749px]">
          Developer Properti Syariah terdepan menghadirkan solusi properti tanpa
          riba dan sesuai prinsip syariah. Daftar dan booking sekarang juga!
        </div>
        <div>
          <Button
            variant={'default'}
            className="md:ml-[120px] ml-[20px] mt-[40px]"
          >
            Daftar & Beli NUB
          </Button>
        </div>
      </div>
      {/* <div className="w-[299px] h-full bg-[#F4F4F5]"></div> */}
      {/* <Image
        src={Jumbotron}
        width={0}
        height={532}
        className="w-full h-full"
        objectFit="cover"
        unoptimized
        alt="jumbtron"
      /> */}
    </section>
  )
}
