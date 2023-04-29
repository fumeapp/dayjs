
import { useNuxtApp } from '#app'
export const useDayjs = () => {
  return useNuxtApp().$dayjs
}
