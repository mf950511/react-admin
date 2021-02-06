import { removeStorage } from 'lib/untils'
export const errorHandle = (response: any) => {
  const { code } = response || {}
  switch(code) {
    case 202002:
      removeStorage('sessionId')
      return
  }
}