import { useNuxtApp } from '#app'
export const useDayjs = () => {
  const { $dayjs: dayjs } = useNuxtApp()
  return dayjs
}
