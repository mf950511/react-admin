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