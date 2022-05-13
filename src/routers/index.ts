import { lazy } from 'react'
import {allPath} from "./routers";

export type RouterType = {
    path: string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    notExect?: boolean
}

// 总路由
const Routers: RouterType[] = ([
    {
        path: allPath.HOME,
        component: lazy(() => import('../views/home')),
        root: []
    },{
        path: allPath.WEAPP,
        component: lazy(() => import('../views/weappMg')),
        root: []
    },{
        path: allPath.MESSAGE_RECORD,
        component: lazy(() => import('../views/messageRecord')),
        root: []
    },{
        path: allPath.MESSAGE_MODEL,
        component: lazy(() => import('../views/messageModel')),
        root: []
    },{
        path: allPath.SCHOOL_INFO,
        component: lazy(() => import('../views/schoolInfo')),
        root: []
    },{
        path: allPath.SCHOOL_SYSTEM,
        component: lazy(() => import('../views/schoolSystem')),
        root: []
    },{
        path: allPath.WISEBOARD,
        component: lazy(() => import('@/views/wiseBoard')),
        root: []
    },{
        path: allPath.LOG_MANAGEMENT,
        component: lazy(() => import('../views/logMg')),
        root: []
    },{
        path: allPath.USER_MANAGEMENT,
        component: lazy(() => import('../views/userMg')),
        root: []
    },
])
export {
    Routers
}