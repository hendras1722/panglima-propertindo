'use client'

import {
  CalendarDays,
  Check,
  ChevronLeft,
  Ellipsis,
  Home,
  LayoutGrid,
  LayoutList,
  MessageSquareDashed,
  MessagesSquare,
  RefreshCcw,
  Star,
} from 'lucide-react'
import Image from 'next/image'
import Feedback from '@/assets/img/bg-detail.png'
import { Ratings } from '@/components/atoms/Rating'
import { useApi } from '@/composable/useApi'
import { useComputed } from '@/composable/useComputed'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useRoute } from '@/composable/useRoute'
import { format } from 'date-fns'
import FeedbackDetailSkeleton from '@/components/atoms/SkeletonDetailAdmin'

interface List {
  id: number
  category: string
  sub_category: string
  unit: string
  status: 'resolved' | 'pending' | 'in_progress' | 'waiting'
  keluhan: string
  created_at: Date
  tiket: string
}

export default function Page() {
  const { data, isPending } = useApi<List[]>({
    url: '/feedback',
  })

  const route = useRoute()
  const getItems = useComputed(() => {
    const path = route.pathname.split('/')[route.pathname.split('/').length - 1]
    return (
      (data
        ?.map((item) => {
          return {
            ...item,
            tiket: item.unit + ' - ' + item.id,
          }
        })
        .filter((item) => {
          return item.tiket === decodeURI(path)
        })?.[0] as List) ?? {}
    )
  })
  console.log(getItems.value)
  const router = useRouter()
  if (isPending) return <FeedbackDetailSkeleton />
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-3 lg:items-center items-start justify-between">
        <div className="flex items-center justify-between p-4 gap-3 bg-white shadow-sm w-fit rounded-lg">
          <Home className="w-[16px] h-[16px]" /> <span>/</span>{' '}
          <MessagesSquare className="w-[16px] h-[16px]" /> <span>Feedback</span>{' '}
          <span>/</span> <span>Detail</span>
        </div>
      </div>
      <div className="mt-5 flex gap-2 items-center">
        <Button
          variant={'default'}
          className="bg-white text-primary border border-primary min-w-fit hover:bg-white hover:text-primary hover:shadow-lg"
          onClick={() => router.push('/feedback')}
        >
          <ChevronLeft />
        </Button>
        <span>Detail Feedback</span>
      </div>
      <div className="p-4 bg-white rounded mt-5 w-full">
        <div className="flex gap-2 mb-4">
          {getItems.value.tiket}{' '}
          <span className="px-2 border border-primary rounded-full bg-primary/10 text-primary text-[12px] w-fit">
            {' '}
            {getItems.value.unit}
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 grid-rows-1 ">
          <div>
            <Image
              src={Feedback}
              width={280}
              height={480}
              alt="feedback"
              objectFit="contain"
            />
            <div className="flex justify-center w-fit gap-2 mt-2 ">
              <Image
                src={Feedback}
                width={88}
                height={88}
                alt="feedback"
                className="rounded-[8px]"
                objectFit="contain"
              />
              <Image
                src={Feedback}
                width={88}
                height={88}
                alt="feedback"
                className="rounded-[8px]"
                objectFit="contain"
              />
              <Image
                src={Feedback}
                width={88}
                height={88}
                alt="feedback"
                className="rounded-[8px]"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex flex-col lg:col-span-3 items-start mt-2 ml-1">
            <div className="grid grid-cols-1 grid-rows-2 gap-8 w-full">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 grid-rows-2 gap-8">
                <div>
                  <div className="flex gap-2 items-center text-muted-foreground">
                    <CalendarDays className="w-[16px] h-[16px] " />
                    <div>Tanggal dibuat</div>
                  </div>
                  <div className="mt-2">
                    {format(getItems.value.created_at, 'dd MMMM yyyy, HH:mm')}
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 items-center text-muted-foreground">
                    <Ellipsis className="w-[16px] h-[16px] " />
                    <div>Status</div>
                  </div>
                  <div className="mt-2">
                    <div
                      className={cn(
                        'px-2 py-[5px] border border-muted-50 rounded-full text-[14px] w-fit',
                        (getItems.value.status === 'resolved' &&
                          ' text-primary') ||
                          'text-accent'
                      )}
                    >
                      {(getItems.value.status === 'resolved' && (
                        <Check className="w-[16px] h-[16px] inline-block mr-1" />
                      )) || (
                        <RefreshCcw className="w-[16px] h-[16px] inline-block mr-1" />
                      )}
                      {getItems.value.status === 'resolved' && 'Selesai'}
                      {getItems.value.status === 'pending' && 'Belum Selesai'}
                      {getItems.value.status === 'in_progress' &&
                        'Dalam Proses'}
                      {getItems.value.status === 'waiting' && 'Menunggu'}
                    </div>
                  </div>
                </div>
                <div className="row-start-2">
                  <div className="flex gap-2 items-center text-muted-foreground">
                    <LayoutGrid className="w-[16px] h-[16px] " />
                    <div>Kategory</div>
                  </div>
                  <div className="mt-2">
                    <div>{getItems.value.category}</div>
                  </div>
                </div>
                <div className="row-start-2">
                  <div className="flex gap-2 items-center text-muted-foreground">
                    <LayoutList className="w-[16px] h-[16px] " />
                    <div>Sub Kategori</div>
                  </div>
                  <div className="mt-2">
                    <div className="border border-border font-[500] px-[10px]  rounded-full text-sm w-fit">
                      {getItems.value.sub_category}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 mt-4 bg-muted/50 border border-border rounded-lg text-secondary-foreground text-sm w-full">
                <div className="flex items-center gap-2">
                  <MessageSquareDashed className="w-[16px] h-[16px]" />
                  <span>Keluhan</span>
                </div>
                <div className="text-left text-foreground text-sm mt-2 line-clamp-3 ">
                  {getItems.value.keluhan}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 mt-4 bg-white border border-accent rounded-lg text-secondary-foreground text-sm ">
            <div className="flex items-center gap-2">
              <Star className="w-[16px] h-[16px]" />
              <span>Rating & Ulasan</span>
            </div>
            <div className="text-foreground text-sm mt-2 ">
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
          </div>
        </div>
      </div>
    </div>
  )
}
