import dayjs from '#build/dayjs.imports.mjs'
import * as Dayjs from 'dayjs'
import { defineNuxtPlugin } from '#app'

declare module '#app' {
  interface NuxtApp {
    $dayjs: typeof Dayjs
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $dayjs: typeof Dayjs
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs: typeof Dayjs
  }
}

export default defineNuxtPlugin(async (nuxtApp) => nuxtApp.provide('dayjs', dayjs))

// https://api.github.com/repos/iamkun/dayjs/contents/src/locale
