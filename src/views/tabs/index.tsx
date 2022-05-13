import React from 'react';
import {LgTabs} from "@/components/tabs";
import './index.scss'
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FunctionProperties, NonFunctionProperties} from "../../type/util";
import {RootState} from "../../redux/rootReducer";
import {BaseComponent} from "../../type/BaseComponent";
import {TabItem} from "../../type/navTabs/TabItem";
import {NavTabsAction} from "../../type/navTabs/navTabsAction";
import {Dispatch} from "redux";
import {SideBarAction} from "../../type/sideBar/SideBarAction";
import {NavTabsActionType} from "../../type/navTabs/navTabsActionType";
import {namePathMap} from "../../routers/routers";
import {history} from "../../redux/router/history";

interface NavTabsProps {
  currentPath: string
  tabList: TabItem[]

  onRemoveTab(name: string, isSelected: boolean): void

  onSelectChange(name: string): void
}

class NavTabs extends BaseComponent<NavTabsProps> {
  render() {
    let tabItem = this.props.tabList.find(item => item.selected);
    let activeName = "-1"
    if (tabItem) {
      activeName = tabItem.name
    }
    return (
      <div className="tabs-root">
        <LgTabs
          type="card"
          closable={this.props.tabList.length > 1}
          activeName={activeName}
          onTabRemove={(tab: any) => this.props.onRemoveTab(tab.props.name, tab.props.name === activeName)}
          onTabClick={e => this.props.onSelectChange(e.props.name)}
        >
          {
            this.props.tabList.map(item =>
              <LgTabs.LgPane key={item.name} label={item.name} name={item.name}/>
            )
          }
        </LgTabs>
      </div>
    );
  }

  getClassNamePrefix(): string {
    return "NavTabs";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<NavTabsProps>, any, RootState> = (state) => {
  console.log(state.navTabsState.tabs)
  return {
    currentPath: state.router.location.pathname,
    tabList: state.navTabsState.tabs
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<NavTabsProps>, any> = (dispatch: Dispatch<NavTabsAction | SideBarAction>) => {
  return {
    onRemoveTab(name, isSelected) {
      dispatch({type: NavTabsActionType.REMOVE_TAB, name})
      if(isSelected){
        history.goBack()
      }
    },
    onSelectChange(name: string) {
      let path = namePathMap.get(name);
      if (path) {
        history.push(path)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTabs);