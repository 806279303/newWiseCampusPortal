import {
  Home,
  Personal,
  About,
  Pagination,
  CheckBox,
  Search
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
const PaginationRouter: RouterType = {
  path: '/pagination',
  component: Pagination,
  root: [],
}
const CheckBoxRouter: RouterType = {
  path: '/checkBox',
  component: CheckBox,
  root: [],
}

const SearchRouter: RouterType = {
  path: '/search',
  component: Search,
  root: [],
}
// 总路由
const Routers: RouterType[] = ([
  HomeRouter,
  PersonalRouter,
  AboutRouter,
  PaginationRouter,
  CheckBoxRouter,
  SearchRouter
])

export {
  Routers
}