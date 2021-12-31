import {
  Home,
  Personal,
  About,
  Pagination,
  CheckBox,
  RichEditor,
} from '../pages'

import {lazy} from "react";
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
const RichEditorRouter: RouterType = {
  path: '/richEditor',
  component: RichEditor,
  root: [],
}
const BreadcrumbRouter: RouterType = {
  path: '/breadcrumb',
  component: lazy(() => import(`../pages/breadcrumb`)),
  root: [],
}

const LoadingRouter: RouterType = {
  path: '/loading',
  component: lazy(() => import(`../pages/loading`)),
  root: [],
}

// 总路由
const Routers: RouterType[] = ([
  HomeRouter,
  PersonalRouter,
  AboutRouter,
  PaginationRouter,
  CheckBoxRouter,
  RichEditorRouter,
  BreadcrumbRouter,
  LoadingRouter
])

export {
  Routers
}