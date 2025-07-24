'use client'

import { ButtonIcons } from '@/components/molecules/Button'
import {
  CalendarDays,
  Check,
  Home,
  LayoutGrid,
  LayoutList,
  MessageSquareDashed,
  MessagesSquare,
  PlusSquare,
  RefreshCcw,
  Search,
  Star,
} from 'lucide-react'
import Image from 'next/image'
import Message from '@/assets/img/message.svg'
import { InputIcons } from '@/components/molecules/Input'
import Feedback from '@/assets/img/bgFeedback.png'
import { Ratings } from '@/components/atoms/Rating'
import BaseSelect from '@/components/atoms/BaseSelect'
import { default as ref } from '@/composable/ref'
import { useApi } from '@/composable/useApi'
import { useComputed } from '@/composable/useComputed'
import ArrayMap from '@/components/atoms/ArrayMap'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import LoadingSkeleton from '@/components/atoms/SkeletonAdmin'
import { Else, If } from '@/components/atoms/if'

interface List {
  id: number
  category: string
  sub_category: string
  unit: string
  status: 'resolved' | 'pending' | 'in_progress' | 'waiting'
  keluhan: string
  created_at: Date
}

export default function Page() {
  const unit = ref('')
  const status = ref('')
  const tiket = ref('')

  const filterParams = useComputed(() => {
    return {
      unit: unit.value,
      status: status.value,
      tiket: tiket.value,
    }
  })
  const { data, isPending } = useApi<List[]>({
    url: '/feedback',
  })

  const getListCategory = useComputed(() => {
    return data?.map((item) => {
      return {
        ...item,
        tiket: item.unit + ' - ' + item.id,
      }
    })
  })

  const getItems = useComputed(() => {
    const tiketValue = filterParams.value.tiket
    const statusValue =
      filterParams.value.status === 'all' ? '' : filterParams.value.status
    const unitValue =
      filterParams.value.unit === 'all' ? '' : filterParams.value.unit
    if (!tiketValue && !statusValue && !unitValue) return getListCategory.value
    return getListCategory.value
      ?.filter((item) => {
        if (!tiketValue) return item
        return item.tiket
          .toLowerCase()
          .includes(String(tiketValue).toLowerCase())
      })
      .filter((item) => {
        if (!statusValue) return item
        return item.status
          .toLowerCase()
          .includes(String(statusValue).toLowerCase())
      })
      .filter((item) => {
        if (!unitValue) return item
        return item.unit.toLowerCase() === String(unitValue).toLowerCase()
      })
  })

  const router = useRouter()
  if (isPending) return <LoadingSkeleton />
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-3 lg:items-center items-start justify-between">
        <div className="flex items-center justify-between p-4 gap-3 bg-white shadow-sm w-fit rounded-lg">
          <Home className="w-[16px] h-[16px]" /> <span>/</span>{' '}
          <MessagesSquare className="w-[16px] h-[16px]" /> <span>Feedback</span>
        </div>
        <ButtonIcons
          props={{
            className: 'w-full md:w-fit',
            variant: 'default',
            color: 'primary',
            size: 'lg',
            onClick: () => {
              router.push('/feedback/create')
            },
          }}
        >
          <template slot="leading">
            <PlusSquare />
          </template>
          Add Feedback
        </ButtonIcons>
      </div>
      <div className="border border-primary px-4 py-7 rounded-lg bg-white mt-5">
        <div className="flex items-center gap-2 ">
          <Image src={Message} width={24} height={24} alt="message" />{' '}
          <span className="font-semibold">
            Jangan Lupa Untuk Memberi Ulasan!
          </span>
        </div>
        <p className="mt-5 text-muted-foreground text-sm font-normal">
          Sepertinya Anda belum memberikan ulasan untuk Feedback yang sudah
          selesai di bawah ini
        </p>
        <div className="mt-5 flex items-center gap-2 overflow-auto">
          <ButtonIcons>
            <template slot="leading">
              <MessagesSquare className="w-[12px] h-[12px]" />
            </template>
            A12-75-111124
          </ButtonIcons>
          <ButtonIcons>
            <template slot="leading">
              <MessagesSquare className="w-[12px] h-[12px]" />
            </template>
            A12-75-111120
          </ButtonIcons>
        </div>
      </div>

      <div className="mt-5 flex lg:flex-row flex-col lg:items-center items-start lg:justify-between justify-start gap-5 lg:gap-0">
        <div className="text-left">Daftar Feedback</div>
        <div className="flex lg:flex-row flex-col lg:items-center items-start gap-2 justify-center w-full lg:w-fit">
          <BaseSelect
            items={[
              {
                label: 'Semua',
                value: 'all',
              },
              ...(getListCategory.value ?? []).map((item) => ({
                label: item.unit,
                value: item.unit,
              })),
            ]}
            className="bg-white lg:w-[280px] w-full"
            placeholder="Unit"
            select={unit.value}
            onValueChange={(item) => {
              unit.value = item
            }}
          />
          <BaseSelect
            items={[
              {
                label: 'Semua',
                value: 'all',
              },
              {
                label: 'Resolved',
                value: 'resolved',
              },
              {
                label: 'Pending',
                value: 'pending',
              },
              {
                label: 'In Progress',
                value: 'in_progress',
              },
              {
                label: 'Waiting',
                value: 'waiting',
              },
            ]}
            className="bg-white lg:w-[280px] w-full"
            placeholder="status"
            select={status.value}
            onValueChange={(item) => {
              status.value = item
            }}
          />
          <InputIcons
            className=" !bg-white"
            props={{
              placeholder: 'Cari no. Tiket',
              onChange: (e) => {
                tiket.value = e.target.value
              },
              className: 'w-full',
            }}
          >
            <template slot="leading">
              <Search className="w-[20px] h-[20px] !text-[#E4E4E7]" />
            </template>
          </InputIcons>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1  grid-rows-1 gap-[20px] mt-5">
        <ArrayMap
          of={getItems.value ?? []}
          render={(item, index) => (
            <button
              onClick={() => router.push(`/feedback/${item.tiket}`)}
              key={index + 'product'}
              className="p-4 bg-white rounded"
            >
              <Image
                src={Feedback}
                width={0}
                height={0}
                alt="feedback"
                objectFit="cover"
              />
              <div className="flex justify-between items-center mt-2">
                <div>{item.tiket}</div>
                <div
                  className={cn(
                    'px-2 py-[5px] border border-muted-50 rounded-full text-[10px]',
                    (item.status === 'resolved' && ' text-primary') ||
                      'text-accent'
                  )}
                >
                  {(item.status === 'resolved' && (
                    <Check className="w-[16px] h-[16px] inline-block mr-1" />
                  )) || (
                    <RefreshCcw className="w-[16px] h-[16px] inline-block mr-1" />
                  )}
                  {item.status === 'resolved' && 'Selesai'}
                  {item.status === 'pending' && 'Belum Selesai'}
                  {item.status === 'in_progress' && 'Dalam Proses'}
                  {item.status === 'waiting' && 'Menunggu'}
                </div>
              </div>
              <div>
                <div className="px-2 border border-primary rounded-full bg-primary/10 text-primary text-[12px] w-fit mt-2">
                  {item.unit}
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <CalendarDays className="w-[16px] h-[16px] text-[#71717A]" />
                  <span className="text-secondary-foreground text-sm">
                    20 November 2024, 14:20
                  </span>
                </div>
                <div className="mt-4 ">
                  <div className="flex items-center gap-2 text-secondary-foreground text-sm">
                    <LayoutGrid className="w-[16px] h-[16px]" />
                    Kategori
                  </div>
                  <div className="text-left font-[500] mt-2 text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="mt-4 ">
                  <div className="flex items-center gap-2 text-secondary-foreground text-sm">
                    <LayoutList className="w-[16px] h-[16px]" />
                    Sub Kategori
                  </div>
                  <div className="mt-[10px] flex items-center gap-2">
                    <div className="border border-border font-[500] px-[10px]  rounded-full text-sm w-fit">
                      {item.sub_category}
                    </div>
                  </div>
                </div>
                <div className="p-4 mt-4 bg-muted/50 border border-border rounded-lg text-secondary-foreground text-sm ">
                  <div className="flex items-center gap-2">
                    <MessageSquareDashed className="w-[16px] h-[16px]" />
                    <span>Keluhan</span>
                  </div>
                  <div className="text-left text-foreground text-sm mt-2 line-clamp-3 ">
                    {item.keluhan}
                  </div>
                </div>
                <div className="p-4 mt-4 bg-white border border-accent rounded-lg text-secondary-foreground text-sm min-h-[104px]">
                  <div className="flex items-center gap-2">
                    <Star className="w-[16px] h-[16px]" />
                    <span>Rating</span>
                  </div>
                  <If condition={index % 2 === 0}>
                    <div className="text-foreground text-sm text-left mt-2">
                      <div className="grid grid-cols-2 grid-rows-1 gap-4">
                        <div>
                          <div>CSA</div>
                          <Ratings
                            rating={4}
                            totalStars={5}
                            variant="yellow"
                            className="mt-2"
                            disabled
                          />
                        </div>
                        <div>
                          <div>Konstruksi</div>
                          <Ratings
                            disabled
                            rating={4}
                            totalStars={5}
                            variant="yellow"
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>
                    <Else key={'else'}>
                      <div className="text-foreground text-sm text-left mt-2">
                        -
                      </div>
                    </Else>
                  </If>
                </div>
              </div>
            </button>
          )}
        />
      </div>
    </div>
  )
}
