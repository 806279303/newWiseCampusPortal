import './index.scss'
import {Component, useState} from 'react'

interface Props {
    logoUrl: string,
    version?: string,
    homeUrl: string,
    helpUrl: string,
    onNotice: () => void,
    userIconUrl: string,
    userName: string,
    userTypeIcon: string,
    userType?: string,
    onQuitPage: () => void,
    otherBtn?: {
        iconUrl: string,
        btnName: string,
        onBtn: () => void
    }[]
}

export default class TopBar extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div className='lg_top_bar'>

            </div>
        )
    }
}

function CurrentTime() {
    const [time, setTime] = useState("");
    const setTopTime = () => {
        var date = new Date();
        var y = date.getFullYear();
        var m = formatNum(date.getMonth() + 1);
        var d = formatNum(date.getDate());
        var day = formartDay(date.getDay());
        var h = formatNum(date.getHours());
        var min = formatNum(date.getMinutes());
        var sec = date.getSeconds();
        var time = sec ? sec * 1000 : 60000;
        setTime(y + "-" + m + "-" + d + "&nbsp;&nbsp;" + day + "&nbsp;&nbsp;" + h + ":" + min);
        setTimeout(function () {
            setTopTime();
        }, time);
    }
	const formatNum = (num: number) => {
		return (num > 9) ? num : "0" + num.toString();
	}
    const formartDay = (i: number) => {
        var day = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        return day[i];
    }
    setTopTime();
    return (
        <div className="lg_top_time right">{time}</div>
    )
}