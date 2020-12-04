export const debounce = (fn: Function, debunceTime: number) => {
  let timerId: number | null = null
  return function(...rest: any){
    if(timerId) {
      return
    }
    timerId = window.setTimeout(() => {
      clearTimeout(timerId)
      timerId = null
      fn.apply(null, rest)
    }, debunceTime)
  }
  
}

const jsonParse: (value: any) => any = (value: any) => {
  if(typeof value !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(value)
  } catch (e) {
    return value || undefined
  }
}

export const getStorage = (key: string, defaultValue: any) => {
  const value = jsonParse(window.localStorage.getItem(key))
  return value === undefined ? defaultValue : value
}

export const setStorage = (key: string, value: any) => {
  return value === undefined ? window.localStorage.removeItem(key) : window.localStorage.setItem(key, JSON.stringify(value))
}