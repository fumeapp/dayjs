import { defineNuxtModule, addPlugin, addImports, createResolver, addTemplate } from '@nuxt/kit'

export interface RelativeTimeOptions {
  future: string,
  past: string,
  s: string,
  m: string,
  mm: string,
  h: string,
  hh: string,
  d: string,
  dd: string,
  M: string,
  MM: string,
  y: string,
  yy: string,
}

interface FormatOptions {
  LT: string,
  LTS: string,
  L: string,
  LL: string,
  LLL: string,
  LLLL: string,
}

interface DefaultLocaleOptions {
  name?: string
  weekdays?: string[]
  months?: string[]
  /**
   * The starting day of a week, 1 for Monday / 7 for Sunday
   */
  weekStart?: number
  /**
   * Ability to configure relatvieTime with updateLocale
   * https://day.js.org/docs/en/customization/relative-time
   */
  weekdaysShort?: string[]
  monthsShort?: string[]
  weekdaysMin?: string[]
  ordinal?: (n: number) => number | string
  formats?: FormatOptions
  relativeTime?: RelativeTimeOptions
}

type BuiltInPluginName =
  | 'advancedFormat'
  | 'arraySupport'
  | 'badMutable'
  | 'bigIntSupport'
  | 'buddhistEra'
  | 'calendar'
  | 'customParseFormat'
  | 'dayOfYear'
  | 'devHelper'
  | 'duration'
  | 'isBetween'
  | 'isLeapYear'
  | 'isMoment'
  | 'isSameOrAfter'
  | 'isSameOrBefore'
  | 'isToday'
  | 'isTomorrow'
  | 'isYesterday'
  | 'isoWeek'
  | 'isoWeeksInYear'
  | 'localeData'
  | 'localizedFormat'
  | 'minMax'
  | 'objectSupport'
  | 'pluralGetSet'
  | 'preParsePostFormat'
  | 'quarterOfYear'
  | 'relativeTime'
  | 'timezone'
  | 'toArray'
  | 'toObject'
  | 'updateLocale'
  | 'utc'
  | 'weekOfYear'
  | 'weekYear'
  | 'weekday'

