import FirstPage from "@/components/firstPage";
import {useState} from "react";
import './index.scss';
import myEvent from "../../type/event";
import CurrentPage from "../subPage";

var skinIndex = 1
export default () => {
    var myprops = {
        logoStyle: {background: `url(${require('../topBar/images/web_logo.png')}) center center`, width: 313, height: 64, marginRight: -20 },
        version: "蓝鸽中学定制版",
        homeUrl: "http://www.baidu.com",
        helpUrl: "http://www.baidu.com",
        onNotice: () => { console.log(1111) },
        userIconUrl: require("../topBar/images/default_icon.jpg"),
        userName: "艾雪溪",
        userTypeIcon: require("../topBar/images/IC0003.png"),
        userType: "测试用户",
        onQuitPage: () => { console.log(2222) },
        otherBtn: [{
            iconUrl: require("../topBar/images/top_help.png"),
            btnName: "点击切换风格",
            onBtn: () => {
                skinIndex ++; 
                var curIndex = (skinIndex % 5) + 1;
                var skin = "lg-skin-s" + curIndex;
                myEvent.emit("setSkin", skin)}
        }]
    }
    var btnList = [
        {
            name: "首页",
            icon: require("./images/default_icon.png"),
            subPage: "index.html", 
            redNode: true
        }, {
            name: "主页",
            icon: require("./images/default_icon.png"),
            btns: [
                {name: "主页1", subPage: <CurrentPage />, redNode: true},
                {name: "主页2", subPage: "index.html"},
                {name: "主页3", subPage: "index.html"},
                {name: "主页4", subPage: "index.html"}
            ]
        }, {
            name: "主页1",
            icon: require("./images/default_icon.png"),
            btns: [
                {name: "尝试一下谁上", subPage: "index.html", redNode: true},
                {name: "尝试一下谁上", subPage: "index.html"}
            ]
        }, {
            name: "主页1",
            icon: require("./images/default_icon.png"),
            btns: [
                {name: "尝试一下谁上", subPage: "index.html", redNode: true},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"},
                {name: "尝试一下谁上", subPage: "index.html"}
            ]
        }
    ]
    const [skin, setSkin] = useState('lg-skin-s1');
    myEvent.on("setSkin", (skin: string) => {
        setSkin(skin);
    })
    return (
        <div className={skin}>
            <FirstPage TopBarProps={myprops} btnList={btnList} />
        </div>
    )
}