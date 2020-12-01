import * as React from 'react'
const { useState, useEffect } = React
import { menuDispatchEffect } from 'store/menu/effect'
import { Button, Table, Space, Modal, Tree } from 'antd'
import 'common/css/authority.less'

interface PageAuthority {
  key: number;
  userType: string;
  userName: string;
  describe: string;
  [PropName: string]: any;
}

interface UserPageAuthority {
  key: string;
  title: string;
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
  // redux菜单栏
  const [menuInfo, setMenuInfo] = menuDispatchEffect()
  // 表格数据
  const [data, setData] = useState<PageAuthority[]>([])
  // 是否展示权限编辑框
  const [showEdit, setShowEdit] = useState<boolean>(false)
  // 选中权限数据
  const [treeData, setTreeData] = useState<UserPageAuthority[]>([])
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
            <Button type="primary" onClick={ () => { editModalShow(record) } }>编辑权限</Button>
            <Button type="primary" danger onClick={ () => { deleteModalShow(record) } }>删除</Button>
          </Space>
        )
      }
    }
  ]

  useEffect(() => {
    getUserAuthority()
    setData(dataSource)
  }, [])

  // 获取当前用户的权限列表
  const getUserAuthority = () => {
    const test = getTest(menuInfo)
    console.log(test)
  }

  const getTest = (menu, parentKey = '') => {
    return menu.map((item, key) => {
      if(item.children) {
        return getTest(item.children, parentKey)
      } else {
        return {
          title: item.breadcrumbName,
          key: parentKey + '-' + key
        }
      }
    })
  }

  // 编辑权限操作
  const editModalShow = (record: PageAuthority) => {
    setShowEdit(true)
  }

  // 删除操作
  const deleteModalShow = (record: PageAuthority) => {
    Modal.confirm({
      content: '确认删除该用户？此操作不可恢复',
      cancelText: '取消',
      okText: '确认',
      onOk() {
        deleteRow(record)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  // 删除用户
  const deleteRow = (record: PageAuthority) => {
    const newColumn = data.filter(item => item.key !== record.key)
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

  const onCheck = () => {}
  
  const checkedKeys = () => {}

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
      <Modal
      title="权限调整"
      centered
      visible={showEdit}
      onOk={() => setShowEdit(false)}
      onCancel={() => setShowEdit(false)}
      width={700}
      >
         <Tree
          checkable
          autoExpandParent={ true }
          onCheck={ onCheck }
          checkedKeys={ checkedKeys }
          treeData={ treeData }
        />
      </Modal>
    </div>
  )
}

export default PageAuthority