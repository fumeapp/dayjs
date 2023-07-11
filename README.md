![Nuxt Day.js module](./.github/card.png)
# Day.js Nuxt Module
> Fast 2kB alternative to Moment.js with the same modern API

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

[Day.js](https://day.js.org/) Nuxt Module supporting v3

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/fumeapp/dayjs-nuxt?file=playground%2Fapp.vue)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Nuxt 3 ready
- 🚠 &nbsp;Activate any plugin or locale available
- 🌲 &nbsp;Specify default locales and timezones

## Quick Setup

1. Add `dayjs-nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D dayjs-nuxt

# Using yarn
yarn add --dev dayjs-nuxt

# Using npm
npm install --save-dev dayjs-nuxt
```

2. Add `dayjs-nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'dayjs-nuxt'
  ]
})
```

## Basic Usage

You can use the provided composables to access Day.js anywhere.

```vue
<script lang="ts" setup>
const dayjs = useDayjs()
const date = dayjs('2023-01-01')
</script>

<template>
  <div>
    <time :datetime="date.utc().toString()"> {{ date }} </time>
  </div>
  </template>
```

## Configuration
You can specify any amount of locales, plugins, set a default locale, and set a default timezone

```ts
export default defineNuxtConfig({
  modules: ['dayjs-nuxt'],
  dayjs: {
    locales: ['en', 'fr'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'America/New_York',
  }
})
```
> By default we include the relativeTime and utc plugins


## Optional relativeTime customization
You can now specify a custom relativeTime configuration, lets create one [Gollum](https://en.wiktionary.org/wiki/hobbitses) would understand

```ts
export default defineNuxtConfig({
  modules: ['dayjs-nuxt'],
  dayjs: {
    ...
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
    ...
  }
})
```
>


## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/dayjs-nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/dayjs-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/dayjs-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/dayjs-nuxt

[license-src]: https://img.shields.io/npm/l/dayjs-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/dayjs-nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
