import { useNuxtApp } from '#app'
import dayjs from 'dayjs'

// export declare const useDayjs: () => (string) => Dayjs;
// $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
export const useDayjs = (): (date?: dayjs.ConfigType) => dayjs.Dayjs => {
  const { $dayjs } = useNuxtApp()
  return $dayjs as unknown as (date?: dayjs.ConfigType) => dayjs.Dayjs
}
