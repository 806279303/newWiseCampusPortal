import "./index.scss";
import {Component, useState, ReactNode} from 'react';
import { stopProps } from "../../utils";
import TopBar from '../topBar';
import TopBarProps from '../topBar/props';
import { Scrollbars } from 'react-custom-scrollbars-2';
import myEvent from '../../type/event'

interface btnList {
    name: string,
    icon: string,
    subPage?: ReactNode | string,
    redNode?: boolean,
    btns?: {
        name: string,
        subPage: ReactNode | string,
        redNode?: boolean
    }[]
}
interface Props {
    TopBarProps: TopBarProps,
    btnList: btnList[],
    children?: any,
    className?: string,
    style?: object,
    onRef?: (ref: any) => void
}
interface States {
    choTabs: Array<number>[],
    choIndex: Array<number>
}
export default class FirstPage extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        var curChoTabs = this.getSession(props.btnList);
        this.state = {
            choTabs: [curChoTabs],
            choIndex: curChoTabs
        }
        this.deleShowTab = this.deleShowTab.bind(this);
        this.choShowTab = this.choShowTab.bind(this);
        this.addTab = this.addTab.bind(this);
        this.getCurData = this.getCurData.bind(this);
    }
    getSession(btnList: any[]) {
        var pagePath = sessionStorage.getItem("pagePath");
        if (pagePath) {
            var index = pagePath.split("|");
            var index0 = index[0] ? parseInt(index[0]) : 0,
                index1 = index[1] ? parseInt(index[1]) : 0;
            if (btnList[index0]) {
                if (btnList[index0].btns) {
                    if (btnList[index0].btns[index1])
                        return  [index0, index1];
                    else if (btnList[index0].btns[0])
                        return [index0, 0]
                }
                return [index0, -1];
            }
        } 
        if (btnList[0] && btnList[0].btns && btnList[0].btns[0])
            return [0, 0];
        return [0, -1];
    }
    setSession() {
        let choIndex = this.state.choIndex;
        sessionStorage.setItem("pagePath", choIndex[0] + "|" + choIndex[1] + "|0");
    }
    deleShowTab(index: number, type?: boolean) {
        var choTabs = this.state.choTabs, choIndex = this.state.choIndex;
        choTabs.splice(index, 1);
        if (type) choIndex = choTabs[choTabs.length - 1];
        this.setState({choTabs: choTabs, choIndex: choIndex}, this.setSession);
    }
    choShowTab(data: Array<number>) {
        var choTabs = this.state.choTabs;
        for (let i = 0; i < choTabs.length ; i++) {
            if (data[0] == choTabs[i][0] && data[1] == choTabs[i][1]) {
                this.setState({choIndex: data}, this.setSession);
                return true;
            }
        }
        return false;
    }
    addTab(data: Array<number>) {
        if (this.choShowTab(data)) return;
        var choTabs = this.state.choTabs;
        choTabs.push(data);
        this.setState({choTabs: choTabs, choIndex: data}, this.setSession);
    }
    getCurData(btnList: any[], o: Array<number>) {
        if (!btnList[o[0]].btns || o[1] == -1) {
            var curData = btnList[o[0]];
            curData.parentName = "";
        } else {
            var curData = btnList[o[0]].btns[o[1]];
            curData.parentName = btnList[o[0]].name;
        }
        curData.posi = o;
        return curData;
    }
    render() {
        const props = this.props, that = this;
        var choIndex = this.state.choIndex, btnList = props.btnList;
        var subPages = new Array();
        var topTabsData = this.state.choTabs.map((o, i) => {
            var data = that.getCurData(btnList, o);
            var hasCho = (choIndex[0] == o[0] && choIndex[1] == o[1]) ? true : false;
            data.hasCho = hasCho;
            subPages.push(<SubPageItem data={data} hasCho={hasCho} key={"con_i" + i} />)
            return data;
        })
        return (
            <div className={`lg_first_page ${props.className || ""}`} style={props.style || {}}>
                <TopBar {...props.TopBarProps} />
                <TopTabWarp data={topTabsData} choTab={this.choShowTab} closeTab={this.deleShowTab} />
                <div className="lg_page_left_warp">
                    <Scrollbars className="lg_page_left_content" style={{width: 200, height: "100%"}}>
                        <div style={{paddingTop: 10}}>{
                            props.btnList.map(function (o, i) {
                                return <LeftTabWarp data={o} index={i} key={"man_t_w" + i} choTab={that.addTab} choIndex={choIndex} />
                            })
                        }
                        </div>
                    </Scrollbars >
                </div>
                <div className="lg_page_sub_warp">
                    {subPages}
                </div>
                {props.children}
            </div>
        )
    }
}

