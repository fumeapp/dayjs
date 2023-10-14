import { useNuxtApp } from '#app'
import { Dayjs } from 'dayjs'

export const useDayjs = (): (...args: any[]) => Dayjs => {
  const { $dayjs } = useNuxtApp()
  return $dayjs
}
