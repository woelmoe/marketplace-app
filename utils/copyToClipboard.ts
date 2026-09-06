import { AUTHOR_TG } from '~/assets/types/CommonDefinitions'

export const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(AUTHOR_TG)
  } catch (err) {
    console.error('Ошибка копирования:', err)
  }
}