const LeftTabWarp = (props: any) => {
    const [isHide, setIsHide] = useState(false);
    const openSub = () => {
        if (props.data.btns) {
            setIsHide(!isHide);
        } else {
            props.choTab([props.index, -1])
        }
    }
    var o = props.data, choIndex = props.choIndex, hasCho = "", style = {}, index = props.index;
    var btns = o.btns || [];
    if (choIndex[0] == index) {
        hasCho = " lg_left_tab_List_cho";
    }
    if (btns.length) {
        if (!isHide) {
            style = { height: 50 + btns.length * 42 };
            hasCho += " lg_left_tab_List_show";
        }
    } else {
        hasCho += " lg_left_tab_List_no_sub";
    }
    return (
        <div className={"lg_left_tab_List" + hasCho} style={style}>
            <div className="lg_left_tab_name" onClick={openSub} style={{ backgroundImage: "url('" + o.icon + "')" }}>
                <RedNode hasNode={o.redNode}>{o.name}</RedNode>
                <b className="lg_left_show_btn">{">"}</b>
            </div>
            {
                btns.map((o: any, i: number) => {
                    var hasChoSub = (choIndex[0] == index && choIndex[1] == i) ? " lg_left_tab_i_cho" : "";
                    return <LeftTabItem data={o} index={[index, i]} key={"man_t_i" + i} choTab={props.choTab} hasCho={hasChoSub} />
                })
            }
        </div>
    )
}
const LeftTabItem = (props: any) => {
    var o = props.data;
    return (
        <div className={"lg_left_tab_itam clear " + props.hasCho} onClick={() => { props.choTab(props.index) }}>
            <div className="lg_left_tab_i_node left" />
            <div className="lg_left_tab_text left"><RedNode hasNode={o.redNode}>{o.name}</RedNode></div>
        </div>
    )
}
const RedNode = (props: {hasNode?: boolean, children: string, className?: string}) => {
    return (
        <span className={`lg_red_node ${props.className || ""}`}>
            {props.children} 
            {props.hasNode ? <b className="lg_red_node_show" /> : null}
        </span>
    )
}

class TopTabWarp extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        var that = this, choTab = this.props.choTab, closeTab = this.props.closeTab;
        var allData = this.props.data || [];
        return (
            <div className="lg_page_top_tab_warp">
                <div className={"lg_page_top_tab_list clear" + (allData.length == 1 ? " lg_page_top_tab_only" : "")}>
                    {
                        allData.map((o: object, i: number) => {
                            return <TopTabItem  data={o} index={i} handle={choTab} close={closeTab} key={"cho_tab" + i} />
                        })
                    }
                </div>
            </div>
        )
    }
} 
const TopTabItem = (props: any) => {
    const close = (e:any) => {
        stopProps(e)
        props.close(props.index, props.data.hasCho);
    }
    const choTab = () => {
        if (props.data.hasCho) return;
        props.handle(props.data.posi);
    }
    var o = props.data;
    return (
        <div className={`lg_top_tab oneline left ${props.data.hasCho ? " lg_top_tab_cho" : ""}`} onClick={choTab} style={props.style || {}}>
            <div className="lg_top_tab_text" title={`${o.parentName ? o.parentName + "/" : ""}${o.name}`}><RedNode hasNode={o.redNode}>{o.name}</RedNode></div>
            <div className="lg_top_tab_close hover_btn" onClick={close} />
        </div>
    );
}


class SubPageItem extends Component<any, any> {
    shouldComponentUpdate(nextProps: any) {
        return (this.props.hasCho !== nextProps.hasCho)
    }
    componentDidUpdate() {
        if (this.props.hasCho) {
            myEvent.emit("refresh");
        }
    }
    render () {
        var o = this.props.data;
        return (
            <div className="lg_sub_page_item" style={{ display: this.props.hasCho ? "block" : "none" }}>
                {o.subPage}
            </div>
        )
    }
}