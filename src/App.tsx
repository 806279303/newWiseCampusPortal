import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { useState } from 'react';
import { Routers } from './routers'
import { allSkinClassName, allSkinName } from "@/components/index";

import 'element-theme-default';

import './App.scss'

function App() {
  const [ stlyeIndex, setStyleIndex ] = useState<number>(0)
  return (
    <div className={`${allSkinClassName[stlyeIndex]}`}>
      <ul className='style_change_block'>
        {
          allSkinName.map((skinName, index) => {
            return (
              <li key={index} className={`style_change_item ${index == stlyeIndex ? 'style_change_item_cho' : ''}`} onClick={() => { setStyleIndex(index);console.log(index)}}>
                {skinName}
              </li>
            )
          })
        }
      </ul>
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