import * as React from 'react'
import Router from './src/router/route'
import { useIntl, IntlProvider } from 'react-intl'
import { normalDispatchEffect } from './src/store/normal/effect'
import en from './src/language/en'
import zh from './src/language/zh'
const message = {
  en,
  zh
}
const App = () => {
  const [language, setLanguage] = normalDispatchEffect('language', 'zh')
  return (
    <IntlProvider locale={ language } messages={message[language]}>
      <Router />
    </IntlProvider>
  )
}

export default App