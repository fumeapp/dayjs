import dayjs from '#build/dayjs.imports.mjs'
import { Dayjs } from 'dayjs'
import { defineNuxtPlugin } from '#app'

declare module '#app' {
  interface NuxtApp {
    $dayjs: Dayjs
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs

  }
}

export default defineNuxtPlugin(async (nuxtApp) => nuxtApp.provide('dayjs', dayjs))

// https://api.github.com/repos/iamkun/dayjs/contents/src/locale
