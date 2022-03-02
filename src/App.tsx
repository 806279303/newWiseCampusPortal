import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { useState } from 'react';
import { Routers } from './routers'
import { allSkinClassName, allSkinName } from "@/components/index";

import 'element-theme-default';

import './App.scss'

window.onload = () => {
  document.body.className = allSkinClassName[0]
  window.addEventListener('message', function (e) {
    if (e.data) {
      document.body.className = 'root '+allSkinClassName[e.data.index]
    }
  });
}

function App() {
  return (
    <div className={`root`}>
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
        {/* 设置默认路由 推荐方法一*/}
        {/* 方法一 */}
        {/* <Route path="/" component={Home} exact></Route> */}
        {/* 方法二 重定向*/}
        <Redirect path="/" to="/home" />
      </Switch>
    </div>
  )
}

export default withRouter(App)