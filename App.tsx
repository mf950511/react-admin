import * as React from 'react'
import Router from './src/router/route'
import { IntlProvider } from 'react-intl'
import { useDispatchEffect } from './src/hooks/normal/effect'
import en from './src/language/en'
import zh from './src/language/zh'
const message = {
  en,
  zh
}
const App = () => {
  const [language] = useDispatchEffect('language', 'zh')
  return (
    <IntlProvider locale={ language } messages={message[language]}>
      <Router />
    </IntlProvider>
  )
}

export default App