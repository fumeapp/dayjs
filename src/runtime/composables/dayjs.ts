import { useNuxtApp } from '#app'
import { Dayjs } from 'dayjs'

export const useDayjs = (): Dayjs => {
  const { $dayjs } = useNuxtApp()
  return $dayjs
}
