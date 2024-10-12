import dayjsImport from '#build/dayjs.imports.mjs'

export function dayjs(...args: Parameters<typeof dayjsImport>) {
  return dayjsImport(...args)
}

export function useDayjs() {
  return dayjsImport
}
