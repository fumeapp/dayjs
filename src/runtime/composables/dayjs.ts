import { useNuxtApp } from '#app'
import dayjs, { Dayjs } from 'dayjs'

export const useDayjs = (date?: dayjs.ConfigType): Dayjs => {
  const { $dayjs } = useNuxtApp()
  return $dayjs(date)
}
