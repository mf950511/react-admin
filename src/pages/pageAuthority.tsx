import * as React from 'react'
const { useState, useEffect } = React
import { menuDispatchEffect } from 'store/menu/effect'
import { Button, Table, Space, Modal, Tree } from 'antd'
import 'common/css/authority.less'
import { SideBar } from 'store/menu/types'
import MenuInfo from 'common/js/menu'
import { useIntl } from 'react-intl'
import { IntlMessage } from 'language/type'
import { messages } from 'language/intl'
import { MenuType } from 'types/menu'
interface PageAuthority {
  key: number;
  userType: string;
  userName: string;
  describe: string;
  permission: MenuType;
  [PropName: string]: any;
}

interface allAuthorityType {
  admin: string[];
  editor: string[];
  visitor: string[];
}

const authorityType: MenuType[] = ['admin', 'editor', 'visitor']

const dataSource: PageAuthority[] = [
  {
    key: 1,
    userType: '超级管理员',
    userName: 'admin',
    describe: '哥就是牛逼，哥啥都能干，啥都能访问',
    permission: 'admin'
  },
  {
    key: 2,
    userType: '管理员',
    userName: 'editor',
    describe: '哥不如上面的牛逼，但是也能访问大多数页面',
    permission: 'editor'
  }
]


const PageAuthority = () => {
  // redux菜单栏
  const [menuInfo, setMenuInfo] = menuDispatchEffect()
  // 表格数据
  const [data, setData] = useState<PageAuthority[]>([])
  // 是否展示权限编辑框
  const [showEdit, setShowEdit] = useState<boolean>(false)
  // 权限列表
  const [treeData, setTreeData] = useState<any[]>([])
  // 用户完整权限合集
  const [checkedKeysAll, setCheckedKeysAll] = useState<allAuthorityType>(null)// 选中权限数据
  // 单独用户权限集
  const [checkedKeys, setCheckedKeys] = useState<string[]>([])
  // 用户权限数据
  const [authorityInfo, setAuthorityInfo] = useState(null)
  // 当前用户信息
  const [activityRecord, setActivityRecord] = useState<PageAuthority>(null)
  // 语言国际化
  const intl = useIntl()
  const getIntl = (intlName: IntlMessage) => intl.formatMessage(messages[intlName])
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
    getAllAuthority()
    getUserAuthority()
    setData(dataSource)
  }, [])

  const getAllAuthority = () => {
    traverse(MenuInfo['admin'], [])
    setTreeData(MenuInfo['admin'])
  }

  // 获取当前用户的权限列表作为默认列表
  const getUserAuthority = () => {
    let allAuthority: allAuthorityType = {
      admin: [],
      editor: [],
      visitor: []
    }
    authorityType.map(item => {
      traverse(MenuInfo[item], allAuthority[item])
    })
    setCheckedKeysAll(allAuthority)
  }

  // 遍历生成用户权限表
  const traverse = (menu: SideBar[], authorityList: string[]) => {
    menu.map((item, key) => {
      (!item.children || !item.children.length) && authorityList.push(item.path)
      item.key = item.path
      item.title = getIntl(item.breadcrumbName as IntlMessage)
      if(item.children) {
        traverse(item.children, authorityList)
      }
    })
  }

  // 编辑权限操作
  const editModalShow = (record: PageAuthority) => {
    const authority = authorityInfo && authorityInfo[record.permission] || checkedKeysAll[record.permission]
    setActivityRecord(record)
    setCheckedKeys(authority)
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

  // 新增用户
  const addUser = () => {
    const cloneData = data.slice()
    cloneData.push({
      key: data.length + 1,
      userName: '张三',
      userType: '游客',
      describe: '我只是进来逛逛，啥也不干',
      permission: 'visitor'
    })
    setData(cloneData)
  }

  // 权限选择事件
  const onCheck = (checkedKeys: string[]) => {
    setCheckedKeys(checkedKeys)
  }

  const confirmAuthority = () => {
    let authority = authorityInfo || {}
    authority = {
      ...authority,
      [activityRecord.permission]: checkedKeys
    }
    setAuthorityInfo(authority)
    setShowEdit(false)
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
      <Modal
      title="权限调整"
      centered
      visible={showEdit}
      cancelText="取消"
      okText="确认"
      onOk={() => confirmAuthority() }
      onCancel={() => setShowEdit(false) }
      width={700}
      >
         <Tree
          checkable
          autoExpandParent={ true }
          selectable={ false }
          onCheck={ onCheck }
          checkedKeys={ checkedKeys }
          treeData={ treeData }
        />
      </Modal>
    </div>
  )
}

export default PageAuthority