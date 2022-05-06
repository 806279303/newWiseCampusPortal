import React, {Component, useState} from 'react';
import {withRouter, RouteComponentProps, useLocation} from "react-router-dom";
import {Scrollbars} from 'react-custom-scrollbars-2';

import './index.scss'

interface SlideBarState {
    routerPath: string
}

type SlideBarProps = {
    slideInfo: Array<any>
} & RouteComponentProps

class Index extends Component<SlideBarProps, SlideBarState> {
    constructor(props: SlideBarProps) {
        super(props);
        this.state = {
            routerPath: '/'
        }
        this.addTab = this.addTab.bind(this)
    }

    componentDidMount() {
        this.setState({routerPath: this.props.history.location.pathname})
    }

    static getDerivedStateFromProps(props: any) {
        return {routerPath: props.history.location.pathname};
    }

    addTab(routerPath:string) {
        console.log(routerPath)
        this.props.history.push(routerPath);
        this.setState({routerPath: routerPath})
    }

    render() {
        return (
            <div className="side-bar">
                <Scrollbars className="lg_page_left_content">
                    <div>
                        {
                            this.props.slideInfo.map((o: any, i: number) => {
                                return <LeftTabWarp data={o} index={i} key={"man_t_w" + i} choTab={this.addTab}
                                                    routerPath={this.state.routerPath}/>
                            })
                        }
                    </div>
                </Scrollbars>
            </div>
        );
    }
}


const LeftTabWarp = (props: any) => {
    let o = props.data, codePath = o.routerPath, hasCho = "", style = {}, index = props.index, routerPath = props.routerPath
    let btns = o.btns || [];
    const [isHide, setIsHide] = useState(false);
    const openSideBar = () => {
        if (props.data.btns) {
            setIsHide(!isHide);
        } else {
            props.choTab(props.data.routerPath)
        }
    }
    let hasOpen = ""
    if (btns.length) {//含二级
        hasOpen = " lg_left_tab_List_sub"
        if(!isHide){
            style = {height: 50 + btns.length * 42};
            hasOpen += " lg_left_tab_List_show"
        }
        //有二级，二级包含路由也cho
        const isBtnsContainRouterPath = btns.some((item:any, index:number)=>{
            return item.routerPath === routerPath
        })
        if(isBtnsContainRouterPath){
            hasCho = " lg_left_tab_List_cho";
        }
    } else {//只有一级
        if (codePath === routerPath) {
            hasCho += " lg_left_tab_List_cho";
        }
    }
    return (
        <div className={"lg_left_tab_List" + hasOpen + hasCho} style={style}>
            <div className="lg_left_tab_name" onClick={openSideBar} style={{backgroundImage: "url('" + o.icon + "')"}}>
                <RedNode hasNode={o.redNode}>{o.name}</RedNode>
                <b className="lg_left_show_btn">{">"}</b>
            </div>
            {
                btns.map((o: any, i: number) => {
                    return <LeftTabItem data={o} index={index} key={"man_t_i" + i} choTab={props.choTab}
                                        routerPath={routerPath}/>
                })
            }
        </div>
    )
}
const LeftTabItem = (props: any) => {
    const o = props.data;
    let hasChoSub = (o.routerPath === props.routerPath) ? " lg_left_tab_i_cho" : "";
    const choTab = ()=>{
        props.choTab(o.routerPath)
    }
    return (
        <div className={"lg_left_tab_itam clear " + hasChoSub} onClick={choTab}>
            <div className="lg_left_tab_i_node left"/>
            <div className="lg_left_tab_text left"><RedNode hasNode={o.redNode}>{o.name}</RedNode></div>
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

export default withRouter(Index);