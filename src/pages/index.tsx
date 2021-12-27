// 路由懒加载
import { lazy } from 'react'

export const Home = lazy(() => import('./home'))
export const Personal = lazy(() => import('./personal'))
export const About = lazy(() => import('./about'))
