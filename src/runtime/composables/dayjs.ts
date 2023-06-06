import { useNuxtApp } from '#app'
import * as Dayjs from 'dayjs'

export const useDayjs = (): typeof Dayjs => {
  const { $dayjs: dayjs } = useNuxtApp()
  return dayjs as typeof Dayjs
}
