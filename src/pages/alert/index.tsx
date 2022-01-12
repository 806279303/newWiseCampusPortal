import { lgAlert } from '@/components/alert'
import Button from '@/components/button'
import React, { Component } from 'react'
import { Alert } from 'element-react'
import './index.scss'
interface AlertState {
    num: number,
    successLoading: boolean
}

export default class alert extends Component<{}, AlertState> {
    constructor(props: any) {
        super(props);
        this.state = { num: 0, successLoading: false }
        this.alertMsg = this.alertMsg.bind(this)
        this.alertMsg2 = this.alertMsg2.bind(this)
        this.alertMsg3 = this.alertMsg3.bind(this)
        this.alertMsg4 = this.alertMsg4.bind(this)
        this.alertMsg5 = this.alertMsg5.bind(this)
        this.alertMsg6 = this.alertMsg6.bind(this)
        this.alertMsg7 = this.alertMsg7.bind(this)
        this.alertMsg8 = this.alertMsg8.bind(this)
        this.alertMsg9 = this.alertMsg9.bind(this)
        this.alertMsgCustom = this.alertMsgCustom.bind(this)
    }
    alertMsg() {
        let alert = lgAlert.show({
            isShowCloseBtn: true,
            tipType: this.state.successLoading ? 'success' : 'loading',
            position: { xAxis: 'left', yAxis: 'top' }
        });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 * 2 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg2() {
        let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, isShowCloseBtn: true, position: { xAxis: 'center', yAxis: 'top' } });
        console.log(alert)
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 0, customClose: (<div className='custom_close_dom'>关闭</div>) }, alert.index);
        }, 1000 * 3)
    }
    alertMsg3() {
        let alert = lgAlert.show({ tipType: 'question', duration: 0, position: { xAxis: 'right', yAxis: 'top' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000, }, alert.index);
        }, 1000 * 3)
    }
    alertMsg4() {
        let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'left', yAxis: 'center' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg5() {
        let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'center', yAxis: 'center' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg6() {
        let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'right', yAxis: 'center' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 0, isShowCloseBtn: true }, alert.index);
        }, 1000 * 3)
    }
    alertMsg7() {
        let alert = lgAlert.show({ isShowCloseBtn: true, tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'left', yAxis: 'bottom' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg8() {
        let alert = lgAlert.show({ isShowCloseBtn: true, tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'center', yAxis: 'bottom' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg9() {
        let alert = lgAlert.show({ isShowCloseBtn: true, tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'right', yAxis: 'bottom' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsgCustom() {
        let alert = lgAlert.show({ isShowCloseBtn: true, tipType: 'warning', position: { xOffset: '-50%', xAxis: '50%', yAxis: 32, showDirection: 'center', showAlign: 'top' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'error', content: "加载失败~", duration: 1000 * 2, isShowCloseBtn: false, }, alert.index);
        }, 1000 * 3)
    }
    clearAlertMsgCustom() {
        lgAlert.show({ tipType: 'closeAll' })
    }
    alertSuccess() {
        let alert = lgAlert.show({ tipType: 'success', tipMouldType: 'E', duration: 0, closable: true, closeText: "关闭", description: "全市各社区(村)、西安急救中心和各医疗机构均不得以查验核酸48小时阴性证明作为进出小区就医、转送病人和接诊的限制。全文2331字，阅读约需4分钟 据央视新闻消息，陕西西安1... " });
    }
    alertWarning() {
        let alert = lgAlert.show({ tipType: 'warning', tipMouldType: 'E', duration: 0, description: "How do you spell color? You’ll see other writers do it two ways—the one we’ve already used in this paragraph, and another one—colour. Neither of the spellings is wrong, and they both mean exactly the same thing. Still, the two spellings are slightly different, so there has to be something to it, right? Let’s see. " });
    }
    alertInfo() {
        let alert = lgAlert.show({ tipType: 'info', tipMouldType: 'E', duration: 0, isShowIcon: false });

    }
    alertError() {
        let alert = lgAlert.show({
            tipType: 'error', tipMouldType: 'E', isShowCloseBtn: true, description: `There are a couple of ways you can choose which spelling to use. You can, for example, choose the spelling that’s prevalent in the country you’re from—if you’re an American, use color. If you’re from any of the Commonwealth countries, use colour. If English is not your first language, use the spelling you were taught.

        You can also choose to conform to the spelling that’s preferred by your audience. If you’re writing for Americans, use the spelling they prefer. If you’re writing something for Brits, Australians, or Canadians, use the spelling they prefer.
        If you’re still not sure which to choose, or if you’re writing for an international audience, the best thing to do is choose one of the spellings and stick with it. In other words, choose consistency. ` });
    }
    alertASuccess() {
        let alert = lgAlert.show({ tipType: 'success', tipSize: 'mini', tipMouldType: 'A', duration: 0, closable: true, closeText: "关闭", description: "全市各社区(村)、西安急救中心和各医疗机构均不得以查验核酸48小时阴性证明作为进出小区就医、转送病人和接诊的限制。全文2331字，阅读约需4分钟 据央视新闻消息，陕西西安1... " });
    }
    alertAWarning() {
        let alert = lgAlert.show({ tipType: 'warning', tipSize: 'small', tipMouldType: 'A', containerClassName: 'weishoujiong', duration: 0, description: "How do you spell color? You’ll see other writers do it two ways—the one we’ve already used in this paragraph, and another one—colour. Neither of the spellings is wrong, and they both mean exactly the same thing. Still, the two spellings are slightly different, so there has to be something to it, right? Let’s see. " });
    }
    alertAInfo() {
        let alert = lgAlert.show({ tipType: 'info', reverse: true, tipMouldType: 'A', duration: 0 });

    }
    alertAError() {
        let alert = lgAlert.show({
            tipType: 'error', tipMouldType: 'A', tipSize: 'big', isShowCloseBtn: true, description: `There are a couple of ways you can choose which spelling to use. You can, for example, choose the spelling that’s prevalent in the country you’re from—if you’re an American, use color. If you’re from any of the Commonwealth countries, use colour. If English is not your first language, use the spelling you were taught.
        You can also choose to conform to the spelling that’s preferred by your audience. If you’re writing for Americans, use the spelling they prefer. If you’re writing something for Brits, Australians, or Canadians, use the spelling they prefer.
        If you’re still not sure which to choose, or if you’re writing for an international audience, the best thing to do is choose one of the spellings and stick with it. In other words, choose consistency. ` });
    }
    alertAQuestion() {
        let alert = lgAlert.show({
            tipType: 'question', tipMouldType: 'A', duration: 0, isShowCloseBtn: true, description: `There are a couple of ways you can choose which spelling to use. You can, for example, choose the spelling that’s prevalent in the country you’re from—if you’re an American, use color. If you’re from any of the Commonwealth countries, use colour. If English is not your first language, use the spelling you were taught.
        If you’re still not sure which to choose, or if you’re writing for an international audience, the best thing to do is choose one of the spellings and stick with it. In other words, choose consistency. ` });
    }

    componentDidMount() { }
    render() {
        return (
            < >

                <div>
                    默认-LgUI-Alert:
                    <div>
                        <input type="button" value="左上" onClick={this.alertMsg} className='comment_position alert_position_left_top' />
                        <input type="button" value="中上" onClick={this.alertMsg2} className='comment_position alert_position_left_top' />
                        <input type="button" value="右上" onClick={this.alertMsg3} className='comment_position alert_position_left_top' />
                        <input type="button" value="中左" onClick={this.alertMsg4} className='comment_position alert_position_left_top' />
                        <input type="button" value="中中" onClick={this.alertMsg5} className='comment_position alert_position_left_top' />
                        <input type="button" value="中右" onClick={this.alertMsg6} className='comment_position alert_position_left_top' />
                        <input type="button" value="下左" onClick={this.alertMsg7} className='comment_position alert_position_left_top' />
                        <input type="button" value="下中" onClick={this.alertMsg8} className='comment_position alert_position_left_top' />
                        <input type="button" value="下右" onClick={this.alertMsg9} className='comment_position alert_position_left_top' />
                        <input type="button" value="自定义位置" onClick={this.alertMsgCustom} className='comment_position alert_position_left_top' />
                        <input type="button" value="清除所有的弹窗" onClick={this.clearAlertMsgCustom} className='comment_position alert_position_left_top' />
                    </div>
                </div>
                <div>
                    A款-LgUI-Alert:
                    <div>
                        <input type="button" value="success" onClick={this.alertASuccess} className='comment_position alert_position_left_top' />
                        <input type="button" value="warning" onClick={this.alertAWarning} className='comment_position alert_position_left_top' />
                        <input type="button" value="info" onClick={this.alertAInfo} className='comment_position alert_position_left_top' />
                        <input type="button" value="question" onClick={this.alertAQuestion} className='comment_position alert_position_left_top' />
                        <input type="button" value="error" onClick={this.alertAError} className='comment_position alert_position_left_top' />
                    </div>
                </div>
                <div>
                    E款-ElementUI-Alert:
                    <div>
                        <input type="button" value="success" onClick={this.alertSuccess} className='comment_position alert_position_left_top' />
                        <input type="button" value="warning" onClick={this.alertWarning} className='comment_position alert_position_left_top' />
                        <input type="button" value="info" onClick={this.alertInfo} className='comment_position alert_position_left_top' />
                        <input type="button" value="error" onClick={this.alertError} className='comment_position alert_position_left_top' />
                    </div>
                </div>
                {/* <Alert title='提示' showIcon /> */}
            </>
        )
    }
}