type BuiltInLocale =
  | 'af'
  | 'af'
  | 'am'
  | 'am'
  | 'ar-dz'
  | 'ar-dz'
  | 'ar-iq'
  | 'ar-iq'
  | 'ar-kw'
  | 'ar-kw'
  | 'ar-ly'
  | 'ar-ly'
  | 'ar-ma'
  | 'ar-ma'
  | 'ar-sa'
  | 'ar-sa'
  | 'ar-tn'
  | 'ar-tn'
  | 'ar'
  | 'ar'
  | 'az'
  | 'az'
  | 'be'
  | 'be'
  | 'bg'
  | 'bg'
  | 'bi'
  | 'bi'
  | 'bm'
  | 'bm'
  | 'bn-bd'
  | 'bn-bd'
  | 'bn'
  | 'bn'
  | 'bo'
  | 'bo'
  | 'br'
  | 'br'
  | 'bs'
  | 'bs'
  | 'ca'
  | 'ca'
  | 'cs'
  | 'cs'
  | 'cv'
  | 'cv'
  | 'cy'
  | 'cy'
  | 'da'
  | 'da'
  | 'de-at'
  | 'de-at'
  | 'de-ch'
  | 'de-ch'
  | 'de'
  | 'de'
  | 'dv'
  | 'dv'
  | 'el'
  | 'el'
  | 'en-au'
  | 'en-au'
  | 'en-ca'
  | 'en-ca'
  | 'en-gb'
  | 'en-gb'
  | 'en-ie'
  | 'en-ie'
  | 'en-il'
  | 'en-il'
  | 'en-in'
  | 'en-in'
  | 'en-nz'
  | 'en-nz'
  | 'en-sg'
  | 'en-sg'
  | 'en-tt'
  | 'en-tt'
  | 'en'
  | 'en'
  | 'eo'
  | 'eo'
  | 'es-do'
  | 'es-do'
  | 'es-mx'
  | 'es-mx'
  | 'es-pr'
  | 'es-pr'
  | 'es-us'
  | 'es-us'
  | 'es'
  | 'es'
  | 'et'
  | 'et'
  | 'eu'
  | 'eu'
  | 'fa'
  | 'fa'
  | 'fi'
  | 'fi'
  | 'fo'
  | 'fo'
  | 'fr-ca'
  | 'fr-ca'
  | 'fr-ch'
  | 'fr-ch'
  | 'fr'
  | 'fr'
  | 'fy'
  | 'fy'
  | 'ga'
  | 'ga'
  | 'gd'
  | 'gd'
  | 'gl'
  | 'gl'
  | 'gom-latn'
  | 'gom-latn'
  | 'gu'
  | 'gu'
  | 'he'
  | 'he'
  | 'hi'
  | 'hi'
  | 'hr'
  | 'hr'
  | 'ht'
  | 'ht'
  | 'hu'
  | 'hu'
  | 'hy-am'
  | 'hy-am'
  | 'id'
  | 'id'
  | 'is'
  | 'is'
  | 'it-ch'
  | 'it-ch'
  | 'it'
  | 'it'
  | 'ja'
  | 'ja'
  | 'jv'
  | 'jv'
  | 'ka'
  | 'ka'
  | 'kk'
  | 'kk'
  | 'km'
  | 'km'
  | 'kn'
  | 'kn'
  | 'ko'
  | 'ko'
  | 'ku'
  | 'ku'
  | 'ky'
  | 'ky'
  | 'lb'
  | 'lb'
  | 'lo'
  | 'lo'
  | 'lt'
  | 'lt'
  | 'lv'
  | 'lv'
  | 'me'
  | 'me'
  | 'mi'
  | 'mi'
  | 'mk'
  | 'mk'
  | 'ml'
  | 'ml'
  | 'mn'
  | 'mn'
  | 'mr'
  | 'mr'
  | 'ms-my'
  | 'ms-my'
  | 'ms'
  | 'ms'
  | 'mt'
  | 'mt'
  | 'my'
  | 'my'
  | 'nb'
  | 'nb'
  | 'ne'
  | 'ne'
  | 'nl-be'
  | 'nl-be'
  | 'nl'
  | 'nl'
  | 'nn'
  | 'nn'
  | 'oc-lnc'
  | 'oc-lnc'
  | 'pa-in'
  | 'pa-in'
  | 'pl'
  | 'pl'
  | 'pt-br'
  | 'pt-br'
  | 'pt'
  | 'pt'
  | 'rn'
  | 'rn'
  | 'ro'
  | 'ro'
  | 'ru'
  | 'ru'
  | 'rw'
  | 'rw'
  | 'sd'
  | 'sd'
  | 'se'
  | 'se'
  | 'si'
  | 'si'
  | 'sk'
  | 'sk'
  | 'sl'
  | 'sl'
  | 'sq'
  | 'sq'
  | 'sr-cyrl'
  | 'sr-cyrl'
  | 'sr'
  | 'sr'
  | 'ss'
  | 'ss'
  | 'sv-fi'
  | 'sv-fi'
  | 'sv'
  | 'sv'
  | 'sw'
  | 'sw'
  | 'ta'
  | 'ta'
  | 'te'
  | 'te'
  | 'tet'
  | 'tet'
  | 'tg'
  | 'tg'
  | 'th'
  | 'th'
  | 'tk'
  | 'tk'
  | 'tl-ph'
  | 'tl-ph'
  | 'tlh'
  | 'tlh'
  | 'tr'
  | 'tr'
  | 'tzl'
  | 'tzl'
  | 'tzm-latn'
  | 'tzm-latn'
  | 'tzm'
  | 'tzm'
  | 'ug-cn'
  | 'ug-cn'
  | 'uk'
  | 'uk'
  | 'ur'
  | 'ur'
  | 'uz-latn'
  | 'uz-latn'
  | 'uz'
  | 'uz'
  | 'vi'
  | 'vi'
  | 'x-pseudo'
  | 'x-pseudo'
  | 'yo'
  | 'yo'
  | 'zh-cn'
  | 'zh-cn'
  | 'zh-hk'
  | 'zh-hk'
  | 'zh-tw'
  | 'zh-tw'
  | 'zh'
  | 'zh'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * An array of optional locales to load
   * @example ['en', 'fr']
   */

  locales?: BuiltInLocale[]

  /**
   * The default locale to use
   */
  defaultLocale?: BuiltInLocale | [BuiltInLocale, DefaultLocaleOptions]


  /**
   * The default timezone to use
   */
  defaultTimezone?: string

  /**
   * An array of built-in optional plugins to load
   * @example ['timezone', 'utc']
   */

  plugins?: BuiltInPluginName[]

  /**
   * An array of external optional plugins to load
   * @example ['timezone', 'utc']
   */

  externalPlugins?: { name: string, package: string, option?: unknown }[]

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
    plugins: ['relativeTime', 'utc'],
    externalPlugins: [],
    defaultLocale: undefined,
    defaultTimezone: undefined,
  },
  setup(options, nuxt) {

    const resolver = createResolver(import.meta.url)
    options.plugins = [...new Set(options.plugins)]
    options.externalPlugins = [...new Set(options.externalPlugins)]

    if (options.defaultTimezone && !options.plugins.includes('timezone'))
      throw new Error('You must include the timezone plugin in order to set a default timezone')

    addPlugin(resolver.resolve('./runtime/plugin'))

		nuxt.options.alias["#dayjs"] = resolver.resolve("./runtime/composables/dayjs");
    addImports({
      name: 'useDayjs',
      as: 'useDayjs',
      from: nuxt.options.alias["#dayjs"]
    })

    addTemplate({
      filename: 'dayjs.imports.mjs',
      getContents: () => generateImports(options),
      write: true,
    })

    // Add dayjs plugin types
    nuxt.hook('prepare:types', ({ references }) => {
      if (options.plugins) {
        const plugins = options.plugins.map((p) => ({ types: `dayjs/plugin/${p}` }))
        references.push(...plugins)
      }
      if (options.externalPlugins) {
        const externalPlugins = options.externalPlugins.map((p) => ({ types: p.package }))
        references.push(...externalPlugins)
      }
    })
  }
})

const generateImports = ({ locales, plugins, externalPlugins, defaultLocale, defaultTimezone }: ModuleOptions) => `
// Generated by dayjs-nuxt-module
import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'

${locales?.map(locale => `import 'dayjs/locale/${locale}'`).join('\n')}
${plugins?.map(plugin => `import ${plugin} from 'dayjs/plugin/${plugin}'`).join('\n')}
${externalPlugins?.map(plugin => `import ${plugin.name} from '${plugin.package}'`).join('\n')}

dayjs.extend(updateLocale)

${plugins?.map(plugin => `dayjs.extend(${plugin})`).join('\n')}
${externalPlugins?.map(plugin => `dayjs.extend(${plugin.name}, ${JSON.stringify(plugin.option)})`).join('\n')}
${defaultTimezone ? `dayjs.tz.setDefault('${defaultTimezone}')` : ''}

// defaultLocale: ${JSON.stringify(defaultLocale)}

${defaultLocale ? `
dayjs.updateLocale(${JSON.stringify(defaultLocale).replace(/^\[|\]$/g, '')})
dayjs.locale('${typeof defaultLocale === 'string' ? defaultLocale : defaultLocale[0]}')
` : ""}

export default dayjs
`
