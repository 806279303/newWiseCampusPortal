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
    }, 
    {
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
    }, {
        path: '/richEditor',
        component: lazy(() => import('../pages/richEditor')),
        root: [],
    }, {
      path: '/topBar',
      component: lazy(() => import('../pages/topBar')),
      root: []
    }, {
      path: '/firstPage',
      component: lazy(() => import('../pages/firstPage')),
      root: []
    }, {
        path: '/breadcrumb',
        component: lazy(() => import('../pages/breadcrumb')),
        root: [],
    }, {
        path: '/loading',
        component: lazy(() => import('../pages/loading')),
        root: [],
    },
    {
        path: '/popLayer',
        component: lazy(() => import('../pages/popLayer')),
        root: []
    }, 
    {
        path: '/alert',
        component: lazy(() => import('../pages/alert')),
        root: []
    }, 
])
export {
    Routers
}