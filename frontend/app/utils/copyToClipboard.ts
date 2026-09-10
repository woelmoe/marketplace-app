import { AUTHOR_TG } from '~/assets/types/CommonDefinitions'

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('Ошибка копирования:', err)
  }
}
