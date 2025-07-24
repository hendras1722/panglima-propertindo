import { CircleX } from 'lucide-react'
import Money from '@/assets/img/money.svg'
import MoneyTreePlant from '@/assets/img/money-tree-plant.svg'
import MoneyTreeHome from '@/assets/img/money-tree-home.svg'
import Harmer from '@/assets/img/harmer.svg'
import Warning from '@/assets/img/warning.svg'
import NoDeal from '@/assets/img/nodeal.svg'
import ArrayMap from '../atoms/ArrayMap'
import Image from 'next/image'

export default function WhyMe() {
  const aboutMe = [
    {
      image: Money,
      title: 'Tanpa Riba',
      description:
        'Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil',
    },
    {
      image: MoneyTreePlant,
      title: 'Tanpa KPR Bank',
      description:
        'Tanpa melibatkan pembiayaan bank konvensional, menghindari riba, gharar (ketidakpastian), dan maysir (spekulasi)',
    },
    {
      image: MoneyTreeHome,
      title: 'Tanpa Sita',
      description:
        'Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil',
    },
    {
      image: Harmer,
      title: 'Tanpa Denda',
      description:
        'Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil',
    },
    {
      image: Warning,
      title: 'Tanpa Penalti',
      description:
        'Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil',
    },
    {
      image: NoDeal,
      title: 'Tanpa Akad Bermasalah',
      description:
        'Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil',
    },
  ]
  return (
    <section
      id="whyme"
      className='bg-[url("@/assets/img/bg-about.png")] bg-[#282835] md:px-[120px] px-[20px] py-[80px] text-white'
    >
      <div className="flex md:flex-row flex-col items-center text-left gap-4 text-primary-foreground">
        <div className="text-[30px] font-bold leading-[36px]">
          Kenapa Harus{' '}
          <span className="text-accent text-nowrap">Panglima Propertindo?</span>
        </div>
        <div className="text-white text-[16px]">
          Dengan komitmen penuh pada prinsip-prinsip syariah, kami menghadirkan
          properti berkualitas tinggi yang memberikan keamanan dan keberkahan
          bagi Anda dan keluarga.
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1  grid-rows-2 gap-4 mt-[40px]">
        <ArrayMap
          of={aboutMe}
          render={(item, index) => (
            <div key={index + 'about'} className="bg-primary p-5 rounded-lg">
              <div className="flex md:flex-row flex-col items-center">
                <div className="p-2 w-fit relative">
                  <div className="bg-[#fff] w-[48px] relative h-[48px] rounded-lg flex items-center justify-center">
                    <Image
                      src={item.image}
                      width={0}
                      height={0}
                      className="w-full"
                      alt={item.image}
                    />
                  </div>
                  <div className="bg-[#fff] absolute bottom-0 right-0 rounded-full">
                    <CircleX color="red" />
                  </div>
                </div>
                <div className="text-[#fff] font-semibold">{item.title}</div>
              </div>
              <div className="mt-4 text-[#fff] text-sm">{item.description}</div>
            </div>
          )}
        />
      </div>
    </section>
  )
}
