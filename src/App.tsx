import {Redirect, Route, Switch} from 'react-router-dom'
import {Routers} from './routers'
import Header from '@/views/header'
import SideBar from '@/views/sideBar'
import Tabs from '@/views/tabs'
import {Suspense} from 'react'
import 'element-theme-default';
import './App.scss'
import {FlexFillViewFrame} from "@/components/flexFillViewFrame";
import {allPath} from "./routers/routers";

function App() {
  return (
    <FlexFillViewFrame className="root" flexStart={<Header/>} orientation="vertical">
      <FlexFillViewFrame className="root-body" flexStart={<SideBar />}>
        <FlexFillViewFrame className="root-body-content" flexStart={<Tabs/>} orientation="vertical">
          <Suspense fallback={<div/>}>
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
              <Redirect path="/" to={allPath.HOME}/>
            </Switch>
          </Suspense>
        </FlexFillViewFrame>
      </FlexFillViewFrame>
    </FlexFillViewFrame>
  )
}

export default App