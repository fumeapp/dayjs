export default defineNuxtConfig({
  modules: ['../src/module', '@unocss/nuxt'],
  dayjs: {
    locales: ['fr', 'en', 'ko'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    externalPlugins: [{name: 'dayjsBusinessTime', package: 'dayjs-business-time'}],
    defaultLocale: ['en', {
      weekStart: 1,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: 'a few secondses',
        m: "a minute",
        mm: "%d minuteses",
        h: "an hour",
        hh: "%d hourses",
        d: "a day",
        dd: "%d dayses",
        M: "a month",
        MM: "%d monthseses",
        y: "a year",
        yy: "%d yearseses"
      }
    }],
    defaultTimezone: 'Europe/Berlin',
  }
})
