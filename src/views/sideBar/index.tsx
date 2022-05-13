import {Scrollbars} from 'react-custom-scrollbars-2';
import {history} from "../../redux/router/history";
import classnames from "classnames";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {SideBarParentItem} from "../../type/sideBar/SideBarParentItem";
import {SideBarItem} from "../../type/sideBar/SideBarItem";
import {BaseComponent} from "../../type/BaseComponent";
import './index.scss'
import {RootState} from "../../redux/rootReducer";
import {FunctionProperties, NonFunctionProperties} from "../../type/util";
import {SideBarAction} from "../../type/sideBar/SideBarAction";
import {Dispatch} from "redux";
import {SideBarActionType} from "../../type/sideBar/SideBarActionType";
import {NavTabsAction} from "../../type/navTabs/navTabsAction";
import {NavTabsActionType} from "../../type/navTabs/navTabsActionType";
import {namePathMap} from "../../routers/routers";

interface SideBarProps {
  sideBarParentItems: SideBarParentItem[]

  onExpand(sideBarParentItem: SideBarParentItem): void

  onSelected(parentName: string, sideBarItem: SideBarItem): void
}

class SideBar extends BaseComponent<SideBarProps> {
  constructor(props: SideBarProps) {
    super(props);
    this.addTab = this.addTab.bind(this)
  }

  componentDidMount() {
    this.setState({routerPath: history.location.pathname})
  }

  addTab(routerPath: string) {
    history.push(routerPath);
    this.setState({routerPath: routerPath})
  }

  handleSideBarParentItemClick(sideBarParentItem: SideBarParentItem) {
    if (sideBarParentItem.subItem?.length) {
      this.props.onExpand(sideBarParentItem)
    } else {
      this.props.onSelected("", sideBarParentItem)
    }
  }

  render() {
    return (
      <div className="side-bar">
        <Scrollbars className="lg_page_left_content">
          <div>
            {
              this.props.sideBarParentItems.map((item) => {
                return <LeftTabWarp onClickSubItem={subItem => this.props.onSelected(item.name, subItem)}
                                    onClick={() => this.handleSideBarParentItemClick(item)} {...item} key={item.name}/>
              })
            }
          </div>
        </Scrollbars>
      </div>
    );
  }

  getClassNamePrefix(): string {
    return "SideBar";
  }
}


interface LeftTabWarpProps extends SideBarParentItem {
  onClick?(): void

  onClickSubItem?(sideBarItem: SideBarItem): void
}

const LeftTabWarp = (props: LeftTabWarpProps) => {

  const className = classnames(
    "lg_left_tab_List",
    {
      "lg_left_tab_List_show": props.subItem?.length,
      "lg_left_tab_List_expand": props.expand,
      "lg_left_tab_List_cho": props.selected
    }
  )

  return (
    <div className={className}>
      <div className="lg_left_tab_name" onClick={props.onClick} style={{backgroundImage: "url('" + props.icon + "')"}}>
        <RedNode hasNode={props.redPoint}>{props.name}</RedNode>
        <b className="lg_left_show_btn">{">"}</b>
      </div>
      <div className={"lg_left_tab_sub_item"}>
        {
          props.subItem?.map((item) => {
            return <LeftTabItem {...item} key={item.name}
                                onClick={() => props.onClickSubItem && props.onClickSubItem(item)}/>
          })
        }
      </div>
    </div>
  )
}

interface LeftTabItemProps extends SideBarItem {
  onClick?(): void
}

const LeftTabItem = (props: LeftTabItemProps) => {
  const classNames = classnames(
    "lg_left_tab_itam",
    "clear",
    {
      "lg_left_tab_i_cho": props.selected
    }
  )
  return (
    <div className={classNames} onClick={props.onClick}>
      <div className={"lg_left_tab_i_node left"}/>
      <div className="lg_left_tab_text left"><RedNode hasNode={props.redPoint}>{props.name}</RedNode></div>
    </div>
  )
}

const RedNode = (props: { hasNode?: boolean, children: string, className?: string }) => {
  return (
    <span className={`lg_red_node ${props.className || ""}`}>
            {props.children}
      {props.hasNode ? <b className="lg_red_node_show"/> : null}
        </span>
  )
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<SideBarProps>, any, RootState> = (state) => {

  return {
    sideBarParentItems: state.sideBarState.sideBarParentItems
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<SideBarProps>, any> = (dispatch: Dispatch<SideBarAction | NavTabsAction>) => {
  return {
    onExpand(sideBarParentItem: SideBarParentItem) {
      dispatch({type: SideBarActionType.EXPAND, sideBarParentItem})
    },
    onSelected(parentName: string, sideBarItem: SideBarItem) {
      let path = namePathMap.get(sideBarItem.name);
      if (path) {
        history.push(path)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);