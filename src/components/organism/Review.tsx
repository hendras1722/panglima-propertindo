'use client'

import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '../atoms/Carausel'
import Image from 'next/image'
import { Ratings } from '../atoms/Rating'
import FotoUjang from '@/assets/img/fotoujang.png'
import FotoPutra from '@/assets/img/fotoPutra.png'
import FotoDedik from '@/assets/img/fotodedik.png'
import ArrayMap from '../atoms/ArrayMap'

export default function Review() {
  const listReview = [
    [
      {
        image: FotoUjang,
        name: 'Ujang Gunawan',
        rating: 4,
        comment:
          'Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.',
      },
      {
        image: FotoPutra,
        name: 'Putra Dadang Heriawan',
        rating: 4,
        comment:
          'Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.',
      },
      {
        image: FotoDedik,
        name: 'Dedik Dryfan',
        rating: 4,
        comment:
          'Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.',
      },
    ],
    [
      {
        image: FotoDedik,
        name: 'Dedik Dryfan',
        rating: 4,
        comment:
          'Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.',
      },
      {
        image: FotoPutra,
        name: 'Putra Dadang Heriawan',
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.',
      },
      {
        image: FotoDedik,
        name: 'Dedik Dryfan',
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.',
      },
    ],
    [
      {
        image: FotoDedik,
        name: 'Dedik Dryfan',
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.',
      },
      {
        image: FotoPutra,
        name: 'Putra Dadang Heriawann',
        rating: 4,
        comment:
          'Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.',
      },
      {
        image: FotoUjang,
        name: 'Ujang Gunawan',
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet consectetur. Euismod sed volutpat pharetra facilisis interdum semper ultrices. Ipsum viverra vitae tellus faucibus. Aliquam nibh pharetra elementum tellus accumsan nisi nullam ipsum morbi. Mauris enim tellus nibh massa malesuada at vulputate lacus. Dolor aliquet aliquam duis porta. Sit metus vitae elit felis ultrices. Lobortis lorem mattis sit dolor cursus. Consequat vestibulum mus vitae vel.',
      },
    ],
  ]
  return (
    <section
      id="review"
      className="md:px-[80px] px-[20px] py-[56px] bg-secondary/80 text-muted-foreground"
    >
      <div className="mb-8 text-foreground font-semibold text-6">
        Ulasan dari konsumen
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[Autoplay({ delay: 6000 })]}
        className="size-full"
      >
        <CarouselContent>
          <ArrayMap
            of={listReview}
            render={(item, index) => (
              <CarouselItem key={index + 'parentReview'}>
                <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-6">
                  <ArrayMap
                    of={item}
                    render={(item, index) => (
                      <div
                        key={index + 'childReview'}
                        className="p-6 text-[18px] bg-white w-full rounded"
                      >
                        <div className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <Image
                            width={56}
                            height={56}
                            src={item.image}
                            alt="ujang"
                            objectFit="cover"
                          />
                          <div className="text-semibold">{item.name}</div>
                        </div>
                        <Ratings
                          rating={item.rating}
                          totalStars={5}
                          variant="yellow"
                        />
                        <p className="text-sm font-normal mt-6">
                          {item.comment}
                        </p>
                      </div>
                    )}
                  />
                </div>
              </CarouselItem>
            )}
          />
        </CarouselContent>

        <CarouselDots className="mt-12" />
      </Carousel>
    </section>
  )
}
