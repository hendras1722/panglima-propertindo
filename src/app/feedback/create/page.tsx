'use client'

import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import BaseSelect from '@/components/atoms/BaseSelect'
import { CircleCheck, Minus, Plus, Siren, XCircle } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ArrayMap from '@/components/atoms/ArrayMap'
import { generateFormData } from '@/utils/FormData'
import { toast } from 'sonner'
import { useComputed } from '@/composable/useComputed'
import { If } from '@/components/atoms/if'
import { useApi } from '@/composable/useApi'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const MAX_FILES = 5

const formSchema = yup.object().shape({
  unit: yup.string().required(),
  category: yup.string().required(),
  sub_category: yup.string().required(),
  feedback: yup.string().required(),
  image: yup.array().optional().max(MAX_FILES, `Maksimal ${MAX_FILES} gambar`),
})

interface Category {
  id: number
  name: string
}

export interface SubCategory {
  id: number
  id_category: number
  name: string
}

export default function Page() {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      image: [{ file: null }],
      unit: '',
      category: '',
      sub_category: '',
      feedback: '',
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'image',
  })

  const watchedCategory = form.watch('category')
  const fieldsComputed = useComputed(() => fields)
  const id_category = useComputed(() => watchedCategory)

  const sub_category = useApi<SubCategory[]>({
    url: '/feedback-sub-category',
    params: {
      id_category: id_category.value,
    },
    queryKey: ['feedback-sub-category', id_category.value],
    enabled: !!id_category.value,
  })

  const category = useApi<Category[]>({
    url: '/feedback-category',
    queryKey: ['/feedback-category'],
  })

  const listCategory = useComputed(() =>
    category.data?.map((item) => {
      return {
        value: String(item.id),
        label: item.name,
      }
    })
  )
  const listSubCategory = useComputed(() =>
    sub_category.data?.map((item) => {
      return {
        value: String(item.id),
        label: item.name,
      }
    })
  )

  const router = useRouter()
  const { mutate } = useApi<FormData>({
    url: '/feedback',
    method: 'POST',
    body: undefined,
    queryKey: ['/feedback-post'],
    onSuccess: () => {
      toast.success('Data successfully Submit', {
        description: 'Data successfully Submit',
        position: 'top-right',
        duration: 3000,
        richColors: true,
      })
      router.push('/feedback')
    },
  })

  function handleSubmit(data: yup.InferType<typeof formSchema>) {
    const files = Array.isArray(data.image)
      ? data.image
          .map((item: any) => (item instanceof File ? item : item?.file))
          .filter((file: File | null) => file instanceof File)
      : []
    const payload = {
      id_category: String(data.category),
      id_sub_category: String(data.sub_category),
      unit: data.unit,
      keluhan: data.feedback,
      image: files,
    }
    const formData = generateFormData(payload)
    mutate(formData)
    toast.success('Berhasil membuat feedback')
  }
  return (
    <div className="bg-white rounded-lg px-9 py-5">
      <form noValidate onSubmit={form.handleSubmit(handleSubmit)}>
        <Controller
          control={form.control}
          name="unit"
          rules={{ required: true }}
          render={({ field }) => (
            <div>
              <div className="flex gap-2 items-center">
                Unit{' '}
                <span className="bg-muted/80 text-secondary-foreground  rounded-xl border border-border px-[10px] py-[2px] text-[12px]">
                  Wajib
                </span>
              </div>
              <Input {...field} className="w-full mt-2" placeholder="Unit" />

              <span className="text-red-600">
                {form.formState.errors.unit?.message}
              </span>
            </div>
          )}
        />
        <Controller
          control={form.control}
          name="category"
          rules={{ required: true }}
          render={({ field }) => (
            <div className="mt-8">
              <div className="flex gap-1 items-center">
                Kategory <span className="text-red-600">*</span>
              </div>
              <BaseSelect
                {...field}
                className="w-full mt-2"
                select={field.value}
                onValueChange={field.onChange}
                items={listCategory.value || []}
                placeholder="Kategori"
              />
              <span className="text-red-600">
                {form.formState.errors.category?.message}
              </span>
            </div>
          )}
        />
        <Controller
          control={form.control}
          name="sub_category"
          rules={{ required: true }}
          render={({ field }) => (
            <div className="mt-8">
              <div className="flex gap-1 items-center">
                Sub Kategori <span className="text-red-600">*</span>
              </div>
              <BaseSelect
                {...field}
                disabled={
                  !id_category.value && (listCategory.value || [])?.length > 0
                }
                className="w-full mt-2"
                select={field.value}
                onValueChange={field.onChange}
                items={listSubCategory.value || []}
                placeholder="Sub Kategori"
              />
              <span className="text-red-600">
                {form.formState.errors.sub_category?.message}
              </span>
            </div>
          )}
        />
        <div className="border border-tertiary mt-8 p-4 bg-white rounded-lg">
          <div className=" text-tertiary flex items-center gap-2">
            <Siren className="w-[24px] h-[24px]" />
            <span className="font-semibold text-sm">Tips Mengisi Feedback</span>
          </div>
          <div className="mt-2 font-normal text-sm">
            Untuk mempermudah kami memahami dan mempercepat proses penanganan
            feedback Anda, berikut tips saat menuliskannya
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
            <div className="bg-slate-100 border border-border p-4 rounded-md">
              <div className="text-primary text-sm font-[500]">
                Contoh yang benar
              </div>
              <ul className="list-disc pl-4 text-sm">
                <li>
                  <div className="flex justify-between items-start gap-2">
                    <span>“Atap bocor di kamar lantai 2.”</span>
                    <CircleCheck className="w-4 h-4 text-white bg-primary rounded-full shrink-0" />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-start gap-2">
                    <span>“Gagang pintu tidak rapat pada kedua kamar.”</span>
                    <CircleCheck className="w-4 h-4 text-white bg-primary rounded-full shrink-0" />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-start gap-2">
                    <span>
                      “Genteng di ruang tamu bocor, menyebabkan air menetes
                      dekat lampu plafon.”
                    </span>
                    <CircleCheck className="w-4 h-4 text-white bg-primary rounded-full shrink-0" />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-start gap-2">
                    <span>“Air tidak mengalir di blok B.”</span>
                    <CircleCheck className="w-4 h-4 text-white bg-primary rounded-full shrink-0" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 border border-border p-4 rounded-md">
              <div className="text-red-500 text-sm font-[500]">
                Contoh yang salah
              </div>
              <ul className="list-disc pl-4 text-sm">
                <li>
                  <div className="flex justify-between items-start gap-2">
                    <span>
                      “Dinding retak.”{' '}
                      <span className="text-gray-500">
                        (Tidak ada informasi lokasi spesifik.)
                      </span>
                    </span>
                    <XCircle className="w-4 h-4 text-white bg-red-500 rounded-full shrink-0" />
                  </div>
                </li>{' '}
                <li>
                  <div className="flex justify-between items-start gap-2">
                    <span>
                      “Ada kebocoran.”{' '}
                      <span className="text-gray-500">
                        (Terlalu umum dan tidak jelas.)
                      </span>
                    </span>
                    <XCircle className="w-4 h-4 text-white bg-red-500 rounded-full shrink-0" />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-start gap-2">
                    <span>
                      “Keramik rusak.”{' '}
                      <span className="text-gray-500">
                        (Tidak menyebutkan lokasi atau kondisi detail.)
                      </span>
                    </span>
                    <XCircle className="w-4 h-4 text-white bg-red-500 rounded-full shrink-0" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Controller
          control={form.control}
          name="feedback"
          render={({ field }) => (
            <div className="mt-8">
              <div className="flex gap-1 items-center">
                Feedback <span className="text-red-600">*</span>
              </div>
              <Textarea {...field} className="w-full" rows={5} />
              {form.formState.errors.feedback && (
                <p className="text-red-600 text-sm mt-2">
                  {form.formState.errors.feedback.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          control={form.control}
          name="image"
          render={({ field }) => (
            <div className="mt-8">
              <div className="flex gap-1 items-center">
                Gambar{' '}
                <span className=" text-secondary-foreground  px-[10px] py-[2px] text-[12px]">
                  (Optional)
                </span>
              </div>
              <ArrayMap
                of={fieldsComputed.value}
                render={(item, index) => (
                  <div
                    key={index + 'image'}
                    className="flex items-center gap-3  last:mb-0 mb-3"
                  >
                    <Input
                      {...form.register('image')}
                      type="file"
                      className="lg:w-[530px] "
                      name={'image'}
                      ref={field.ref}
                      onChange={(event) => {
                        const file = event.target.files?.[0] || null
                        form.setValue(`image.${index}`, file as File, {
                          shouldValidate: true,
                        })
                      }}
                      onBlur={field.onBlur}
                    />
                    <div className="flex gap-3">
                      <Button
                        variant={'default'}
                        color="primary"
                        onClick={() => append({ image: '' })}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <If condition={index > 0}>
                        <Button
                          variant={'default'}
                          className="bg-red-500 hover:bg-red-600"
                          onClick={() => remove(index)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      </If>
                    </div>
                  </div>
                )}
              />
              {form.formState.errors.image && (
                <p className="text-red-600 text-sm mt-2">
                  {form.formState.errors.image.message}
                </p>
              )}
            </div>
          )}
        />
        <Button type="submit" className="mt-5">
          Simpan
        </Button>
      </form>
    </div>
  )
}
