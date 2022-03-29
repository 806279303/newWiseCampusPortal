import React, {Component, useState} from 'react';
import TopBar from "@/components/topBar";
import myEvent from "../../type/event";

import './index.scss'
import {setGlobalSKin, toNextSkin} from "../../utils/skin";

interface IHeaderState {
    myprops:any
}
class Index extends Component<{}, IHeaderState> {
    constructor(props:{}) {
        super(props);
        myEvent.on("setGlobalSkin", (skin:string)=>{

        })
        this.state = {
            myprops : {
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
                    onBtn: () => {
                        toNextSkin()
                    }
                }]
            }
        }
    }
    render() {
        return (
            <div className={'root-header'}>
                <TopBar {...this.state.myprops} />
            </div>
        );
    }
}


export default Index;