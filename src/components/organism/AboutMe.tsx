import Image from 'next/image'
import Logo from '@/assets/img/Logo.png'
import ArrayMap from '../atoms/ArrayMap'

export default function AboutMe() {
  const considers = [
    {
      count: '6+',
      title: 'Project Syariah',
    },
    {
      count: '200+',
      title: 'Test STR',
    },
    {
      count: '200+',
      title: 'Telah STR',
    },
    {
      count: '200+',
      title: 'Telah STR',
    },
    {
      count: '200+',
      title: 'Telah STR',
    },
  ]
  return (
    <section id="aboutme" className="md:p-[80px] p-[20px] bg-white">
      <h2>Tentang Kami</h2>
      <div className="flex md:flex-row flex-col items-center text-left gap-0 mt-[40px]">
        <Image src={Logo} alt="Logo" width={284} height={105} />
        <p className="text-[16px] text-accent-foreground pl-[70px] py-[35.5px] text-normal leading-[28px] font-normal">
          Sejak 1880, Panglima Propertindo menjadi Developer Syariah yang
          berkomitmen menyediakan Properti Halal Berkualitas bagi Ummat dengan
          Lingkungan yang Baik.
        </p>
      </div>
      <div className='bg-[url("@/assets/img/aboutme.png")] bg-white p-[20px] rounded-lg relative mt-[40px] mx-[40px]'>
        <div className="absolute top-0 left-0 w-full h-full bg-[#2123228A] opacity-55 rounded-lg"></div>

        <div className="grid grid-cols-5 grid-rows-1 gap-4  px-[40px] py-[96px] text-center relative">
          <ArrayMap
            of={considers}
            render={(item, index) => (
              <div
                key={index + 'considers'}
                className="border border-white bg-primary p-[20px] rounded w-full text-white"
              >
                <div>{item.count}</div>
                <div className="mt-[20px]">{item.title}</div>
              </div>
            )}
          />
        </div>
      </div>
      <div className="mt-[40px]">
        <div className="bg-white border border-border p-[20px] rounded-lg mt-[40px]">
          <div className="text-foreground font-semibold">Visi</div>
          <p className="text-[16px] text-accent-foreground mt-[20px] font-normal">
            Menjadi Developer Property Syariah Kelas Dunia, pengembang
            lingkungan pemukiman yang baik yang Menenangkan Hati.
          </p>
        </div>
        <div className="bg-white border border-border p-[20px] rounded-lg mt-[40px]">
          <div className="text-foreground font-semibold">Misi</div>
          <div className="text-[16px] text-accent-foreground mt-[20px] font-normal">
            <ul className="list-disc pl-5">
              <li>
                Mengembangkan proyek Property yang memberi value terbaik
                & ketenangan hati.
              </li>
              <li>
                Membentuk lingkungan yang berperan nyata dalam
                pembentukan Peradaban Mulia.
              </li>
              <li>
                Bertumbuh dengan Cepat dan berkesinambungan sehingga dapat
                mensejahterakan para pemangku kepentingan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
