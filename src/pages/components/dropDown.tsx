import * as React from 'react'
import { Dropdown, Menu, Avatar } from 'antd'
import { post } from 'api/request'
import { useHistory } from 'react-router-dom'
import { CaretDownOutlined } from '@ant-design/icons'
import { normalDispatchEffect } from 'store/normal/effect'
import avator from 'common/image/avator_small.gif'



const DropDown = () => {
  const history = useHistory()
  const [sessionId, setSessionId] = normalDispatchEffect('sessionId', '')

  // 选择右侧下拉框操作
  const selectDrop = (e: any) => {
    const { key } = e
    switch(key) {
      case 'logout':
        post('/user/logout').then(res => {
          history.push('/login')
          setSessionId('')
        })
        return
      default:
        history.push(key)
    }
  }

  // 右上角下拉框
  const dropdownMenu = (
    <Menu onClick={ selectDrop }>
      <Menu.Item key="/home">
        首页
      </Menu.Item>
      <Menu.Item key="/login">
        个人中心
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={dropdownMenu} placement="bottomLeft" arrow>
      <div className="home-dropdown">
        <Avatar shape="square" size={40} src={ avator }/>
        <CaretDownOutlined className="avator-icon"/>
      </div>
    </Dropdown>
  )

}

export default DropDown