import { lazy } from 'react'
import RouterPath from './routers'

export type RouterType = {
    path: string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    notExect?: boolean
}

// 总路由
const Routers: RouterType[] = ([
    {
        path: RouterPath.HOME,
        component: lazy(() => import('../views/home')),
        root: []
    },{
        path: RouterPath.WEAPP,
        component: lazy(() => import('../views/weappMg')),
        root: []
    },{
        path: RouterPath.MESSAGE_RECORD,
        component: lazy(() => import('../views/messageRecord')),
        root: []
    },{
        path: RouterPath.MESSAGE_MODEL,
        component: lazy(() => import('../views/messageModel')),
        root: []
    },{
        path: RouterPath.SCHOOL_INFO,
        component: lazy(() => import('../views/schoolInfo')),
        root: []
    },{
        path: RouterPath.SCHOOL_SYSTEM,
        component: lazy(() => import('../views/schoolSystem')),
        root: []
    },{
        path: RouterPath.WISEBOARD,
        component: lazy(() => import('../views/wiseBoard')),
        root: []
    },{
        path: RouterPath.LOG_MANAGEMENT,
        component: lazy(() => import('../views/logMg')),
        root: []
    },{
        path: RouterPath.USER_MANAGEMENT,
        component: lazy(() => import('../views/userMg')),
        root: []
    },
])
export {
    Routers
}