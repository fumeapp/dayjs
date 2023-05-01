import { defu } from 'defu'
import { defineNuxtModule, addPlugin, addImports, createResolver, addTemplate } from '@nuxt/kit'
import { makeImports } from './imports'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * An array of optional locales to load
   * @example ['en', 'fr']
   */

  locales?: string[]

  /**
   * An array of optional plugins to load
   * @example ['relativeTime', 'utc']
   */

  plugins?: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'dayjs',
    configKey: 'dayjs',
    compatibility: {
      nuxt: '^3'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    locales: [],
    plugins: ['relativeTime', 'utc']

  },
  setup (options, nuxt) {

    const resolver = createResolver(import.meta.url)
    nuxt.options.runtimeConfig.public.dayjs = defu(nuxt.options.runtimeConfig.dayjs, options)

    addPlugin(resolver.resolve('./runtime/plugin'))
    addImports({
      name: 'useDayjs',
      as: 'useDayjs',
      from: resolver.resolve('./runtime/composables/dayjs')
    })
    addTemplate({
      filename: 'dayjs.imports.mjs',
      getContents: () => makeImports(options)
    })


  }
})
