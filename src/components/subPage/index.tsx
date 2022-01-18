import { Component } from 'react'
import { getSkin } from '../../utils'
import { BaseProps } from '../../type/BaseProps'
import myEvent from '../../type/event'
import './index.scss'

interface Props extends  BaseProps {
    refresh?: (value?: any) => any
    tabList?: {btnName: string, redNumber?: number}[],
    onTab?: (tabIndex: number) => any
}
class SubPage extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {skin: getSkin()};
        this.setSkin = this.setSkin.bind(this);
        myEvent.on("setSkin", this.setSkin)
        myEvent.on("refresh", (type?: number) => {
            props.refresh && props.refresh();
        })
    }
    setSkin = (skin: string) => {
        this && this.setState({skin: skin});
    }
    render() {
        var props = this.props;
        return (
            <div className={`sub_page_warp ${this.state.skin} ${props.className || ""}`} style={props.style || {}} >
                {props.tabList ? <SubTab tabList={props.tabList} onTab={props.onTab} /> : null }
                {props.children || null}
            </div>
        )
    }
}
interface SubTabProps { 
    tabList: {btnName: string, redNumber?: number}[], 
    onTab?: (tabIndex: number) => any
}
class SubTab extends Component<SubTabProps, any> {
    constructor(props:SubTabProps) {
        super(props);
        this.defaultIndex = this.defaultIndex.bind(this);
        this.state = {
            choIndex: this.defaultIndex()
        }
        this.setTabIndex = this.setTabIndex.bind(this);
    }
    defaultIndex() {
        var pagePath = sessionStorage.getItem("pagePath");
        console.log(pagePath)
        if (pagePath) {
            var index = pagePath.split("|");
            var index2 = index[2] ? parseInt(index[2]) : 0;
            if (index2 && this.props.tabList[index2]) {
                this.props.onTab && this.props.onTab(index2);
                return index2;
            }
        }
        return 0;
    }
    setSession(index: number) {
        var pagePath = sessionStorage.getItem("pagePath");
        if (pagePath) {
            var pageIndex = pagePath.split("|");
            if (pageIndex.length >= 2) {
                sessionStorage.setItem("pagePath", `${pageIndex[0]}|${pageIndex[1]}|${index}`);
            } else {
                sessionStorage.setItem("pagePath", `${pageIndex[0]}|0|${index}`);
            }
        } else
            sessionStorage.setItem("pagePath", "0|0|" + index);
    }
    setTabIndex(e: any) {
        var index = e.currentTarget.dataset.index;
        if (index == this.state.choIndex) return;
        this.props.onTab && this.props.onTab(index);
        this.setSession(index);
        this.setState({choIndex: index});
    }
    render() {
        var choIndex = this.state.choIndex;
        return (
            <div className='sub_page_tab_warp'>
                <div className='sub_page_tabs'>
                {
                    this.props.tabList.map((o, i) => {
                        return <div key={`sub_p_i ${i}`} onClick={this.setTabIndex} data-index={i} className={`sub_page_tab_item ${choIndex == i ? "sub_page_tab_i_cho" : ""}`}>
                                    <span className="sub_page_tab_i_name">{o.btnName}</span>
                                    {o.redNumber ? <span className="sub_page_tab_i_num">{o.redNumber}</span> : null}
                                </div>
                    })
                }
                </div>
            </div>
        )
    }
}
export default SubPage