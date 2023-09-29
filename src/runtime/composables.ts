import { useNuxtApp } from '#app'
import Dayjs from 'dayjs'

export const useDayjs = (): typeof Dayjs => {
  const { $dayjs: dayjs } = useNuxtApp()
  return dayjs as typeof Dayjs
}
