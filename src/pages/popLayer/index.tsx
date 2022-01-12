import { LgPopLayer, PopLayerProps } from '@/components/popLayer'
import React, { Component } from 'react'
import './index.scss'
interface PopLayerState {
    isOpenPopLayer: boolean;
    name?: string | null;
    nowTime?: Date | string;
    isOpen1: boolean;
    isOpen2: boolean;
    isOpen3: boolean;
    isOpen4: boolean;
    isOpen5: boolean;
    props4?: PopLayerProps
}

export default class popLayer extends Component<{}, PopLayerState> {
    constructor(props: any) {
        super(props)
        this.state = {
            isOpenPopLayer: true,
            name: '弹窗',
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
            isOpen5: false,
            props4: {
                isOpen: false, title: '第四个弹窗',
                onClose: this.closePop4.bind(this),
                onShowLayer: this.showPopLayerFun4
            }
        }
        this.showPopLayerFun1 = this.showPopLayerFun1.bind(this)
        this.showPopLayerFun2 = this.showPopLayerFun2.bind(this)
        this.showPopLayerFun3 = this.showPopLayerFun3.bind(this)
        this.showPopLayerFun4 = this.showPopLayerFun4.bind(this)
        this.initTime = this.initTime.bind(this)
        this.initDom1 = this.initDom1.bind(this)
        this.initDom2 = this.initDom2.bind(this)
        this.initDom3 = this.initDom3.bind(this)
        this.initDom4 = this.initDom4.bind(this)
        this.closePop1 = this.closePop1.bind(this)
        this.closePop4 = this.closePop4.bind(this)
    }
    initTime() {
        let time = new Date().toTimeString();
        this.setState({
            nowTime: time
        })
        return time
    }
    initDom1() {
        return (
            <div className='open_1'>
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
                dfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfhdfjashkdfhasjdfh
            </div>)
    }
    initDom2() {
        return (
            <div>
                福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就
                福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就
                福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就
                福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就
                福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就
                福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就
                福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就福的故事预覆盖是的回复就
            </div>)
    }
    initDom3() {
        return (
            <div>
                3333333333333333333333333333333333333333333
            </div>)
    }
    initDom4() {
        return (
            <div>
                4444444444444444444444444444444444444444444
            </div>)
    }

    showPopLayerFun1(isOpen: boolean) {
        console.log('====================================');
        console.log(isOpen);
        console.log('====================================');
        this.setState({
            isOpen1: isOpen
        })
    }
    showPopLayerFun2(isOpen: boolean) {
        this.setState({
            isOpen2: isOpen
        })
    }
    showPopLayerFun3(isOpen: boolean) {
        this.setState({
            isOpen3: isOpen
        })
    }
    showPopLayerFun4(isOpen: boolean) {
        let props4 = this.state.props4 as PopLayerProps
        props4.isOpen = isOpen;
        this.setState({
            props4
        })
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.showPopLayerFun1(!this.state.isOpen1)
        // }, 1000)
        // setTimeout(() => {
        //     this.showPopLayerFun3(!this.state.isOpen3)
        // }, 2000)
        // setTimeout(() => {
        //     this.showPopLayerFun4(!this.state.isOpen4)
        // }, 3000)
        // setTimeout(() => {
        //     this.showPopLayerFun2(!this.state.isOpen2)
        // }, 4000)
    }
    closePop1(isOpen: boolean) {
        this.setState({
            isOpen1: isOpen
        })
    }
    closePop4(isOpen: boolean) {
        let props4 = this.state.props4 as PopLayerProps
        props4.isOpen = isOpen;
        this.setState({
            props4
        })
    }
    render() {
        return (
            <>
                <div className='open_layer'>
                    <input type="button" value="打开弹窗1" onClick={() => { this.showPopLayerFun1(!this.state.isOpen1) }} />
                    <input type="button" value="打开弹窗2" onClick={() => { this.showPopLayerFun2(!this.state.isOpen2) }} />
                    <input type="button" value="打开弹窗3" onClick={() => { this.showPopLayerFun3(!this.state.isOpen3) }} />
                    <input type="button" value="打开弹窗4" onClick={() => { this.showPopLayerFun4(!this.state.isOpen4) }} />
                </div>
                <LgPopLayer isOpen={this.state.isOpen1} width={400} height={500} onShowLayer={this.showPopLayerFun1} title='打开弹窗1' onClose={this.closePop1} showCoverLayer={false}>{this.initDom1()}</LgPopLayer>
                <LgPopLayer isOpen={this.state.isOpen2} onShowLayer={this.showPopLayerFun2} title='打开弹窗2' >{this.initDom2()}</LgPopLayer>
                <LgPopLayer isOpen={this.state.isOpen3} onShowLayer={this.showPopLayerFun3} title='打开弹窗3'>{this.initDom3()}</LgPopLayer>
                <LgPopLayer isOpen={this.state.props4?.isOpen as boolean} {...this.state.props4} onShowLayer={this.showPopLayerFun3}>{this.initDom4()}</LgPopLayer>
            </>
        )
    }
}

