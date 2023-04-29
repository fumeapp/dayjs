import axios from 'axios'


interface File {
  name: string,
}

const getLocaleFiles = async (): Promise<File[]> => {
  const { data } = await axios.get('https://api.github.com/repos/dayjs/dayjs/contents/src/locale')
  return data
}

locales = await getLocaleFiles()



console.log(locales)
