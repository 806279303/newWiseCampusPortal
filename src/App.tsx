import {Redirect, Route, Switch} from 'react-router-dom'
import {Routers} from './routers'
import Header from '@/views/header'
import SideBar from '@/views/sideBar'
import Tabs from '@/views/tabs'
import {Component, Suspense} from 'react'
import 'element-theme-default';
import './App.scss'
import {FlexFillViewFrame} from "@/components/flexFillViewFrame";
import {allPath} from "./routers/routers";
import {checkToken, getBaseAddr, getUserInfo, logout} from "./network/http";
import Pops from "./utils/pops";
import {GetMainAddress, UserInfoResult} from "@/type/main";
import pops from "./utils/pops";
import 'lancoo-web-ui/style'
interface IState {
    baseUrl: string
    userInfo: UserInfoResult|{}
}

class App extends Component<{}, IState> {
    globalToken:string
    globalBaseUrl:string
    constructor(props: any) {
        super(props);
        this.state = {
            baseUrl: '',
            userInfo: {}
        }
        this.globalToken = ''
        this.globalBaseUrl = 'http://www.lancooedu.com/'
    }
    getUrlParams() {
        var urlParamsStr = window.location.search.substr(1);

        if (urlParamsStr) {
            var urlParamsArr = urlParamsStr.split("&");
            var urlParamsObj: any = {};

            for (var i = 0; i < urlParamsArr.length; i++) {
                var index = urlParamsArr[i].indexOf("=");
                var key = urlParamsArr[i].substr(0, index);
                var value = urlParamsArr[i].substr(index + 1);

                urlParamsObj[key] = value;
            }

            return urlParamsObj;
        } else {
            return null;
        }
    }

    setCookie(cname: any, cvalue: any) {
        var d = new Date();
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

    async componentDidMount() {
        try {
            const data = await getBaseAddr()
            this.globalBaseUrl = data.address
            this.setCookie("globalBaseUrl", data.address)
            this.setState({baseUrl: data.address})
            await this.getUserInfo()
        } catch (error: any) {
            Pops.showError(error.message)
            this.setState({baseUrl: ''})
        }
    }

    async getUserInfo() {
        try {
            const urlParams = this.getUrlParams()
            const lg_tk = urlParams && urlParams.lg_tk || this.getCookie("lg_tk")
            if (lg_tk){
                const result = await this.testOnline(lg_tk)
                if(result){
                    const data = await getUserInfo({ token:lg_tk })
                    this.setState({ userInfo:data })
                }else{
                    const curHref = encodeURI(window.location.href)
                    window.location.href = this.globalBaseUrl + "#/?lg_preurl=" + curHref
                }
            }else{
                const curHref = encodeURI(window.location.href)
                window.location.href = this.globalBaseUrl + "#/?lg_preurl=" + curHref
            }
        } catch (error:any) {
            Pops.showError(error.message)
            const curHref = encodeURI(window.location.href)
            window.location.href = this.globalBaseUrl + "#/?lg_preurl=" + curHref
        }
    }

    async testOnline(token:string){
        if(!token)return false
        const data = await checkToken({ token:token })
        if(data.result){
            this.globalToken = token
            this.setCookie("lg_tk", token)
            setInterval(()=>{
                checkToken({ token:token }).then(res=>{
                    if(!res.result){
                        const curHref = encodeURI(window.location.href)
                        window.location.href = this.globalBaseUrl + "#/?lg_preurl=" + curHref
                    }
                }).catch(res=>{
                    console.error(res)
                })
            }, 60000)
            return true
        }
        return false
    }

    async logOut(){
        try {
            await logout({ token:this.globalToken })
            const curHref = encodeURI(window.location.href)
            this.delCookie('lg_tk')
            window.location.href = this.globalBaseUrl + "#/?lg_preurl=" + curHref
        }catch (error:any){
            Pops.showError(error.message)
        }
    }

    render() {
        if (!this.state.baseUrl) return <div>404</div>
        const userInfo = this.state.userInfo as UserInfoResult
        return (
            <FlexFillViewFrame className="root" flexStart={<Header userInfo={userInfo}/>} orientation="vertical">
                <FlexFillViewFrame className="root-body" flexStart={<SideBar/>}>
                    <FlexFillViewFrame className="root-body-content" flexStart={<Tabs/>} orientation="vertical">
                        <Suspense fallback={<div/>}>
                            <Switch>
                                {
                                    Routers.map(router => (
                                        <Route
                                            exact={!router.notExect}
                                            key={router.path}
                                            path={router.path}
                                            component={router.component}
                                        >
                                        </Route>
                                    ))
                                }
                                <Redirect path="/" to={allPath.HOME}/>
                            </Switch>
                        </Suspense>
                    </FlexFillViewFrame>
                </FlexFillViewFrame>
            </FlexFillViewFrame>
        )
    }
}

export default App