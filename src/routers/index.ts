import {
  Home,
  Personal,
  About
} from '../pages'

export type RouterType = {
  path: string,
  component: React.LazyExoticComponent<any>,
  root: string[],
  notExect?: boolean,
}

const HomeRouter: RouterType = {
  path: '/home',
  component: Home,
  root: [],
}
const PersonalRouter: RouterType = {
  path: '/Personal',
  component: Personal,
  root: [],
}
const AboutRouter: RouterType = {
  path: '/About',
  component: About,
  root: [],
}
// 总路由
const Routers: RouterType[] = ([
  HomeRouter,
  PersonalRouter,
  AboutRouter
])

export {
  Routers
}