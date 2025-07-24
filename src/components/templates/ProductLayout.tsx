'use client'
// import { Search } from 'lucide-react'
// import { useState } from 'react'
// import z from 'zod'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useRoute } from '@/composable/useRoute'
import { useApi } from '@/composable/useApi'
// import { useComputed, useReactive } from '@/composable/useComputed'

// const formSchema = z.object({
//   product_name: z.string().min(3, 'Product name must be at least 3 characters'),
//   price: z
//     .string()
//     .refine(
//       (value) => Number(value.replace(/[.]/g, '')) > 0,
//       'Stock must be at least 0'
//     ),
//   stock: z.number(),
//   description: z.string().min(3, 'Description must be at least 3 characters'),
//   active: z.boolean(),
// })

export default function ProductLayout() {
  // const [open, setOpen] = useState(false)

  const { data, isLoading } = useApi<{ name: string }>({
    url: '/v1/v1/operator/081234567890',
  })
  console.log(data, isLoading)

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     stock: 0,
  //     price: '0',
  //   },
  // })

  // const columns: {
  //   label: string
  //   minWidth: number
  //   accessor: 'name' | 'code' | 'popularity' | 'rating'
  // }[] = [
  //   {
  //     label: 'Name',
  //     minWidth: 170,
  //     accessor: 'name',
  //   },
  //   {
  //     label: 'Code',
  //     minWidth: 100,
  //     accessor: 'code',
  //   },
  //   {
  //     label: 'Popularity',
  //     minWidth: 170,
  //     accessor: 'popularity',
  //   },
  //   {
  //     label: 'Rating',
  //     minWidth: 170,
  //     accessor: 'rating',
  //   },
  // ]

  // const items = [
  //   {
  //     name: 'Frozen yoghurt',
  //     code: '123',
  //     popularity: '123',
  //     rating: '123',
  //   },
  // ]

  // const [params, setParams] = useState({
  //   page: 1,
  //   limit: 10,
  //   search: '',
  // })

  // const filterParams = useComputed(() => ({
  //   search: params.search,
  // }))

  // child components
  // const handleSearch = useReactive(
  //   () => params.search,
  //   (newValue) =>
  //     setParams((prevState) => ({
  //       ...prevState,
  //       search: newValue,
  //     }))
  // )

  return <div>Hello</div>
}
