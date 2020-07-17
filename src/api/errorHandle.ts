import store from 'store/index'
import { normalDispatchEffect } from 'store/normal/effect'
const { dispatch } = store
export const errorHandle = (response: any) => {
  const { code } = response || {}
  switch(code) {
    case 202002:
      const [sessionId, setSessionId] = normalDispatchEffect('sessionId', '')
      setSessionId('')
      return
  }
}