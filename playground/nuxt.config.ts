export default defineNuxtConfig({
  modules: ['../src/module', '@unocss/nuxt'],
  dayjs: {
    locales: ['fr', 'en'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'America/New_York',
    /*
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: 'a few seconds',
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d monthses",
      y: "a year",
      yy: "%d years"
    }
    */
  }
})
