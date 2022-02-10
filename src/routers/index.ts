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
    },{
        path: '/filter',
        component: lazy(() => import('../pages/filter')),
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
    },  {
        path: '/subPage',
        component: lazy(() => import('../pages/subPage')),
        root: []
      },
    {
        path: '/timeline',
        component: lazy(() => import('../pages/timeline')),
        root: []
    },
    {
        path: '/steps',
        component: lazy(() => import('../pages/steps')),
        root: []
    },
    {
        path: '/datePicker',
        component: lazy(() => import('../pages/datePicker')),
        root: []
    },
    {
        path: '/menu',
        component: lazy(() => import('../pages/menu')),
        root: []
    },
    {
        path: '/treeselect',
        component: lazy(() => import('../pages/treeselect')),
        root: []
    },
    {
        path: '/drawer',
        component: lazy(() => import('../pages/drawer')),
        root: []
    },{ 
        path: '/tabs',
        component: lazy(() => import('../pages/tabs')),
        root: []
    },
    {
        path: '/collapse',
        component: lazy(() => import('../pages/collapse')),
        root: []
    },
    {
        path: '/charts',
        component: lazy(() => import('../pages/charts')),
        root: []
    },
    {
        path: '/card',
        component: lazy(() => import('../pages/card')),
        root: []
    },
])
export {
    Routers
}