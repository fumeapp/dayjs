import { useNuxtApp } from '#app'

// export declare const useDayjs: () => (string) => Dayjs;
// $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
export const useDayjs = () => {
  const { $dayjs } = useNuxtApp()
  return $dayjs
}
