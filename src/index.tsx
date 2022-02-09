import "react-app-polyfill/ie11";
import 'core-js/stable';

import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter, Route, Switch } from 'react-router-dom'


ReactDOM.render(
  <HashRouter>
    {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
    <Suspense fallback={<div/>}>
      <Switch>
        <Route path="/" render={routerProps => {
          return <App {...routerProps}/>
        }}/>
      </Switch>
    </Suspense>
  </HashRouter>,
  document.getElementById('root')
)