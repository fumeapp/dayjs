export default defineNuxtConfig({
  modules: ['../src/module'],
  dayjs: {
    locales: ['en', 'fr'],
    plugins: ['relativeTime', 'utc'],
  }
})
