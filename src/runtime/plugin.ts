import dayjs from 'dayjs'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  const { locales, plugins } = useRuntimeConfig().public.dayjs
  for (const locale of locales) {
    await importLocale(locale)
  }
  for (const plugin of plugins) {
    await importPlugin(plugin)
  }
 nuxtApp.provide('dayjs', dayjs)
})

declare module '#app' {
  interface NuxtApp {
    $dayjs: typeof dayjs
  }
}

// https://api.github.com/repos/iamkun/dayjs/contents/src/locale
const importLocale = async (locale: string) => {
  let result
  switch (locale) {
    case 'en':
      result = await import('dayjs/locale/en')
      break
    case 'fr':
      result = await import('dayjs/locale/en')
      break
    default:
      throw Error(`Locale ${locale} is not supported`)
  }
  dayjs.locale(result)
}

const importPlugin = async (plugin: string) => {
  let result
  switch (plugin) {
    case 'relativeTime':
      result = await import('dayjs/plugin/relativeTime')
      break
    case 'utc':
      result = await import('dayjs/plugin/utc')
      break
    default:
      throw Error(`Plugin ${plugin} is not supported`)
  }
  dayjs.extend(result.default)
}
