import React, {Component, useState} from 'react';
import TopBar from "@/components/topBar";
import myEvent from "../../type/event";

import './index.scss'
import {setGlobalSKin, toNextSkin} from "../../utils/skin";

import IconLogo from '@/images/logo.png'
import {UserInfoResult} from "@/type/main";
import {getEduInfo, logout} from "@/network/http";
import Pops from "../../utils/pops";

interface IHeaderState {
    headerInfo:any
}
interface IHeaderProps {
    userInfo : UserInfoResult
}
class Index extends Component<IHeaderProps, IHeaderState> {
    constructor(props:IHeaderProps) {
        super(props);
        myEvent.on("setGlobalSkin", (skin:string)=>{

        })
        this.state = {
            headerInfo : {
                logoStyle: {background: `url(${IconLogo}) center center no-repeat`, width: 40, height: 36, marginTop: 4},
                logoName: "智慧校园通后台管理",
                homeUrl: "http://www.baidu.com",
                helpUrl: "http://www.baidu.com",
                onNotice: () => { console.log(1111) },
                userIconUrl: require("./images/default_icon.jpg"),
                userName: "艾雪溪",
                userTypeIcon: require("./images/identity.png"),
                userType: "测试用户",
                onQuitPage: () => { console.log(2222) },
                otherBtn: [{
                    iconUrl: require("./images/top_help.png"),
                    btnName: "换肤",
                    onBtn: () => {
                        toNextSkin()
                    }
                }]
            }
        }
    }

    componentDidMount(){
        this.handleUserInfo(this.props.userInfo)
    }

    UNSAFE_componentWillReceiveProps(np:any){
        console.log(np.userInfo)
        this.handleUserInfo(np.userInfo)
    }
    getCookie(cname: any) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    delCookie(cname: any) {
        var exp: any = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(cname);
        if (cval) document.cookie = cname + "=;expires=" + exp.toGMTString();
    }
    async logout(){
        try {
            const globalToken = this.getCookie("lg_tk")
            const globalBaseUrl = this.getCookie("globalBaseUrl")
            await logout({ token:globalToken })
            const curHref = encodeURI(window.location.href)
            this.delCookie('lg_tk')
            this.delCookie('globalBaseUrl')
            window.location.href = globalBaseUrl + "#/?lg_preurl=" + curHref
        }catch (error:any){
            Pops.showError(error.message)
        }
    }

    async toEduBasePage(){
        try {
            const data = await getEduInfo()
            window.open(data.address)
        }catch (e:any) {
            Pops.showError(e.message)
        }
    }

    handleUserInfo(userInfo:any){
        const headerInfo = {
            logoStyle: {background: `url(${IconLogo}) center center no-repeat`, width: 40, height: 36, marginTop: 4},
            logoName: "智慧校园通后台管理",
            homeUrl: "http://www.baidu.com",
            helpUrl: "http://www.baidu.com",
            onNotice: () => { console.log(1111) },
            userIconUrl: userInfo.photoPath,
            userName: userInfo.userName,
            userTypeIcon: require("./images/identity.png"),
            onQuitPage: () => {
                this.logout()
            },
            toBasePage:()=>{
                this.toEduBasePage()
            },
            otherBtn: [{
                iconUrl: require("./images/top_help.png"),
                btnName: "换肤",
                onBtn: () => {
                    toNextSkin()
                }
            }]
        }
        this.setState({
            headerInfo:headerInfo
        })
    }

    render() {
        return (
            <div className={'root-header'}>
                <TopBar {...this.state.headerInfo} />
            </div>
        );
    }
}


export default Index;