import { lazy } from 'react'
const Doc = lazy(() => import('pages/doc'))
const Guide = lazy(() => import('pages/guide'))
const PageAuthority = lazy(() => import('pages/pageAuthority'))
const UserAuthority = lazy(() => import('pages/userAuthority'))
const RouterTest1 = lazy(() => import('pages/routerTest'))
const RouterTest2 = lazy(() => import('pages/routerTest2'))
const RouterTest11 = lazy(() => import('pages/routerTest11'))
const RouterTest12 = lazy(() => import('pages/routerTest12'))
const RouterTest13 = lazy(() => import('pages/routerTest13'))
const RouterTest121 = lazy(() => import('pages/routerTest121'))
const RouterTest122 = lazy(() => import('pages/routerTest122'))
const HomeIndex = lazy(() => import('pages/homeIndex'))
const Error = lazy(() => import('pages/error'))
const Home = lazy(() => import('pages/home'))
const Login = lazy(() => import('pages/login'))
const Test = lazy(() => import('pages/test2'))
const IconShow = lazy(() => import('pages/iconShow'))
const DropZone = lazy(() => import('pages/dropZone'))
const HeadUpload = lazy(() => import('pages/headUpload'))
const MarkDown = lazy(() => import('pages/markDown'))
const RichText = lazy(() => import('pages/richText'))
const Stiky = lazy(() => import('pages/stiky'))
const JSON = lazy(() => import('pages/json'))
const Table = lazy(() => import('pages/table'))
const Chart = lazy(() => import('pages/chart'))
// import Doc from 'pages/doc'
// import Guide from 'pages/guide'
// import PageAuthority from 'pages/pageAuthority'
// import UserAuthority from 'pages/userAuthority'
// import RouterTest1 from 'pages/routerTest'
// import RouterTest2 from 'pages/RouterTest2'
// import RouterTest11 from 'pages/RouterTest11'
// import RouterTest12 from 'pages/RouterTest12'
// import RouterTest13 from 'pages/RouterTest13'
// import RouterTest121 from 'pages/RouterTest121'
// import RouterTest122 from 'pages/RouterTest122'
// import HomeIndex from 'pages/HomeIndex'
// import Error from 'pages/Error'
// import Home from 'pages/Home'
// import Login from 'pages/Login'
// import Test from 'pages/test2'

// 外层主路由
export const rootRouter = [
  {
    component: Login,
    path: '/login'
  },
  {
    component: Home,
    path: '/home',
  },
  {
    component: Test,
    path: '/test'
  },
  {
    component: Error,
    path: '/error'
  },
  {
    component: Doc,
    path: '/doc'
  },
  {
    component: Guide,
    path: '/guide'
  },
  {
    component: PageAuthority,
    path: '/pageAuthority'
  },
  {
    component: UserAuthority,
    path: '/characterAuthority'
  },
  {
    component: RouterTest1,
    path: '/routerTest1'
  },
  {
    component: RouterTest2,
    path: '/routerTest2'
  },
  {
    component: IconShow,
    path: '/iconShow'
  },
  {
    component: DropZone,
    path: '/dropZone'
  },
  {
    component: HeadUpload,
    path: '/headUpload'
  },
  {
    component: MarkDown,
    path: '/markDown'
  },
  {
    component: RichText,
    path: '/richText'
  },
  {
    component: Stiky,
    path: '/stiky'
  },
  {
    component: JSON,
    path: '/json'
  },
  {
    component: Chart,
    path: '/chart'
  },
  {
    component: Table,
    path: '/table'
  },
  {
    to: '/login',
    from: '/',
    redirect: true,
  }
]

// 主页路由
export const homeRouter = [
  {
    component: HomeIndex,
    path: '/home/index'
  },
  {
    component: Doc,
    path: '/home/doc'
  },
  {
    component: Guide,
    path: '/home/guide'
  },
  {
    component: PageAuthority,
    path: '/home/authority/pageAuthority'
  },
  {
    component: UserAuthority,
    path: '/home/authority/characterAuthority'
  },
  {
    component: RouterTest11,
    path: '/home/child/routerTest1/routerTest11'
  },
  {
    component: RouterTest121,
    path: '/home/child/routerTest1/routerTest12/routerTest121'
  },
  {
    component: RouterTest122,
    path: '/home/child/routerTest1/routerTest12/routerTest122'
  },
  {
    to: '/home/child/routerTest1/routerTest12/routerTest121',
    from: '/home/child/routerTest1/routerTest12',
    redirect: true,
  },
  {
    component: RouterTest12,
    path: '/home/child/routerTest1/routerTest12'
  },
  {
    component: RouterTest13,
    path: '/home/child/routerTest1/routerTest13'
  },
  {
    to: '/home/child/routerTest1/routerTest11',
    from: '/home/child/routerTest1',
    redirect: true,
  },
  {
    component: RouterTest1,
    path: '/home/child/routerTest1'
  },
  {
    component: RouterTest2,
    path: '/home/child/routerTest2'
  },
  {
    to: '/home/child/routerTest1',
    from: '/home/child',
    redirect: true,
  },
  {
    to: '/home/authority/pageAuthority',
    from: '/home/authority',
    redirect: true,
  },
  {
    component: IconShow,
    path: '/home/iconShow'
  },
  {
    component: DropZone,
    path: '/home/component/dropZone'
  },
  {
    component: HeadUpload,
    path: '/home/component/headUpload'
  },
  {
    component: MarkDown,
    path: '/home/component/markDown'
  },
  {
    component: RichText,
    path: '/home/component/richText'
  },
  {
    component: Stiky,
    path: '/home/component/stiky'
  },
  {
    component: JSON,
    path: '/home/component/json'
  },
  {
    component: Chart,
    path: '/home/chart'
  },
  {
    component: Table,
    path: '/home/table'
  },
  {
    to: '/home/component/richText',
    from: '/home/component',
    redirect: true,
  },
  {
    to: '/home/index',
    from: '/home',
    redirect: true,
  },
]