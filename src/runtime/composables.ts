import { type Dayjs } from 'dayjs'
import { useNuxtApp } from '#app'

export const useDayjs = (): Dayjs => {
  const { $dayjs } = useNuxtApp()
  return $dayjs as Dayjs
}
