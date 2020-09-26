import { lazy } from 'react'
const Doc = lazy(() => import('pages/doc'))
const Guide = lazy(() => import('pages/guide'))
const PageAuthority = lazy(() => import('pages/pageAuthority'))
const UserAuthority = lazy(() => import('pages/userAuthority'))
const RouterTest1 = lazy(() => import('pages/routerTest'))
const RouterTest2 = lazy(() => import('pages/routerTest2'))
const HomeIndex = lazy(() => import('pages/homeIndex'))
const Error = lazy(() => import('pages/error'))
const Home = lazy(() => import('pages/home'))
const Login = lazy(() => import('pages/login'))
const Test = lazy(() => import('pages/test2'))
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
    to: '/home',
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
    component: RouterTest1,
    path: '/home/authority/child/routerTest1'
  },
  {
    component: RouterTest2,
    path: '/home/authority/child/routerTest2'
  },
  {
    to: '/home/authority/child/routerTest1',
    from: '/home/authority/child',
    redirect: true,
  },
  {
    to: '/home/authority/pageAuthority',
    from: '/home/authority',
    redirect: true,
  },
  {
    to: '/home/index',
    from: '/home',
    redirect: true,
  },
]