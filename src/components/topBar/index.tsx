import './index.scss'
import {Component, useState} from 'react'
import TopBarProps from './props';

export default class TopBar extends Component<TopBarProps> {
    constructor(props: TopBarProps) {
        super(props);
        this.openHelp = this.openHelp.bind(this);
        this.openPersonPage = this.openPersonPage.bind(this);
        this.toBasePage = this.toBasePage.bind(this);
    }
    componentDidMount() {
        this.props.onRef && this.props.onRef(this);
    }
    openHelp() {
        window.open(this.props.helpUrl)
    }
    openPersonPage() {
        window.open(this.props.homeUrl + "/html/personalMgr/");
    }
    toBasePage() {
        window.open(this.props.homeUrl);
    }
    render() {
        var o = this.props;
        var otherBtn = o.otherBtn ||[];
        return (
            <div className={`lg_top_bar clear ${o.className || ""}`} style={o.style || {}}>
                <div className='lg_logo_warp left'>
                    <div className='lg_logo left' style={o.logoStyle} />
                    {o.logoName ? <div className='lg_logo_name left'>{o.logoName}</div> : null}
                    {o.version ? <div className='lg_version left'>{o.version}</div> : ""}
                </div>
                <div className="lg_top_content_u right">
                    <div className="lg_top_content_split" />
                    {
                        otherBtn.map((obj, i) => {
                            return <div className={`lg_top_help ${obj.hasNode ? "lg_top_node" : ""}`} style={{backgroundImage: `url(${obj.iconUrl})`}} onClick={obj.onBtn} key={"lg_top_b" + i}>{obj.btnName}</div>
                        })
                    }
                    <div className="lg_top_help lg_top_main_page" onClick={this.toBasePage}>返回办公平台</div>
                    <div className="lg_top_content_split" />
                    <div className={`lg_top_help lg_top_notice ${o.hasNotice ? "lg_top_node" : ""}`} onClick={o.onNotice}>消息</div>
                    <div className="lg_top_help" onClick={this.openHelp}>帮助</div>
                    <div className="lg_top_content_split" />
                    <div className="lg_top_hover_btn" onClick={this.openPersonPage}>
                        <div className="lg_top_icon left" style={{backgroundImage: `url(${o.userIconUrl})`}}/>
                        <div className="lg_top_name left">{decodeURIComponent(o.userName)}</div>
                        <div className="left lg_top_user_type oneline" style={{backgroundImage: `url(${o.userTypeIcon})`}} title={o.userType}>{o.userType || ""}</div>
                    </div>
                    <div className="lg_top_quit lg_top_hover_btn" onClick={o.onQuitPage}></div>
                </div>
                <CurrentTime />
            </div>
        )
    }
}

function CurrentTime() {
    const interTime = (time: any) => {
        setTimeout(function () {
            var getTime = setTopTime();
            interTime(getTime.sec)
            setTime(getTime)
        }, time);
    }
    const setTopTime = () => {
        var date = new Date();
        var y = date.getFullYear();
        var m = formatNum(date.getMonth() + 1);
        var d = formatNum(date.getDate());
        var day = formartDay(date.getDay());
        var h = formatNum(date.getHours());
        var min = formatNum(date.getMinutes());
        var sec = date.getSeconds();
        return {
            date: y + "-" + m + "-" + d, 
            day: day, 
            time: h + ":" + min,
            sec: sec ? sec * 1000 : 60000
        }
    }
	const formatNum = (num: number) => {
		return (num > 9) ? num : "0" + num.toString();
	}
    const formartDay = (i: number) => {
        var day = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        return day[i];
    }
    const [time, setTime] = useState(()=> {
        var getTime = setTopTime();
        interTime(getTime.sec)
        return getTime;
    });
    return (
        <div className="lg_top_time right">{time.date}&nbsp;&nbsp;{time.day}&nbsp;&nbsp;{time.time}</div>
    )
}