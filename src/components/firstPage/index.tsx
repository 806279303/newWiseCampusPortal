import "./index.scss";
import {Component, ReactNode, useState} from 'react';
import { stopProps } from "../../utils";

interface Props {
    topBar: React.ReactNode,
    btnList: {
        name: string,
        icon: string,
        noSubBtn?: boolean, //true没有自按钮，false有
        btns: {
            name: string,
            url: string,
            hasNode?: number
        }[]
    }[],
    children?: any,
    className?: string,
    style?: object,
    onRef?: (ref: any) => void
}
interface States {
    tab: object[],
    choIndex: object,
    style: object,
}
export default class FirstPage extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tab: [],
            style: {},
            choIndex: []
        }
    }
    choShowTab(data: object) {

    }
    addTab() {

    }
    render() {
        const props = this.props, that = this;
        var choIndex = this.state.choIndex
        return (
            <div className={`lg_first_page ${props.className || ""}`} style={props.style || {}}>
                {props.topBar}
                <div id="cho_tab_warp">
                    <div id="cho_tab_list" className={"clear" + (this.state.tab.length == 1 ? " cho_tab_list_only" : "")} style={{ width: 2000 }}>
                            {
                            this.state.tab.map(function (o, i) {
                                return <ChoTabItem choIndex={choIndex} style={that.state.style} index={i} key={"cho_tab" + i} data={o} handle={that.choShowTab} />
                            })
                        }
                    </div>
                </div>
                <div id="left_content">
                    <div className="main_tab_warp">
                        {
                            props.btnList.map(function (o, i) {
                                return <MainTabWarp data={o} index={i} key={"man_t_w" + i} choTab={that.addTab} choIndex={choIndex} />
                            })
                        }
                    </div>
                </div>
                <div id="content_warp">
                    {
                        this.state.tab.map(function (o, i) {
                            return <ContentItem data={o} index={i} key={"con_i" + i} choIndex={choIndex} />
                        })
                    }
                </div>
                {props.children}
            </div>
        )
    }
}

class MainTabWarp extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    openSub() {
        if (this.props.data.btns) {
            this.props.choTab(this.props.index, -1)
        } else {
            var data = this.props.data;
            data.posi = [this.props.index, 0];
            this.props.choTab(data);
        }
    }
    render() {
        var o = this.props.data, that = this, choIndex = this.props.choIndex, hasCho = "", style = {}, index = this.props.index;
        var btns = [];
        if (choIndex.length == 2 && choIndex[0] == index || choIndex.length == 3 && choIndex[2] == index) {
            hasCho = " main_tab_List_cho";
        }
        if (o.btns) {
            btns = o.btns
            if (!o.isHide) {
                style = { height: 50 + btns.length * 42 };
                hasCho += " main_tab_List_show";
            }
        } else {
            hasCho += " main_tab_List_no_sub";
        }
        return (
            <div className={"main_tab_List" + hasCho} style={style}>
                <div className="main_tab_name" onClick={this.openSub} style={{ backgroundImage: "url('" + o.icon + "')" }}>{o.name}<b>{">"}</b></div>
                {
                    btns.map((o: any, i: number) => {
                        return <MainTabItem data={o} index={[index, i]} key={"man_t_i" + i} choTab={that.props.choTab} choIndex={choIndex} />
                    })
                }
            </div>
        )
    }
}
class MainTabItem extends Component<any, any> {
    choTab() {
        var index = this.props.index, choIndex = this.props.choIndex;
        if (choIndex[0] == index[0] && choIndex[1] == index[1]) return;
        var data = this.props.data;
        data.posi = this.props.index;
        this.props.choTab(data);
    }
    showNode() {
        return "none"
    }
    render() {
        var o = this.props.data, index = this.props.index, choIndex = this.props.choIndex;
        var hasCho = (choIndex[0] == index[0] && choIndex[1] == index[1]) ? " main_tab_i_cho" : "";
        return (
            <div className={"main_tab_itam clear" + hasCho} onClick={this.choTab}>
                <div className="main_tab_i_node left" />
                <div className="main_tab_i_name left">{o.name}<b style={{display: this.showNode()}}/></div>
            </div>
        )
    }
}

class ChoTabItem extends Component<any, any> {
    close(e:any) {
        stopProps(e)
        this.props.handle(this.props.index, this.props.data);
    }
    choTab () {
        if (this.props.choIndex == this.props.index) return;
        this.props.handle(this.props.index, this.props.data, 1);
    }
    showNode() {
        return "none"
    }
    render() {
        var o = this.props.data;
        var cla =  (this.props.choIndex == this.props.index) ? " cho_tab_i_cho" : "";
        return (
            <div className={"cho_tab_i left" + cla} onClick={this.choTab} style={this.props.style || {}}>
                <div className="cho_tab_i_text left">{o.name}<b style={{display: this.showNode()}}/></div>
                <div className="cho_tab_i_close left hover_btn" onClick={this.close} />
            </div>
        );
    }
}


class ContentItem extends Component<any, any> {
    componentWillReceiveProps (nextProps: any) {
        // if (this.props.choIndex != this.props.index && nextProps.choIndex == nextProps.index) {
        //     var posi = this.props.data.posi;
        //     var mySubPage = window.frames["mySubPage" + posi[0] + "_" + posi[1]];
        //     if (mySubPage && mySubPage.window) {
        //         mySubPage.window.refreshCurPage && mySubPage.window.refreshCurPage();
        //     }
        // }
    }
    render () {
        var o = this.props.data;
        return (
            <div className="content_item" style={{ display: (this.props.choIndex == this.props.index) ? "block" : "none" }}>
                <iframe src={o.url} name={"mySubPage" + o.posi[0] + "_" + o.posi[1]}/>
            </div>
        )
    }
}