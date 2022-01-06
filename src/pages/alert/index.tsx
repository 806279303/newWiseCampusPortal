import { lgAlert } from '@/components/alert'
import Button from '@/components/button'
import React, { Component } from 'react'

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
            showCloseBtn: true,
            tipType: this.state.successLoading ? 'success' : 'loading',
            position: { xAxis: 'left', yAxis: 'top' }
        });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 * 2 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg2() {
        let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'center', yAxis: 'top' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 0, }, alert.index);
        }, 1000 * 3)
    }
    alertMsg3() {
        let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'right', yAxis: 'top' } });
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
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 0 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg7() {
        let alert = lgAlert.show({ showCloseBtn: true, tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'left', yAxis: 'bottom' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg8() {
        let alert = lgAlert.show({ showCloseBtn: true, tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'center', yAxis: 'bottom' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg9() {
        let alert = lgAlert.show({ showCloseBtn: true, tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'right', yAxis: 'bottom' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsgCustom() {
        let alert = lgAlert.show({ showCloseBtn: true, tipType: 'waring', position: { xOffset: '-50%', xAxis: '50%', yAxis: 32, showDirection: 'center', showAlign: 'left' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'error', content: "加载失败~", duration: 1000 * 2, showCloseBtn: false, }, alert.index);
        }, 1000 * 3)
    }
    componentDidMount() { }
    render() {
        return (
            < >
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
            </>
        )
    }
}

