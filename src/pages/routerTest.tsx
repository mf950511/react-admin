import * as React from 'react'
import { normalDispatchEffect } from 'store/normal/effect'
import {useIntl, FormattedDate, FormattedMessage} from 'react-intl'
const RouterTest1 = () => {
  const [language, setLanguage] = normalDispatchEffect('language', 'zh')
  return (
    <div className="guide">我是路由测试页1 
      <FormattedDate value={1606894279773} year="numeric"
      month="long"
      day="numeric"
      weekday="long"/>
      <FormattedMessage
      id="message"
      />
      <div className="test" onClick={ () => { setLanguage('en') } }>点我切换</div>
    </div>
  )
}

export default RouterTest1