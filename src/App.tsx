import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Routers} from './routers'
import RouterPath from './routers/routers'
import Header from '@/views/header'
import SideBar from '@/views/sideBar'
import Tabs from '@/views/tabs'


import pubStyle from '@/views/header/index.scss'

import 'element-theme-default';
import './App.scss'

function getClientHeight() {
    let clientHeight: number;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    } else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}

function useBodyHeight() {
    const [bodyHei, setBodyHei] = useState(getClientHeight() - pubStyle.naviHei)
    useEffect(() => {
        let resizeBodyHei = () => {
            setBodyHei(getClientHeight() - pubStyle.naviHei)
        };
        window.addEventListener("resize", resizeBodyHei)
        return () => {
            window.removeEventListener("resize", resizeBodyHei)
        }
    }, [])
    return bodyHei;
}


function App() {
    const bodyHei = useBodyHeight()
    const slideInfo = [
        {
            name: "首页",
            icon: require("./images/default_icon.png"),
            routerPath: RouterPath.HOME,
            redNode: true
        }, {
            name: "小程序管理",
            routerPath: RouterPath.WEAPP,
            icon: require("./images/default_icon.png"),
        },{
            name: "消息推送管理",
            routerPath: RouterPath.MESSAGE_RECORD,
            icon: require("./images/default_icon.png"),
            btns: [
                {name: "推送记录管理", redNode: true, routerPath: RouterPath.MESSAGE_RECORD},
                {name: "推送模板", routerPath: RouterPath.MESSAGE_MODEL,},
            ]
        },{
            name: "学校档案管理",
            routerPath: RouterPath.SCHOOL_INFO,
            icon: require("./images/default_icon.png"),
        },{
            name: "班牌音视频通话",
            routerPath: RouterPath.WISEBOARD,
            icon: require("./images/default_icon.png"),
        },{
            name: "日志管理",
            routerPath: RouterPath.LOG_MANAGEMENT,
            icon: require("./images/default_icon.png"),
        },{
            name: "微信用户管理",
            routerPath: RouterPath.USER_MANAGEMENT,
            icon: require("./images/default_icon.png"),
        },
    ]

    return (
        <div className={`root lg-skin-s1`}>
            <Header></Header>
            <div className="root-body" style={{height: `${bodyHei}px`}}>
                <SideBar slideInfo={slideInfo}></SideBar>
                <div className="root-body-content">
                    <Tabs/>
                    <Switch>
                        {
                            Routers.map(router => (
                                <Route
                                    exact={!router.notExect}
                                    key={router.path}
                                    path={router.path}
                                    component={router.component}
                                >
                                </Route>
                            ))
                        }
                        <Redirect path="/" to="/weappMg"/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default withRouter(App)