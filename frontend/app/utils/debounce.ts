export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): T & { cancel: () => void } {
  let timeout: NodeJS.Timeout | null = null

  const debounced = function (this: any, ...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      fn.apply(this, args)
      timeout = null
    }, delay)
  } as T & { cancel: () => void }

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return debounced
}
