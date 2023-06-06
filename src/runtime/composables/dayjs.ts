import { useNuxtApp } from '#app'
import type { Dayjs } from 'dayjs'

export const useDayjs = (): Dayjs => {
  const { $dayjs: dayjs } = useNuxtApp()
  return dayjs as Dayjs
}
