import { stat } from 'fs';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "./index.scss";

export interface PopLayerProps {
    // coverLayer
    showCoverLayer?: boolean;//是否展示遮罩层 | 默认值：true
    coverLayerClass?: string;//遮罩层类名

    // popLayerBox
    isOpen: boolean;//是否打开弹窗
    width?: number;//弹窗的总宽度 | 默认值: 500
    height?: number;//弹窗的总高度 | 默认值: 400
    title?: string;//弹窗头部的标题 | 默认值:
    className?: string;//弹窗最外层的类名

    // top
    isShowTopClose?: boolean;//是否显示头部的关闭按钮 | 默认值:false

    // children
    mainClass?: string;//自定义弹窗容器的类名

    // bottom
    isShowBottom?: boolean;//是否显示底部的 | 默认值:true
    confirmText?: string;//确认按钮需要显示的文本
    closeText?: string;//关闭按钮需要显示的文本
    confirmClass?: string;//确认按钮元素上的类名
    closeClass?: string;//关闭按钮元素上的类名


    onConfirm?: () => void;//点击确认按钮的函数
    onClose?: (isOpen: boolean) => void;//点击关闭按钮的函数
    onShowLayer: (isOpen: boolean) => void;
    customOfHeader?: React.ReactDOM | React.ReactChild | React.ReactElement;//弹窗中间部分添加的自定义Dom
    children?: (React.ReactDOM | React.ReactChild | React.ReactElement) | (() => React.ReactElement);//弹窗头部添加的自定义Dom
}
export interface PopLayerState {
    isOpen: boolean;//弹窗是否打开
    popLayerMainClassName: string;//弹窗打开的动画
    coverLayerMainClassName: string;//遮罩层打开的动画
}
let popLayerCreateNumIndex = 0;//创建弹窗实例的次数
let popLayerZIndex = 1000;//弹出成是否拥有遮罩层
let _hasPopLayerOpen: number[] = [];
export class LgPopLayer extends Component<PopLayerProps, PopLayerState, { isOpen: boolean }> {
    constructor(props: PopLayerProps | Readonly<PopLayerProps>) {
        super(props);
        this.state = {
            isOpen: false,
            popLayerMainClassName: '',
            coverLayerMainClassName: ''
        }
        this.initCoverLayer = this.initCoverLayer.bind(this);
        this.popLayerMouseDown = this.popLayerMouseDown.bind(this);
        this.popLayerMouseMove = this.popLayerMouseMove.bind(this);
        this.popLayerMouseUp = this.popLayerMouseUp.bind(this);
        this.closePopLayer = this.closePopLayer.bind(this);
        this.confirmPopLayer = this.confirmPopLayer.bind(this);
    }
    private popLayerZIndex = 0;//弹出层默认层级数
    private popLayerCreateNumIndex = 0//弹窗实例创建的次数
    // 给props设置默认值
    static defaultProps = {
        showCoverLayer: true,//是否展示遮罩层 | 默认值：true
        title: 'Lg弹出层-默认标题',//弹窗头部的标题 | 默认值:
        isShowTopClose: false,//是否显示头部的关闭按钮 | 默认值:false
        isShowBottom: true,//是否显示底部的 | 默认值:true
        confirmText: '确认',//确认按钮需要显示的文本
        closeText: '取消',//关闭按钮需要显示的文本
        zIndex: popLayerZIndex,//弹窗的层级
        width: 500,//弹窗的总宽度 | 默认值: 500
        height: 400,//弹窗的总高度 | 默认值: 400

    }
    /**
     * @name closePopLayer
     * @msg 关闭当前弹窗
     * @param type 0: 点击确认按钮 1: 点击关闭按钮或者取消 
     * @param fun 点击确认时需要触发的函数
     */
    closePopLayer(type = 0, fun?: () => any) {
        this.setState({
            isOpen: false
        }, () => {
            this.initCoverLayer(0, this.popLayerCreateNumIndex)
            if (type == 0) { fun && fun(); return };
            this.props.onShowLayer && this.props.onShowLayer(this.props.isOpen)
            this.props.onClose && this.props.onClose(false);
        })
    }
    // 打开当前弹窗
    confirmPopLayer(type = 0) {
        this.closePopLayer(0, this.props.onConfirm);
    }
    UNSAFE_componentWillReceiveProps(nextProps: PopLayerProps) {
        if (this.props.isOpen == nextProps.isOpen) return;
        let initCoverLayerType: number = nextProps.isOpen ? 1 : 0;// 0: 无弹窗 1:有弹窗
        this.setState({ isOpen: nextProps.isOpen }, () => {
            let popLayerMainClassName = nextProps.isOpen ? 'lg_popLayer_container_show ' : ' ';
            let coverLayerMainClassName = nextProps.isOpen ? 'lg_popLayer_container_coverLayer_show ' : ' ';

            setTimeout(() => {
                this.setState({
                    popLayerMainClassName,
                    coverLayerMainClassName
                })
            }, 200);
            this.initCoverLayer(initCoverLayerType, this.popLayerCreateNumIndex, nextProps.showCoverLayer);
        })
    }
    /**
     * @name unique
     * @msg 数组去重
     * @param arr number[]
     * @returns number[]
     */
    unique(arr: number[]): number[] {
        if (!Array.isArray(arr)) { return [] }
        let array = [];
        for (var i = 0; i < arr.length; i++) {
            if (array.indexOf(arr[i]) === -1) {
                array.push(arr[i])
            }
        }
        return array;
    }
    /**
     * @name initCoverLayer
     * @param CoverLayerType | 0: 无弹窗显示 1：有弹窗显示
     * @msg 设置遮罩层的显示与隐藏
     */
    initCoverLayer(CoverLayerType: number, popLayerCreateNumIndex: number, showCoverLayer = false) {
        _hasPopLayerOpen = this.unique(_hasPopLayerOpen)
        let coverLayerDom = document.querySelectorAll('.lg_popLayer_container_coverLayer');
        // 处理有弹窗关闭的情况
        if (!CoverLayerType && _hasPopLayerOpen.length) {
            _hasPopLayerOpen = this.unique(_hasPopLayerOpen)
            let index = _hasPopLayerOpen.indexOf(parseInt(popLayerCreateNumIndex as any))
            if (index != -1) {
                _hasPopLayerOpen.splice(index, 1)
            }
        }
        if (!CoverLayerType && _hasPopLayerOpen.length) {
            _hasPopLayerOpen = this.unique(_hasPopLayerOpen)
            let maxIndex: number = -1;
            _hasPopLayerOpen.forEach(o => {
                maxIndex = o > maxIndex ? o : maxIndex;
            })
            popLayerCreateNumIndex = maxIndex
            if (popLayerCreateNumIndex > -1) {
                showCoverLayer = this.props.showCoverLayer ? true : false
                CoverLayerType = 1
            }
        }
        if (coverLayerDom.length) {
            coverLayerDom.forEach((o: HTMLElement | any, i) => {
                if (CoverLayerType) {
                    let className = o.getAttribute('class');
                    let coverNumIndex = o.getAttribute('data-cover-index');
                    let zIndex = o.style.zIndex;
                    if (coverNumIndex == popLayerCreateNumIndex) {
                        o.style.opacity = '0.6'
                        o.style.filter = 'alpha(opacity=60)'
                        o.style.display = showCoverLayer ? 'block' : 'none'
                        o.style.zIndex = 10000;
                        o.previousElementSibling.style.zIndex = 10000 + (this.popLayerCreateNumIndex + 1);
                        o.parentNode.style.zIndex = 10000;
                        _hasPopLayerOpen.push(parseInt(coverNumIndex))
                    } else {
                        o.style.display = 'none'
                        o.style.opacity = '0'
                        o.style.filter = 'alpha(opacity=0)'
                        o.style.zIndex = this.popLayerZIndex;;
                        o.previousElementSibling.style.zIndex = this.popLayerZIndex + (this.popLayerCreateNumIndex + 1);
                        o.parentNode.style.zIndex = this.popLayerZIndex;
                    }
                } else {
                    _hasPopLayerOpen.splice(popLayerCreateNumIndex, 1)
                }
            })
        }
    }
    popLayerMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let parentNode = e.currentTarget.parentNode as ParentNode as HTMLElement
        let parentContainerNode = e.currentTarget.parentNode?.parentNode as ParentNode as HTMLElement;
        this.maxMoveWidth = parentContainerNode.offsetWidth - parentNode.offsetWidth
        this.maxMoveHeight = parentContainerNode.offsetHeight - parentNode.offsetHeight
        this.divLeftWidth = e.pageX - parentNode.offsetLeft;
        this.divTopHeight = e.pageY - parentNode.offsetTop;
        this.parentNode = parentNode
        this.isPopLayerMove = true;
    }
    isPopLayerMove: boolean = false;//是否开启移动
    divLeftWidth: number = 0;//鼠标距离容器左边的宽度
    divTopHeight: number = 0;//鼠标距离容器顶部的高度
    maxMoveWidth: number = 0;//容器移动的最大距离
    maxMoveHeight: number = 0;//容器移动的最大高度
    parentNode: ParentNode | HTMLElement | null = null;//弹窗的Dom
    popLayerMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (this.isPopLayerMove) {
            let parentNode = this.parentNode as ParentNode as HTMLElement;
            let left = e.pageX - this.divLeftWidth;
            let top = e.pageY - this.divTopHeight;
            if (left <= 0) {
                left = 1;
            }
            if (left >= this.maxMoveWidth) {
                left = this.maxMoveWidth - 2
            }
            if (top <= 0) {
                top = 1;
            }
            if (top >= this.maxMoveHeight) {
                top = this.maxMoveHeight - 1
            }
            parentNode.style.left = left.toString() + 'px';
            parentNode.style.top = top.toString() + 'px';

        }
    }
    popLayerMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        this.isPopLayerMove = false
    }
    componentDidMount() {
        popLayerZIndex = popLayerZIndex + 2;
        this.popLayerZIndex = popLayerZIndex;
        this.popLayerCreateNumIndex = popLayerCreateNumIndex++;
        console.log('componentDidMount')
        setTimeout(() => {
            this.initPopLayerPosition(this.popLayerCreateNumIndex);
        }, 1000 * 1.1);
    }
    getStyle(obj: any, name: string) {
        if (obj.currentStyle) {
            return obj.currentStyle[name]; /*仅支持IE*/
        }
        else {
            return getComputedStyle(obj)[name as any]; /*w3c 标准*/
            //兼容IE和火狐  return window.getComputedStyle.getPropertyValue(name);   
        }
    }
    private popLayerLeft = 0;//弹窗相对窗口左侧的位置
    private popLayerTop = 0;//弹窗相对窗口顶部的位置
    initPopLayerPosition(popLayerCreateNumIndex: number) {
        let currentDom = document.getElementById('lg_popLayer_container' + popLayerCreateNumIndex) as HTMLElement;
        console.log(parseFloat(currentDom.style.width))
        currentDom.style.left = ((document.documentElement.clientWidth / 2) - (parseFloat(currentDom.style.width) / 2)) + 'px';
        currentDom.style.top = ((document.documentElement.clientHeight / 2) - (parseFloat(currentDom.style.height) / 2)) + 'px';
    }
    componentDidUpdate() {
        return true
    }
    render() {
        const { props, state } = this;
        let coverLayerClassName = true ? 'lg_popLayer_container_coverLayer lg_popLayer_container_coverLayer_show' : 'lg_popLayer_container_coverLayer_show'
        return ReactDOM.createPortal(
            <div className='lg_popLayer_big_container ' onMouseUp={this.popLayerMouseUp} onMouseMove={this.popLayerMouseMove} style={{ zIndex: this.popLayerZIndex, display: state.isOpen ? 'block' : 'none' }}>
                {/* 弹窗的窗体 */}
                <div
                    className={'lg_popLayer_container ' + state.popLayerMainClassName + (props.className || '')}
                    style={{ left: this.popLayerLeft, top: this.popLayerTop, width: props.width, height: props.height, zIndex: this.popLayerZIndex + 1 }}
                    id={'lg_popLayer_container' + this.popLayerCreateNumIndex}
                >
                    <div
                        className='lg_popLayer_top'
                        onMouseDown={this.popLayerMouseDown}
                        onMouseMove={this.popLayerMouseMove}
                        onMouseUp={this.popLayerMouseUp}
                    >
                        <div className='lg_popLayer_top_title'>{props.title}</div>
                        <div className='lg_popLayer_top_close' onClick={() => { this.closePopLayer() }}></div>
                    </div>
                    <div className={'lg_popLayer_main ' + (props.mainClass || '')}>{props.children}</div>
                    <div className='lg_popLayer_bottom ' style={{ display: props?.isShowBottom ? "flex" : "none" }}>
                        <div className='lg_popLayer_bottom_cho_box'>
                            <div className={'lg_popLayer_bottom_confirm_box ' + (props.confirmClass || '')}><input onClick={() => { this.confirmPopLayer() }} className='lg_popLayer_bottom_confirm_input input_item' value={props.confirmText} type={'button'} /></div>
                            <div className={'lg_popLayer_bottom_close_box ' + (props.closeClass || '')}><input onClick={() => { this.closePopLayer(1) }} className='lg_popLayer_bottom_close_input input_item' value={props.closeText} type={'button'} /></div>
                        </div>
                    </div>
                </div>
                {/* 遮罩层 */}
                <div className={'lg_popLayer_container_coverLayer ' + state.coverLayerMainClassName} data-index={this.popLayerZIndex} data-cover-index={this.popLayerCreateNumIndex} style={{ zIndex: this.popLayerZIndex, display: props.showCoverLayer ? 'block' : 'none' }}></div>
            </div>,
            document.getElementById('Lg_popLayer_root') as any
        )
    }
}




let popLayerCreateIndex = 0;
; (() => {
    /**
     * @msg 创建传送门的根节点
     * @popLayerCreateIndex 创建的根节点的次数
     */
    if (popLayerCreateIndex) return;
    let popLayer = document.getElementById('Lg_popLayer_root');
    if (popLayer) {
        document.removeChild(popLayer)
    }
    let popLayerDom = document.createElement('div');
    popLayerDom.style.display = 'none';
    popLayerDom.setAttribute('id', 'Lg_popLayer_root');
    document.body.appendChild(popLayerDom);
    ++popLayerCreateIndex
    setTimeout(() => {
        let popLayer = document.getElementById('Lg_popLayer_root') as HTMLElement;
        popLayer.style.display = 'block';
    }, 1000 * 1.5);
})();
