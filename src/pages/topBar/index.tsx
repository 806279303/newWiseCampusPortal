import TopBar from "@/components/topBar";
import "./index.scss";
export default () => {
    return (
        <div>
            <div className="top_bar_warp">
                <TypeAItem className="lg-skin-s1" />
                <TypeAItem className="lg-skin-s2" />
                <TypeAItem className="lg-skin-s3" />
                <TypeAItem className="lg-skin-s4" />
                <TypeAItem className="lg-skin-s5" />
            </div>
        </div>
    )
}

function TypeAItem(props: {className: string}) {
    var myprops = {
        logoStyle: {background: `url(${require('./images/web_logo.png')}) center center`, width: 313, height: 64, marginRight: -20 },
        version: "蓝鸽中学定制版",
        homeUrl: "http://www.baidu.com",
        helpUrl: "http://www.baidu.com",
        onNotice: () => { console.log(1111) },
        userIconUrl: require("./images/default_icon.jpg"),
        userName: "艾雪溪",
        userTypeIcon: require("./images/IC0003.png"),
        userType: "测试用户",
        onQuitPage: () => { console.log(2222) },
        otherBtn: [{
            iconUrl: require("./images/top_help.png"),
            btnName: "另外的按钮",
            onBtn: () => {console.log(33333)}
        }]
    }
    return (
        <div className={props.className}>
            <TopBar {...myprops} />
        </div>
    )
}