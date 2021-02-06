import * as React from 'react'
import { Dropdown, Menu } from 'antd'
import { post } from 'api/request'
import { useDispatchEffect } from 'hooks/normal/effect'



const DropDown = () => {
  const [language, setLanguage] = useDispatchEffect('language', 'zh')
  // 选择右侧下拉框操作
  const selectDrop = (e: any) => {
    const { key = '' } = e
    setLanguage(key)
  }

  // 右上角下拉框
  const dropdownMenu = (
    <Menu onClick={ selectDrop }>
      <Menu.Item key="zh">
        中文
      </Menu.Item>
      <Menu.Item key="en">
        English
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={dropdownMenu} placement="bottomRight" arrow>
      <div className="normal-dropdown language-dropdown">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#iconwenzi"></use>
        </svg>
      </div>
    </Dropdown>
  )

}

export default DropDown