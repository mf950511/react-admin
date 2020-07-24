import * as React from 'react'
const { useState, useEffect } = React
import { Button, Table, Space, Modal  } from 'antd'
import 'common/css/authority.less'

interface PageAuthority {
  key: number;
  userType: string;
  userName: string;
  describe: string;
  [PropName: string]: any;
}



const dataSource: PageAuthority[] = [
  {
    key: 1,
    userType: '超级管理员',
    userName: 'admin',
    describe: '哥就是牛逼，哥啥都能干，啥都能访问'
  },
  {
    key: 2,
    userType: '管理员',
    userName: 'editor',
    describe: '哥不如上面的牛逼，但是也能访问大多数页面'
  }
]

const PageAuthority = () => {
  const [data, setData] = useState([])
  const [activeRecord, setActiveRecord] = useState<PageAuthority>(null)
  const columns = [
    {
      title: '用户类别',
      dataIndex: 'userType',
      align: 'center' as 'center'
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      align: 'center' as 'center'
    },
    {
      title: '权限描述',
      dataIndex: 'describe'
    },
    {
      title: '操作',
      align: 'center' as 'center',
      render: (record: PageAuthority) => {
        return (
          <Space size="middle">
            <Button type="primary">编辑权限</Button>
            <Button type="primary" danger onClick={ () => { showModal(record) } }>删除</Button>
          </Space>
        )
      }
    }
  ]

  useEffect(() => {
    setData(dataSource)
  }, [])

  const showModal = (record: PageAuthority) => {
    setActiveRecord(record)
    Modal.confirm({
      content: '确认删除该用户？此操作不可恢复',
      cancelText: '取消',
      okText: '确认',
      onOk() {
        deleteRow()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  // 删除用户
  const deleteRow = () => {
    const newColumn = data.filter(item => item.key !== activeRecord.key)
    setData(newColumn)
  }

  const addUser = () => {
    const cloneData = data.slice()
    cloneData.push({
      key: data.length + 1,
      userName: '张三',
      userType: 'visitor',
      describe: '我只是进来逛逛，啥也不干'
    })
    setData(cloneData)
  }

  return (
    <div className="page-authority">
      <Button type="primary" style={{ marginBottom: 16 }} onClick={ addUser }>
        新增
      </Button>
      <Table
      bordered
      dataSource={data}
      columns={columns}
      />
    </div>
  )
}

export default PageAuthority