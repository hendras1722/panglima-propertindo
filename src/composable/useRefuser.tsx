import { useCallback, useRef } from 'react'

export default function useRefusers<T = HTMLElement>() {
  const refs = useRef<Record<string, T | null>>({})
  const setRefs = useCallback(
    (key: string) => (el: T | null) => {
      refs.current[key] = el
    },
    []
  )

  return {
    refs,
    setRefs,
  }
}
