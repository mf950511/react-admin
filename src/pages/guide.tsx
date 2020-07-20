import * as React from 'react'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
const { useEffect, useState } = React
import { Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const Guide = () => {
  const [driver, setDriver] = useState(null)

  useEffect(() => {
    setDriver(new Driver({allowClose: false,}))
    
  }, [])

  const showGuide = () => {
    driver.defineSteps([
      {
        element: '.home-operator',
        popover: {
          title: '展开按钮',
          description: '展开收缩左侧菜单',
          position: 'right',
          closeBtnText: '关闭',
          nextBtnText: '下一步',
          prevBtnText: '上一步'
        }
      },
      {
        element: '.home-bread-list',
        popover: {
          title: '面包屑导航',
          description: '指示当前页面位置',
          position: 'bottom',
          closeBtnText: '关闭',
          nextBtnText: '下一步',
          prevBtnText: '上一步'
        }
      },
      {
        element: '.home-dropdown',
        popover: {
          title: '个人中心',
          description: '用户自操作',
          position: 'left',
          closeBtnText: '关闭',
          nextBtnText: '下一步',
          prevBtnText: '上一步'
        }
      }
    ]);
    driver.start()
  }

  return (
    <div className="guide">
      <div className="guide-tip">
        引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于<Button type="link" href="https://github.com/kamranahmedse/driver.js" title="driver.js" target="_blank">driver.js</Button>
      </div>
      <Button onClick={ showGuide } type="primary" icon={<QuestionCircleOutlined />}>
        打开指引
      </Button>
    </div>
  )
}

export default Guide