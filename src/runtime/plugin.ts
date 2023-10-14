import dayjs from '#build/dayjs.imports.mjs'
import { defineNuxtPlugin } from '#app'

declare module '#app' {
  interface NuxtApp {
    $dayjs: (...args: any[]) => dayjs.Dayjs
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $dayjs: (...args: any[]) => dayjs.Dayjs
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs: (...args: any[]) => dayjs.Dayjs

  }
}

export default defineNuxtPlugin(async (nuxtApp) => nuxtApp.provide('dayjs', dayjs))
