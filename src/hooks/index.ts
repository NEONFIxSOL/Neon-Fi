import { useRouter } from 'next/navigation'

export const useHome = () => {
  const router = useRouter()
  function toHome() {
    router.push(`/`)
  }
  return { toHome }
}
