import dayjs from '#build/dayjs.imports.mjs'
import { defineNuxtPlugin } from '#app'

declare module '#app' {
  interface NuxtApp {
    $dayjs: typeof dayjs
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $dayjs: typeof dayjs
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $dayjs: typeof dayjs
  }
}

export default defineNuxtPlugin(async nuxtApp => nuxtApp.provide('dayjs', dayjs))
