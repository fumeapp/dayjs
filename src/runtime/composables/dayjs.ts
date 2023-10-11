import { useNuxtApp } from '#app'
import dayjs from 'dayjs'

export const useDayjs = (date?: dayjs.ConfigType): typeof dayjs => {
  const { $dayjs } = useNuxtApp()
  return $dayjs(date)
}
