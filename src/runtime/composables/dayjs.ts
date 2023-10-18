import { useNuxtApp } from '#app'
import dayjs from '#build/dayjs.imports.mjs'

export const useDayjs = (): typeof dayjs => {
  const { $dayjs } = useNuxtApp()
  return $dayjs
}
