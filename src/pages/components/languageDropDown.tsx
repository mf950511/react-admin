import * as React from 'react'
import { Dropdown, Menu } from 'antd'
import { post } from 'api/request'
import { normalDispatchEffect } from 'store/normal/effect'



const DropDown = () => {
  const [language, setLanguage] = normalDispatchEffect('language', 'zh')
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
    <Dropdown overlay={dropdownMenu} placement="bottomLeft" arrow>
      <div className="home-dropdown">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#iconwenzi"></use>
        </svg>
      </div>
    </Dropdown>
  )

}

export default DropDown