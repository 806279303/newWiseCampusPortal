import { lazy } from 'react'

export type RouterType = {
  path: string,
  component: React.LazyExoticComponent<any>,
  root: string[],
  notExect?: boolean
}

// 总路由
const Routers: RouterType[] = ([
  {
    path: '/home',
    component: lazy(() => import('../pages/home')),
    root: []
  }, {
    path: '/Personal',
    component: lazy(() => import('../pages/personal')),
    root: []
  }, {
    path: '/About',
    component: lazy(() => import('../pages/about')),
    root: []
  }, {
    path: '/pagination',
    component: lazy(() => import('../pages/pagination')),
    root: []
  }, {
    path: '/checkBox',
    component: lazy(() => import('../pages/checkBox')),
    root: []
  }, {
    path: '/search',
    component: lazy(() => import('../pages/search')),
    root: [],
  }
])
export {
  Routers
}