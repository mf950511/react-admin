import { removeStorage } from 'lib/untils'
import { DefaultParams } from 'types/common'
export const errorHandle: (response: DefaultParams) => void = (response = {}) => {
  const { code } = response
  switch(code) {
    case 202002:
      removeStorage('sessionId')
      return
  }
}